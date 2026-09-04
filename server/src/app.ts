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

app.use("/api/menu", menuRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/blog", blogRoutes);

export default app;