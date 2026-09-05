import express from "express";
import cors from "cors";

import menuRoutes from "./routes/menuRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Cellexa API Server is running",
  });
});

app.get("/debug-env", (_req, res) => {
  res.json({
    hasMongoUri: Boolean(process.env.MONGO_URI),
    hasEmailHost: Boolean(process.env.EMAIL_HOST),
    hasEmailPort: Boolean(process.env.EMAIL_PORT),
    hasEmailUser: Boolean(process.env.EMAIL_USER),
    hasEmailPassword: Boolean(process.env.EMAIL_PASSWORD),
    hasReceiverEmail: Boolean(process.env.RECEIVER_EMAIL),
  });
});

app.use("/api/menu", menuRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/blog", blogRoutes);

export default app;