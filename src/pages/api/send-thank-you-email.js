// pages/api/send-thank-you-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      // 1. Create a transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'gmail', 'yahoo', 'outlook'
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // 2. Define the email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank You for Subscribing!',
        html: `
          <p>Thank you for subscribing to our newsletter!</p>
          <p>We're excited to have you on board.</p>
          `,
      };

      // 3. Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}