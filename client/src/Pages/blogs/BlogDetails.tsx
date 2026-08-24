import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    FiArrowLeft,
    FiCalendar,
    FiClock,
    FiFacebook,
    FiLinkedin,
    FiShare2,
    FiTwitter,
    FiUser,
} from "react-icons/fi";
import API_URL from "../../service/api";

interface Blog {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
    content: string;
    image_url: string | null;
    author: string | null;
    category: string | null;
    status: string;
    published_at: string | null;
    created_at: string;
    updated_at: string;
}

const BlogDetails = () => {
    const { slug } = useParams<{ slug: string }>();

    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (slug) {
            setBlog(null);
            setError("");
            fetchBlog();
        }
    }, [slug]);

    const fetchBlog = async () => {
        try {
            setLoading(true);

            const response = await API_URL.get(`/blogs/${slug}`);

            console.log("Blog details:", response.data);

            setBlog(response.data.data);
        } catch (error) {
            console.error("Error fetching blog:", error);

            setBlog(null);
            setError("Blog not found");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        if (loading) {
            return (
                <main className="min-h-screen bg-slate-50 flex items-center justify-center">
                    <div className="text-center">

                        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto" />

                        <p className="!mt-4 text-slate-500">
                            Loading blog...
                        </p>

                    </div>
                </main>
            );
        }
    }

    if (!blog) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
                <div className="text-center max-w-md">

                    <div className="text-6xl mb-5">
                        📰
                    </div>

                    <p className="mt-3 text-slate-500">
                        {error || "The blog you are looking for does not exist."}
                    </p>

                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 mt-6 px-3 py-1 rounded-xl bg-blue-600 text-white font-sm hover:bg-blue-700 transition"
                    >
                        <FiArrowLeft />
                        Back to Blogs
                    </Link>

                </div>
            </main>
        );
    }

    const publishedDate = blog.published_at
        ? new Date(blog.published_at).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
        : "Not published";

    return (
        <main className="bg-slate-50 min-h-screen">

            {/* =====================================
          HERO SECTION
      ===================================== */}
            <section className="relative overflow-hidden bg-slate-950">

                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

                    {/* Breadcrumb */}
                    <div className="mb-10">
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition"
                        >
                            <FiArrowLeft />
                            Back to Blogs
                        </Link>
                    </div>

                    <div className="max-w-4xl">

                        {/* Category */}
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-6">
                            {blog.category || "Blog"}
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight !text-white tracking-tight">
                            {blog.title}
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-sm md:text-sm text-slate-300 leading-relaxed max-w-3xl">
                            {blog.short_description}
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-slate-300">

                            <div className="flex items-center gap-2">
                                <FiUser className="text-blue-400" />
                                <span>{blog.author || "Admin"}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FiCalendar className="text-blue-400" />
                                <span>{publishedDate}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FiClock className="text-blue-400" />
                                <span>5 min read</span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================
          FEATURED IMAGE
      ===================================== */}
            <section className="relative -mt-8 md:-mt-16">

                <div className="max-w-6xl mx-auto px-6 lg:px-8">

                    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">

                        {blog.image_url ? (
                            <img
                                src={blog.image_url}
                                alt={blog.title}
                                className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
                            />
                        ) : (
                            <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">📰</div>

                                    <p className="text-slate-500 text-lg">
                                        No Image Available
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                    </div>

                </div>
            </section>

            {/* =====================================
          ARTICLE CONTENT
      ===================================== */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Social Share */}
                    <aside className="lg:col-span-2">

                        <div className="lg:sticky lg:top-24">

                            <div className="flex lg:flex-col items-center lg:items-start gap-3">

                                <span className="text-sm font-semibold text-slate-500 mb-2">
                                    SHARE
                                </span>

                                <button
                                    className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition"
                                >
                                    <FiFacebook />
                                </button>

                                <button
                                    className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-500 hover:border-blue-300 transition"
                                >
                                    <FiTwitter />
                                </button>

                                <button
                                    className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-300 transition"
                                >
                                    <FiLinkedin />
                                </button>

                                <button
                                    className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition"
                                >
                                    <FiShare2 />
                                </button>

                            </div>
                        </div>

                    </aside>

                    {/* Article */}
                    <article className="lg:col-span-8">

                        <div
                            className="
                prose
                prose-lg
                max-w-none
                prose-headings:text-slate-900
                prose-headings:font-bold
                prose-h2:text-3xl
                prose-h2:mt-12
                prose-h2:mb-5
                prose-h3:text-2xl
                prose-h3:mt-10
                prose-p:text-slate-600
                prose-p:leading-8
                prose-li:text-slate-600
                prose-strong:text-slate-900
                prose-a:text-blue-600
                hover:prose-a:text-blue-700
              "
                        >
                            {blog.content}
                        </div>

                        {/* Bottom divider */}
                        <div className="border-t border-slate-200 mt-14 pt-8">

                            <div className="flex flex-wrap items-center justify-between gap-5">

                                <div>
                                    <p className="text-sm text-slate-500 mb-1">
                                        Written by
                                    </p>

                                    <p className="font-semibold text-slate-900">
                                        {blog.author || "Admin"}
                                    </p>
                                </div>

                                <Link
                                    to="/blogs"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                                >
                                    <FiArrowLeft />
                                    More Articles
                                </Link>

                            </div>

                        </div>

                    </article>

                    {/* Right Sidebar */}
                    <aside className="lg:col-span-2">

                        <div className="sticky top-24">

                            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">

                                <p className="text-sm font-semibold text-slate-900 mb-4">
                                    Article Info
                                </p>

                                <div className="space-y-4 text-sm">

                                    <div>
                                        <p className="text-slate-400">
                                            Category
                                        </p>

                                        <p className="font-medium text-blue-600 mt-1">
                                            {blog.category || "General"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-slate-400">
                                            Published
                                        </p>

                                        <p className="font-medium text-slate-700 mt-1">
                                            {publishedDate}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-slate-400">
                                            Reading Time
                                        </p>

                                        <p className="font-medium text-slate-700 mt-1">
                                            5 minutes
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </aside>

                </div>

            </section>

            {/* =====================================
          CTA
      ===================================== */}
            <section className="px-6 lg:px-8 pb-20">

                <div className="max-w-6xl mx-auto">

                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 px-8 py-14 md:px-14 text-center">

                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative">

                            <h2 className="text-3xl md:text-4xl font-bold !text-white">
                                Interested in Sustainable Energy?
                            </h2>

                            <p className="text-blue-100 mt-4 mx-auto">
                                Discover innovative solar and renewable energy
                                solutions designed for a cleaner and more
                                sustainable future.
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center mt-4 px-4 py-1.5 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default BlogDetails;