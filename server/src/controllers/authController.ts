import type { Request, Response } from "express";
import pool from "../db.js";

export const login = async (req: Request, res: Response) => {
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
};
