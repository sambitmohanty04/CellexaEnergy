import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Menu
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

    res.json(result.rows);
  } catch (err) {
    console.error("Menu Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// Submenu
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

    res.json(result.rows);
  } catch (err) {
    console.error("Submenu Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// Contact - INSERT
app.post("/api/contactus", async (req, res) => {
  console.log("📥 Contact request:", req.body);

  try {
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

    // Insert into PostgreSQL
    const result = await pool.query(
      `INSERT INTO public.contact_us
        (full_name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [
        name,
        email,
        phone || null,
        subject || null,
        message,
      ]
    );

    console.log("✅ Contact inserted:", result.rows[0]);

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully.",
      data: result.rows[0],
    });
  } catch (err) {
    console.error("❌ Contact API Error:", err);

    res.status(500).json({
      success: false,
      message: "Unable to submit contact form.",
      error: err.message,
    });
  }
});

// Get contacts
app.get("/api/contactus", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM public.contact_us
      ORDER BY id DESC
    `);

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Get Contact Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// Login API
app.post("/api/users", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and Password are required",
      });
    }

    const result = await pool.query(
      `SELECT
          id,
          full_name,
          username,
          email,
          role
       FROM public.users
       WHERE username = $1
       AND password = $2
       AND is_active = true`,
      [username, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username or Password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      user: result.rows[0],
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// Server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});