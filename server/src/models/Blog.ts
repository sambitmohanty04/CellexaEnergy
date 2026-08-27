import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  author?: string;
  category?: string;
  published: boolean;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    excerpt: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      trim: true,
    },

    author: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      trim: true,
    },

    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;