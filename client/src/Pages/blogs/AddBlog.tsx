import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../../service/api";

interface BlogForm {
  title: string;
  slug: string;
  short_description: string;
  content: string;
  image: string;
  author: string;
  category: string;
  published: boolean;
}

const AddBlog = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<BlogForm>({
    title: "",
    slug: "",
    short_description: "",
    content: "",
    image: "",
    author: "Admin",
    category: "",
    published: true,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const generateSlug = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

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

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      published: e.target.value === "published",
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");
      setIsError(false);

      const response = await API_URL.post("/api/blog", form);

      console.log("Created blog:", response.data);

      setMessage("Blog created.");

      setTimeout(() => {
        navigate("/blogs");
      }, 1000);
    } catch (error: any) {
      console.error("Error creating blog:", error);

      setIsError(true);
      setMessage(
        error?.response?.data?.message ||
          "Couldn't create the blog. Check the required fields and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100";

  const labelClasses =
    "mb-1.5 block text-sm font-medium text-slate-700";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-10">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Blog
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              New post
            </h1>
          </div>

          <button
            type="button"
            onClick={() => navigate("/blogs")}
            className="text-sm font-medium text-slate-500 hover:text-slate-700"
          >
            ← All posts
          </button>
        </div>

        {/* Status message */}
        {message && (
          <div
            className={`mb-6 rounded-lg border px-4 py-3 text-sm ${
              isError
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Title + slug */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div>
              <label className={labelClasses}>Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleTitleChange}
                placeholder="How solar panels pay for themselves"
                required
                className={`${inputClasses} text-base font-medium`}
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="text-slate-400">/blogs/</span>
              <input
                type="text"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="blog-slug"
                required
                className="flex-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-slate-600 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Content */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
            <div>
              <label className={labelClasses}>Short Description</label>
              <textarea
                name="short_description"
                value={form.short_description}
                onChange={handleChange}
                rows={2}
                placeholder="One or two sentences shown on the blog list page"
                required
                className={`${inputClasses} resize-none`}
              />
            </div>

            <div>
              <label className={labelClasses}>Content</label>
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                rows={14}
                placeholder="Write the post..."
                required
                className={`${inputClasses} resize-y font-mono text-[13px] leading-relaxed`}
              />
            </div>
          </div>

          {/* Metadata */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClasses}>Cover image URL</label>
                <input
                  type="text"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="/images/solar.jpg"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Category</label>
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="Solar Energy"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Author</label>
                <input
                  type="text"
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  placeholder="Admin"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Status</label>
                <select
                  name="status"
                  value={form.published ? "published" : "draft"}
                  onChange={handleStatusChange}
                  className={inputClasses}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-6">
            <button
              type="button"
              onClick={() => navigate("/blogs")}
              className="rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating…" : "Create post"}
            </button>
          </div>

        </form>
      </div>
    </main>
  );
};

export default AddBlog;