import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Change to 3000 if using CRA
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.get("/api/menu", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
        id,
        menu_name AS name,
        menu_link AS link
        FROM menu
        WHERE is_active = true
        ORDER BY display_order`
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/api/submenu", async (req, res) => {
  try {

    const result = await pool.query(
      `SELECT
          id,
          menu_id,
          submenu_name AS smenu_name,
          submenu_link AS smenu_link
       FROM public.submenu
       ORDER BY menu_id, display_order`
    );
    //console.log("Submenu Rows:", result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
// Get all contacts
app.get("/api/contactus", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM contact_us ORDER BY id DESC"
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});
//Save data in ContactUs
app.post("/api/contactus", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO contact_us
       (full_name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, email, phone, subject, message]
    );

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: result.rows[0],
    });

  } catch (error) {
    console.error("Insert Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit contact form",
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
       WHERE username=$1
       AND password=$2
       AND is_active=true`,
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


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});