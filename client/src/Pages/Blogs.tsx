import React from "react";
import ContactusComponent from "../Components/ContactusComponent";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

interface Blog {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  readTime: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Future of Solar Energy in a Sustainable World",
    category: "Solar Energy",
    date: "August 10, 2026",
    image: "/images/energy-6.jfif",
    description:
      "Discover how solar energy is transforming the way businesses and communities generate and consume clean electricity.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Why Renewable Energy Matters for Our Future",
    category: "Sustainability",
    date: "August 05, 2026",
    image: "/images/energy-2.jpg",
    description:
      "Renewable energy plays an important role in reducing emissions and creating a cleaner and more sustainable future.",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Smart Energy Solutions for Modern Businesses",
    category: "Energy Solutions",
    date: "July 28, 2026",
    image: "/images/energy-3.jpg",
    description:
      "Learn how innovative energy technologies can help organizations improve efficiency, reduce costs and achieve sustainability goals.",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "How Solar Power Can Reduce Energy Costs",
    category: "Solar Energy",
    date: "July 20, 2026",
    image: "/images/energy-5.jpg",
    description:
      "Explore the benefits of adopting solar power and how businesses can achieve long-term savings through clean energy.",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Building a Greener and Cleaner Future",
    category: "Environment",
    date: "July 15, 2026",
    image: "/images/telecom_1.jpg",
    description:
      "Sustainability requires innovative thinking, responsible practices and a commitment to protecting our environment.",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "The Role of Technology in Renewable Energy",
    category: "Technology",
    date: "July 08, 2026",
    image: "/images/energy-5.jpg",
    description:
      "Technology is helping make renewable energy more reliable, efficient and accessible across industries.",
    readTime: "6 min read",
  },
];

const categories = [
  "All",
  "Solar Energy",
  "Sustainability",
  "Energy Solutions",
  "Technology",
];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <section className="relative overflow-hidden py-10">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/energy-5.jpg')",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
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

        {/* =====================================================
            INTRO SECTION
        ====================================================== */}
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

            <p className="text-gray-600 leading-7 text-sm ">
              Stay informed about renewable energy, sustainability,
              technology and innovative solutions that are helping build
              a cleaner and more sustainable world.
            </p>

          </div>

        </section>

        {/* =====================================================
            FEATURED BLOG
        ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 pb-16">

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

  {/* Image */}
  <div
    data-aos="fade-right"
    data-aos-duration="1000"
    data-aos-delay="200"
    className="group relative h-[320px] lg:h-[430px] overflow-hidden"
  >

    <img
      src="/images/energy-5.jpg"
      alt="Featured renewable energy"
      className="
        w-full
        h-full
        object-cover

        transition-transform
        duration-1000
        ease-out

        group-hover:scale-110
      "
    />

    {/* Image Overlay */}
    <div
      className="
        absolute
        inset-0
        bg-blue-950/10

        transition-all
        duration-700

        group-hover:bg-blue-950/20
      "
    />

    {/* Featured Label */}
    <div
      className="
        absolute
        top-5
        left-5

        opacity-0
        -translate-y-3

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all
        duration-700
      "
    >
      <span
        className="
          inline-block
          rounded-full
          bg-white/90
          backdrop-blur-sm
          px-4
          py-2
          text-xs
          font-semibold
          text-blue-700
          shadow-lg
        "
      >
        Featured Article
      </span>
    </div>

  </div>


  {/* Content */}
  <div
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="350"
    className="
      group/content
      p-8
      lg:p-12
      flex
      flex-col
      justify-center
      bg-white
    "
  >

    {/* Category */}
    <div
      className="
        flex
        items-center
        gap-3
        mb-5

        transition-all
        duration-500

        group-hover/content:translate-x-1
      "
    >

      <span
        className="
          px-3
          py-1
          bg-blue-100
          text-blue-700
          rounded-full
          text-xs
          font-semibold

          transition-all
          duration-500

          group-hover/content:bg-blue-600
          group-hover/content:text-white
        "
      >
        Featured
      </span>

      <span className="text-gray-400 text-sm">
        Solar Energy
      </span>

    </div>


    {/* Heading */}
    <h2
      className="
        text-3xl
        font-bold
        text-gray-800
        mb-5

        transition-all
        duration-700
        ease-out

        group-hover/content:text-blue-700
        group-hover/content:translate-x-1
      "
    >
      The Future of Solar Energy in a Sustainable World
    </h2>


    {/* Description */}
    <p
      className="
        text-gray-600
        leading-7
        text-sm
        !mb-3

        transition-colors
        duration-500

        group-hover/content:text-gray-700
      "
    >
      Solar energy is becoming one of the most important
      sources of clean and renewable power. Discover how
      innovative solar technologies are helping businesses
      and communities move towards a sustainable future.
    </p>


    {/* Bottom */}
    <div className="flex items-center justify-between">

      {/* Date */}
      <div>
          <span
          className="
            text-blue-500
            text-sm

            transition-all
            duration-500

            group-hover/content:text-blue-600
          "
        >
          <div className="flex items-center gap-2">
          <span><FaCalendarDays /></span> <span>August 10, 2026</span>
          </div>
        </span>
      </div>
      


      {/* Read More */}
      <button
        type="button"
        className="
          group/read
          text-blue-700
          font-semibold
          text-sm

          transition-all
          duration-500

          hover:text-blue-900
        "
      >
        <span className="inline-flex items-center gap-2">

          Read More

          <span
            className="
              inline-block

              transition-transform
              duration-500
              ease-out

              group-hover/read:translate-x-2
            "
          >
            →
          </span>

        </span>
      </button>

    </div>

  </div>

</div>

          </div>

        </section>

        {/* =====================================================
            CATEGORY FILTER
        ====================================================== */}
        <section className="bg-white border-y border-gray-100">

          <div className="max-w-7xl mx-auto px-6 py-6">

            <div className="flex flex-wrap justify-center gap-3">

              {categories.map((category) => (

                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
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

        {/* =====================================================
            BLOG GRID
        ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                  Explore Our Articles
                </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Latest From Our Blog
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredBlogs.map((blog) => (

              <article
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >

                {/* Blog Image */}
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category */}
                  <div className="absolute top-4 left-4">

                    <span className="bg-white/95 text-blue-700 px-2 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                      {blog.category}
                    </span>

                  </div>

                </div>

                {/* Blog Content */}
                <div className="p-6">

                  {/* Date / Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-xs"><FaCalendarDays /></span>
                      <span className="text-gray-400 text-xs">
                        
                        {blog.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-xs"><IoIosTimer /></span>
                      <span className="text-gray-400 text-xs">
                        {blog.readTime}
                      </span>
                    </div>
                    

                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-7 group-hover:text-blue-700 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-6 !mb-3">
                    {blog.description}
                  </p>

                  <button
                    type="button"
                    className="text-blue-700 font-semibold text-sm hover:text-blue-900 transition"
                  >
                    Read Article →
                  </button>

                </div>

              </article>

            ))}

          </div>

          {/* No Blogs */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">

              <div className="text-gray-400 text-5xl mb-4">
                📚
              </div>

              <h3 className="text-xl font-semibold text-gray-700">
                No articles found
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Try selecting another category.
              </p>

            </div>
          )}

        </section>

        {/* =====================================================
            CONTACT CTA
        ====================================================== */}
        <ContactusComponent />

      </div>
    </>
  );
};

export default Blog;