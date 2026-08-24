import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../../service/api";

interface BlogForm {
  title: string;
  slug: string;
  short_description: string;
  content: string;
  image_url: string;
  author: string;
  category: string;
  status: string;
}

const AddBlog = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<BlogForm>({
    title: "",
    slug: "",
    short_description: "",
    content: "",
    image_url: "",
    author: "Admin",
    category: "",
    status: "published",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ==========================================
  // Generate slug
  // ==========================================
  const generateSlug = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  // ==========================================
  // Handle title
  // ==========================================
  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const title = e.target.value;

    setForm((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  // ==========================================
  // Handle other inputs
  // ==========================================
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // Submit
  // ==========================================
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await API_URL.post("/blogs", {
        ...form,
        published_at:
          form.status === "published"
            ? new Date().toISOString()
            : null,
      });

      console.log("Created blog:", response.data);

      setMessage("Blog created successfully!");

      // Go to blogs page after success
      setTimeout(() => {
        navigate("/blogs");
      }, 1000);

    } catch (error: any) {
      console.error("Error creating blog:", error);

      setMessage(
        error?.response?.data?.message ||
          "Failed to create blog"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12">

      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8">

          <h1 className="text-base font-bold text-slate-900">
            Add New Blog
          </h1>

          <p className="mt-2 text-slate-500">
            Create a new blog article.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6"
        >

          {/* Success / Error message */}
          {message && (
            <div className="px-4 py-3 rounded-xl bg-blue-50 text-blue-700">
              {message}
            </div>
          )}

          {/* ==================================
              TITLE
          ================================== */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Blog Title *
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleTitleChange}
              placeholder="Enter blog title"
              required
              className="w-full px-4 py-1 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ==================================
              SLUG
          ================================== */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Slug *
            </label>

            <input
              type="text"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              placeholder="blog-slug"
              required
              className="w-full px-4 py-1 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-xs text-slate-400 mt-2">
              URL: /blogs/{form.slug || "blog-slug"}
            </p>
          </div>

          {/* ==================================
              SHORT DESCRIPTION
          ================================== */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Short Description
            </label>

            <textarea
              name="short_description"
              value={form.short_description}
              onChange={handleChange}
              rows={3}
              placeholder="Enter a short description..."
              className="w-full px-4 py-1 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* ==================================
              CONTENT
          ================================== */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Blog Content *
            </label>

            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={12}
              placeholder="Write your blog content here..."
              required
              className="w-full px-4 py-1 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>

          {/* ==================================
              IMAGE URL
          ================================== */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Image URL
            </label>

            <input
              type="text"
              name="image_url"
              value={form.image_url}
              onChange={handleChange}
              placeholder="/images/solar.jpg"
              className="w-full px-4 py-1 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ==================================
              AUTHOR + CATEGORY
          ================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Author
              </label>

              <input
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Admin"
                className="w-full px-4 py-1 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Category
              </label>

              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Solar Energy"
                className="w-full px-4 py-1 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          {/* ==================================
              STATUS
          ================================== */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Status
            </label>

            <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
            >
                <option value="draft">
                    Draft
                </option>

                <option value="published">
                    Published
                </option>
            </select>
          </div>

          {/* ==================================
              BUTTONS
          ================================== */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">

            <button
              type="button"
              onClick={() => navigate("/blogs")}
              className="text-md px-6 py-1 rounded-md border bg-gray-600 border-slate-200 text-slate-100 font-semibold hover:bg-slate-50 transition hover:text-slate-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="text-md px-6 py-1 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Blog..." : "Create Blog"}
            </button>

          </div>

        </form>

      </div>

    </main>
  );
};

export default AddBlog;