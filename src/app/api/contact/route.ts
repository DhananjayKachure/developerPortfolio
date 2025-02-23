// app/api/contact/route.ts

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailToSelf = { from: 'dhananjaykachure.dev@gmail.com', // Replace with your email
    to: 'dhananjaykachure.dev@gmail.com', // Replace with the email where you want to receive the form
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`};
  const mailToUser = {   from: 'dhananjaykachure.dev@gmail.com', // Replace with your email
    to: email, // Send the email to the person who contacted you
    subject: 'Thank You for Contacting Me!',
    text: `Hi ${name},\n\nThank you for reaching out to me! I have received your message and will get back to you soon.\n\nBest regards,\nDhananjay`, };

  // Trigger sending emails without waiting for them to complete
  transporter.sendMail(mailToSelf).catch(err => console.error('Error sending mailToSelf:', err));
  transporter.sendMail(mailToUser).catch(err => console.error('Error sending mailToUser:', err));

  return NextResponse.json({ success: true });
}
