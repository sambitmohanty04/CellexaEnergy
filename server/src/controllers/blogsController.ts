import type { Request, Response } from "express";
import pool from "../db.js";

// Blogs lists
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM public.blogs
      ORDER BY created_at DESC
    `);

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
    });
  }
};

// Blogs details by id 
export const getBlogBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const result = await pool.query(
      `
      SELECT
        id,
        title,
        slug,
        short_description,
        content,
        image_url,
        author,
        category,
        status,
        published_at,
        created_at,
        updated_at
      FROM public.blogs
      WHERE slug = $1
        AND status = 'published'
      LIMIT 1
      `,
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error fetching blog:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch blog",
    });
  }
};

// create blog
export const createBlog = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      title,
      slug,
      short_description,
      content,
      image_url,
      author,
      category,
      status,
      published_at,
    } = req.body;

    // Required fields
    if (!title || !slug || !content) {
      return res.status(400).json({
        success: false,
        message: "Title, slug and content are required",
      });
    }

    // Check if slug already exists
    const existingBlog = await pool.query(
      `
      SELECT id
      FROM public.blogs
      WHERE slug = $1
      LIMIT 1
      `,
      [slug]
    );

    if (existingBlog.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "A blog with this slug already exists",
      });
    }

    const blogStatus = status || "draft";

    const blogPublishedAt =
      blogStatus === "published"
        ? published_at || new Date()
        : null;

    const result = await pool.query(
      `
      INSERT INTO public.blogs (
        title,
        slug,
        short_description,
        content,
        image_url,
        author,
        category,
        status,
        published_at
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9
      )
      RETURNING *
      `,
      [
        title,
        slug,
        short_description || null,
        content,
        image_url || null,
        author || "Admin",
        category || null,
        blogStatus,
        blogPublishedAt,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: result.rows[0],
    });

  } catch (error) {
    console.error("Error creating blog:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create blog",
    });
  }
};