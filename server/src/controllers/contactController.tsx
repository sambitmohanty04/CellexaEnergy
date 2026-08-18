import type { Request, Response } from "express";
import pool from "../db.js";

export const getContacts = async (req: Request, res: Response) => {
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
};

export const createContact = async (req: Request, res: Response) => {
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
};
