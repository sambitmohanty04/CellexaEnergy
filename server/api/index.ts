import app from "../src/app.js";
import connectDB from "../src/config/db.js";

export default async function handler(req: any, res: any) {
  try {
    await connectDB();
    return app(req, res);
  } catch (error) {
    console.error("API startup error:", error);

    return res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
}