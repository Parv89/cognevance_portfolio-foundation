import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { ContactModel } from './models/Contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5174',
    'https://parv89.github.io'
  ],
  credentials: true,
}));

// MongoDB Connection
if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    })
    .then(() => {
      console.log("✅ Connected to MongoDB Database");
    })
    .catch((err) => {
      console.log("========== FULL MONGODB ERROR ==========");
      console.error(err);
      console.log("========================================");
    });
} else {
  console.log("⚠️ MONGODB_URI not provided. Server will run in Mock API Mode.");
}

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Luxury Portfolio API',
  });
});

// POST /api/contact — Submit Contact Form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic Input Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields: name, email, subject, and message.',
      });
    }

    // Email regex check
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    let savedContact = { name, email, subject, message, createdAt: new Date() };
    // Save to MongoDB if connected
console.log("MongoDB Ready State:", mongoose.connection.readyState);

if (mongoose.connection.readyState === 1) {
  try {
    const newContact = new ContactModel({
      name,
      email,
      subject,
      message,
    });

    savedContact = await newContact.save();

    console.log("✅ SAVED TO MONGODB");
    console.log(savedContact);

  } catch (err) {
    console.log("❌ MONGODB SAVE ERROR");
    console.error(err);
    throw err;
  }
} else {
  console.log("❌ MongoDB Not Connected");
}

console.log("📨 New Contact Form Submission:", savedContact);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you within 24 hours.',
      data: {
        id: savedContact._id || Date.now().toString(),
        name: savedContact.name,
        createdAt: savedContact.createdAt,
      },
    });

  } catch (error) {
  console.log("========== ERROR ==========");
  console.error(error);
  console.error(error.stack);
  console.log("==========================");

  return res.status(500).json({
    success: false,
    error: error.message,
  });
}
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio Backend Server running on http://localhost:${PORT}`);
});
