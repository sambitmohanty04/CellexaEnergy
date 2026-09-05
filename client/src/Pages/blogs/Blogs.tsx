import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import ContactusComponent from "../../Components/ContactusComponent";
import API_URL from "../../service/api";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  short_description: string | null;
  content: string;
  image: string | null;
  author: string | null;
  category: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const categories = [
  "All",
  "Solar Energy",
  "Sustainability",
  "Energy Solutions",
  "Renewable energy",
];

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await API_URL.get("/api/blog");
      setBlogs(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        <section className="relative overflow-hidden py-10">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/energy-5.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-12 h-[2px] bg-blue-500" />
              <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                Our Blog
              </p>
              <span className="w-12 h-[2px] bg-blue-500" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold !text-white mb-5">
              Energy Insights & Ideas
            </h1>

            <p className="text-blue-100 text-sm mx-auto leading-7">
              Explore the latest insights, trends and innovations shaping
              the future of sustainable and renewable energy.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-12 h-[2px] bg-blue-500" />
              <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                Latest Insights
              </p>
              <span className="w-12 h-[2px] bg-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
              Ideas That Power a Better Future
            </h2>
            <p className="text-gray-600 leading-7 text-sm">
              Stay informed about renewable energy, sustainability,
              technology and innovative solutions that are helping build
              a cleaner and more sustainable world.
            </p>
          </div>
        </section>

        <section className="bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                    ? "bg-blue-700 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12 text-center">
            <div>
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />
                <p className="!mb-0 text-blue-700 text-xs font-bold uppercase tracking-wide">
                  Explore Our Articles
                </p>
                <span className="w-12 h-[2px] bg-blue-500" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Latest From Our Blog
              </h2>
            </div>

            <div className="mt-5">
              <Link
                to="/add-blog"
                className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
              >
                <span className="text-lg leading-none">+</span>
                Add Blog
              </Link>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
              <p className="mt-4 text-slate-500 text-sm">
                Loading blogs...
              </p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 text-5xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-700">
                No blogs found
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Try selecting another category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog._id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback =
                            e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.classList.remove("hidden");
                            fallback.classList.add("grid");
                          }
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}

                    <div
                      className={`
                        ${blog.image ? "hidden" : "grid"}
                        absolute inset-0 place-items-center
                        bg-gradient-to-br from-blue-50 to-green-50
                      `}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white shadow-md flex items-center justify-center">
                          <span className="text-3xl">📰</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-500">
                          No Image
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {blog.category && (
                      <div className="mb-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-50 text-blue-500 text-xs border border-blue-100">
                          {blog.category}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-xs">
                          <FaCalendarDays />
                        </span>
                        <span className="text-gray-400 text-xs">
                          {blog.createdAt
                            ? new Date(blog.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )
                            : "Not published"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-xs">
                          <IoIosTimer />
                        </span>
                        <span className="text-gray-400 text-xs">
                          5 min read
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 leading-7 group-hover:text-blue-700 transition">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-6 !mb-4 line-clamp-3">
                      {blog.short_description}
                    </p>

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center text-blue-700 font-semibold text-sm hover:text-blue-900 transition"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <ContactusComponent />
      </div>
    </>
  );
};

export default Blogs;