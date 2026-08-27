import type { Request, Response } from "express";
import Contact from "../models/Contact.js";

export const createContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });

      return;
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Create Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit contact form",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};