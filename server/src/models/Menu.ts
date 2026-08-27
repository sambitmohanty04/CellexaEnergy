import mongoose, { Document, Schema } from "mongoose";

interface ISubMenu {
  id: number;
  name: string;
  link: string;
}

export interface IMenu extends Document {
  id: number;
  name: string;
  link?: string;
  subMenus?: ISubMenu[];
}

const subMenuSchema = new Schema<ISubMenu>(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const menuSchema = new Schema<IMenu>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    subMenus: {
      type: [subMenuSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model<IMenu>("Menu", menuSchema);

export default Menu;