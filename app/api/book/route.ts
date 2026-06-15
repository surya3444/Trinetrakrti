import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // 1. We extract the phone number from the incoming data here
    const { service, problem, name, email, phone, company, stage } = data;

    // 2. Save data to Firebase Firestore (including phone)
    await addDoc(collection(db, "bookings"), {
      service: service || "N/A",
      problem,
      name,
      email,
      phone: phone || "N/A", // Saving phone here
      company: company || "N/A",
      stage,
      status: "new",
      createdAt: serverTimestamp(),
    });

    // 3. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 4. Send Email Notification (including phone)
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Sending it to yourself
      replyTo: email, // So you can hit "reply" and talk directly to the lead
      subject: `New Lead: ${name} — ${service || "General enquiry"}`,
      html: `
        <h2 style="color: #17222F;">New Booking Details</h2>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Stage:</strong> ${stage}</p>
        <hr />
        <p><strong>The Problem:</strong></p>
        <p style="background: #F4F2EC; padding: 16px; border-radius: 8px;">${problem}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Booking saved and email sent." }, { status: 200 });

  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}