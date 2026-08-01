import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { ContactModel } from "./models/Contact.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Allowed Origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5174",

  // GitHub Pages
  "https://parv89.github.io",

  // Vercel
  "https://portfolio-foundation-gray.vercel.app",
];

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

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
  console.log("⚠️ MONGODB_URI not provided.");
}

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    service: "Luxury Portfolio API",
    timestamp: new Date().toISOString(),
  });
});

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required.",
      });
    }

    const emailRegex =
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email address.",
      });
    }

    let savedContact;

    if (mongoose.connection.readyState === 1) {
      savedContact = await ContactModel.create({
        name,
        email,
        subject,
        message,
      });

      console.log("✅ SAVED TO MONGODB");
    } else {
      savedContact = {
        _id: Date.now().toString(),
        name,
        createdAt: new Date(),
      };

      console.log("⚠️ MongoDB Not Connected");
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: savedContact,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

