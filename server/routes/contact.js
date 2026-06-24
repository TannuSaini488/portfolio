import express from 'express';
import nodemailer from 'nodemailer';
import Message from '../models/message.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const recipientEmail = process.env.TO_EMAIL || process.env.SMTP_EMAIL;
  const senderEmail = process.env.SMTP_EMAIL || recipientEmail;
  const emailConfigured = senderEmail && process.env.SMTP_PASS && recipientEmail;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  let savedToDb = false;
  try {
    await Message.create({ name, email, message });
    savedToDb = true;
  } catch (err) {
    console.error('Mongo save failed:', err);
  }

  if (!emailConfigured) {
    return res.status(200).json({
      success: true,
      message: savedToDb
        ? 'Message saved, but email is not configured on the server.'
        : 'Email is not configured on the server.',
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: senderEmail,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: senderEmail,
    replyTo: email,
    to: recipientEmail,
    subject: `Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: savedToDb ? 'Message sent and saved!' : 'Message sent by email.',
    });
  } catch (error) {
    console.error('Email send failed:', error);
    return res.status(500).json({
      success: false,
      message: 'Email delivery failed. Check SMTP_EMAIL and SMTP_PASS.',
    });
  }
});

export default router;
