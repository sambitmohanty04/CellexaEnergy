import type { Request, Response } from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

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

    // Validate required fields
    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });

      return;
    }

    // Check email configuration
    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_PORT ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASSWORD ||
      !process.env.RECEIVER_EMAIL
    ) {
      console.error("Email configuration is missing");

      res.status(500).json({
        success: false,
        message: "Server email configuration is missing",
      });

      return;
    }

    // Save contact to MongoDB
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    console.log("Contact saved:", contact._id);

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),

      // Port 465 = secure connection
      secure: Number(process.env.EMAIL_PORT) === 465,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Cellexa Energy Website" <${process.env.EMAIL_USER}>`,

      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Contact Form: ${
        subject || "No Subject"
      }`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          
          <h2>New Contact Form Submission</h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone || "Not provided"}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject || "Not provided"}
          </p>

          <hr />

          <h3>Message:</h3>

          <p>
            ${message}
          </p>

        </div>
      `,
    });

    console.log("Email sent successfully");

    // Success response
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
      error:
        error instanceof Error
          ? error.message
          : String(error),
    });
  }
};