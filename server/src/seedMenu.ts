import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import Menu from "./models/Menu.js";
import { menus } from "./seed/menuData.js";

const seedMenu = async (): Promise<void> => {
  try {
    await connectDB();

    await Menu.deleteMany({});

    await Menu.insertMany(menus);

    console.log("Menu data inserted successfully");

    process.exit(0);
  } catch (error) {
    console.error("Menu seed error:", error);
    process.exit(1);
  }
};

seedMenu();