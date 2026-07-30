import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.json({
    project: "MahraDict API",
    version: "1.0.0",
    status: "Running"
  });
});

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`MahraDict API running on port ${PORT}`);
});
