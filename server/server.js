import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import axios from "axios";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const MONGO_CONNECTION = process.env.MONGO_URI || process.env.MONGO_URL;
const DEFAULT_RESUME_URL =
  "https://drive.google.com/file/d/11-Zgb5l1-isSiRHPZSmHa4F4W2ArpRPn/view?usp=sharing";

const extractGoogleDriveFileId = (value) => {
  const match = value.match(/\/file\/d\/([^/]+)/) || value.match(/[?&]id=([^&]+)/);
  return match ? match[1] : "";
};

const getResumeSourceUrl = (req) =>
  (req.query.url || process.env.RESUME_URL || DEFAULT_RESUME_URL).toString();

const getResumeFileId = (req) => extractGoogleDriveFileId(getResumeSourceUrl(req));

mongoose
  .connect(MONGO_CONNECTION)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err.message);
  });

app.use("/api/contact", contactRoutes);

app.get("/api/resume", async (req, res) => {
  const fileId = getResumeFileId(req);

  if (!fileId) {
    return res.status(400).send("Resume URL is not configured.");
  }

  const driveUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  try {
    const response = await axios.get(driveUrl, { responseType: "arraybuffer" });
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).send(Buffer.from(response.data));
  } catch (error) {
    console.error("Failed to fetch resume:", error.message);
    return res.status(500).send("Failed to load resume.");
  }
});

app.get("/api/resume/download", async (req, res) => {
  const fileId = getResumeFileId(req);

  if (!fileId) {
    return res.status(400).send("Resume URL is not configured.");
  }

  const driveUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  try {
    const response = await axios.get(driveUrl, { responseType: "arraybuffer" });
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="My_Resume.pdf"');
    return res.status(200).send(Buffer.from(response.data));
  } catch (error) {
    console.error("Failed to download resume:", error.message);
    return res.status(500).send("Failed to download resume.");
  }
});

app.get("/", (req, res) => {
  res.send("working...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
