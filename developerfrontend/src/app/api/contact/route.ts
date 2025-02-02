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

  // Email to yourself
  const mailToSelf = {
    from: 'dhananjaykachure.dev@gmail.com', // Replace with your email
    to: 'dhananjaykachure.dev@gmail.com', // Replace with the email where you want to receive the form
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Acknowledgment email to the person who contacted you
  const mailToUser = {
    from: 'dhananjaykachure.dev@gmail.com', // Replace with your email
    to: email, // Send the email to the person who contacted you
    subject: 'Thank You for Contacting Me!',
    text: `Hi ${name},\n\nThank you for reaching out to me! I have received your message and will get back to you soon.\n\nBest regards,\nDhananjay`,
  };

  try {
    // Send both emails
    await Promise.all([
      transporter.sendMail(mailToSelf),
      transporter.sendMail(mailToUser),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' });
  }
}
