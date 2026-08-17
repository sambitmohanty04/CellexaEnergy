import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

const app = express();

// ======================================================
// Middleware
// ======================================================

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without origin
      // Example: Postman, server-to-server requests
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

// ======================================================
// Home Route
// ======================================================

app.get("/", (req, res) => {
  res.status(200).send("Server Running");
});

// ======================================================
// Menu API
// ======================================================

app.get("/api/menu", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        menu_name AS name,
        menu_link AS link
      FROM public.menu
      WHERE is_active = true
      ORDER BY display_order
    `);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Menu Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch menu",
    });
  }
});

// ======================================================
// Submenu API
// ======================================================

app.get("/api/submenu", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        menu_id,
        submenu_name AS smenu_name,
        submenu_link AS smenu_link
      FROM public.submenu
      ORDER BY menu_id, display_order
    `);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Submenu Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch submenu",
    });
  }
});

// ======================================================
// Contact - GET
// ======================================================

app.get("/api/contactus", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        full_name,
        email,
        phone,
        subject,
        message
      FROM public.contact_us
      ORDER BY id DESC
    `);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Get Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch contact details",
    });
  }
});

// ======================================================
// Contact - POST
// ======================================================

app.post("/api/contactus", async (req, res) => {
  try {
    console.log("📥 Contact request:", req.body);

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const result = await pool.query(
      `
      INSERT INTO public.contact_us
      (
        full_name,
        email,
        phone,
        subject,
        message
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [
        name,
        email,
        phone || null,
        subject || null,
        message,
      ]
    );

    console.log("✅ Contact inserted:", result.rows[0]);

    return res.status(201).json({
      success: true,
      message: "Contact form submitted successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("❌ Contact API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to submit contact form.",
    });
  }
});

// ======================================================
// Login API
// ======================================================

app.post("/api/users", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and Password are required",
      });
    }

    const result = await pool.query(
      `
      SELECT
        id,
        full_name,
        username,
        email,
        role
      FROM public.users
      WHERE username = $1
        AND password = $2
        AND is_active = true
      `,
      [username, password]
    );

    // User not found
    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username or Password",
      });
    }

    // Login successful
    return res.status(200).json({
      success: true,
      message: "Login Successful",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during login",
    });
  }
});

// ======================================================
// 404 Route
// ======================================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

// ======================================================
// Server
// ======================================================

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});