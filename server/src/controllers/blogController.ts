import type { Request, Response } from "express";
import Blog from "../models/Blog.js";

// ==========================================
// GET ALL BLOGS
// ==========================================

export const getBlogs = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = Math.max(parseInt(req.query.page as string) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit as string) || 5, 50);
    const skip = (page - 1) * limit;

    const filter: Record<string, unknown> = { published: true };

    if (req.query.category) {
      filter.category = req.query.category;
    }

    const [blogs, total] = await Promise.all([
      Blog.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Blog.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      success: true,
      data: blogs,
      pagination: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
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
      excerpt,
      content,
      image,
      author,
      category,
      published,
    } = req.body;

    if (!title || !slug || !excerpt || !content) {
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
      excerpt,
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