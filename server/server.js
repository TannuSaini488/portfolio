import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const MONGO_CONNECTION = process.env.MONGO_URI || process.env.MONGO_URL;

mongoose
  .connect(MONGO_CONNECTION)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err.message);
  });

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("working...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
