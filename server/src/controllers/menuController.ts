import type { Request, Response } from "express";
import Menu from "../models/Menu.js";

export const getMenu = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const menus = await Menu.find().sort({ id: 1 });

    res.status(200).json({
      success: true,
      data: menus,
    });
  } catch (error) {
    console.error("Get Menu Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch menu",
    });
  }
};