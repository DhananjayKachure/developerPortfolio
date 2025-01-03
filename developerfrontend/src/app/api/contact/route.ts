// app/api/contact/route.ts

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Create a transporter for Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Or use another email service provider
    auth: {
      user: 'dhananjaykachure.dev@gmail.com',  // Replace with your email
      pass: 'qxfc tdla vfvp fayx',   // Use an app-specific password if you're using Gmail
    },
  });

  const mailOptions = {
    from: 'dhananjaykachure.dev@gmail.com', // Replace with your email
    to: 'dhananjaykachure.dev@gmail.com', // Replace with the email where you want to receive the form
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' });
  }
}