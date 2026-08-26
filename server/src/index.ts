import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import menuRoutes from "./routes/menuRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogsRoutes.js";


dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter((origin): origin is string => Boolean(origin));

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

// Health check
// app.get("/", (req, res) => {
//   res.status(200).send({
//     //DB_HOST: process.env.DB_HOST || "db.otiwmjiuprhdqhjzyrmz.supabase.co",
//     process.env.DB_HOST || "NOT_SET",
//     DB_PORT: process.env.DB_PORT || "5432",
//     DB_USER: process.env.DB_USER || "postgres",
//     DB_NAME: process.env.DB_NAME || "postgres",
//     PASSWORD_EXISTS: Boolean(process.env.DB_PASSWORD),
//   });
// });
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server Running",
    DB_HOST: process.env.DB_HOST || "NOT_SET",
    DB_PORT: process.env.DB_PORT || "NOT_SET",
    DB_USER: process.env.DB_USER || "NOT_SET",
    DB_NAME: process.env.DB_NAME || "NOT_SET",
    PASSWORD_EXISTS: Boolean(process.env.DB_PASSWORD),
  });
});
app.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});
// API routes
app.use("/api/menu", menuRoutes);
app.use("/api/contactus", contactRoutes);
app.use("/api", authRoutes);
app.use("/api/blogs", blogRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

export default app;