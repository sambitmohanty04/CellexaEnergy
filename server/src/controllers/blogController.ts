import type { Request, Response } from "express";
import Blog from "../models/Blog.js";

// ==========================================
// GET ALL BLOGS
// ==========================================

export const getBlogs = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const blogs = await Blog.find({
      published: true,
    })
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("Get Blogs Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
    });
  }
};

// ==========================================
// GET BLOG BY SLUG
// ==========================================

export const getBlogBySlug = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { slug } = req.params;

    const blog = await Blog.findOne({
      slug,
      published: true,
    }).lean();

    if (!blog) {
      res.status(404).json({
        success: false,
        message: "Blog not found",
      });

      return;
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Get Blog Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch blog",
    });
  }
};

// ==========================================
// CREATE BLOG
// ==========================================

export const createBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      title,
      slug,
      short_description,
      content,
      image,
      author,
      category,
      published,
    } = req.body;

    if (!title || !slug || !short_description || !content) {
      res.status(400).json({
        success: false,
        message: "Title, slug, short description and content are required",
      });

      return;
    }

    const existingBlog = await Blog.findOne({ slug });

    if (existingBlog) {
      res.status(409).json({
        success: false,
        message: "A blog with this slug already exists",
      });

      return;
    }

    const blog = await Blog.create({
      title,
      slug,
      short_description,
      content,
      image,
      author,
      category,
      published,
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    console.error("Create Blog Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};