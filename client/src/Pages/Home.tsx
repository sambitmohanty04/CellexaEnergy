import React from 'react'
import ContactusComponent from "../Components/ContactusComponent";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/home-banner.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-950/70" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

            <div className="">

              <p className="text-green-300 font-semibold uppercase tracking-widest mb-4">
                Powering a Sustainable Future
              </p>

              <h1 className="text-4xl md:text-6xl font-bold !text-white leading-tight mb-6">
                Innovative Energy Solutions
                <span className="block text-blue-500">
                  For A Better Tomorrow
                </span>
              </h1>

              <p className="text-blue-100 text-lg md:text-xl leading-8 !mb-8 max-w-2xl">
                We deliver innovative, reliable and sustainable energy
                solutions designed to create long-term value for businesses,
                communities and environment.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href="/about"
                  className="bg-blue-700 hover:bg-blue-800 !text-white font-semibold px-7 py-3 rounded-lg transition"
                >
                  Discover More
                </a>

                <a
                  href="/contact-us"
                  className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-7 py-3 rounded-lg transition"
                >
                  Contact Us
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ================= INTRODUCTION ================= */}
        <section className="py-16">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <div>
                <img
                  src="/images/energy-about.jpg"
                  alt="Energy Solutions"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Content */}
              <div>

                <p className="text-blue-700 font-semibold uppercase tracking-wide !mb-3">
                  Welcome to Cellexa Energy
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 !mb-3">
                  Creating a Smarter and Sustainable Energy Future
                </h2>

                <p className="text-gray-600 leading-7 !mb-3">
                  Cellexa Energy is committed to providing innovative and
                  sustainable energy solutions that address the evolving needs
                  of today's world.
                </p>

                <p className="text-gray-600 leading-7 !mb-3">
                  By combining technology, innovation and responsible business
                  practices, we work towards building efficient energy
                  solutions that deliver lasting value.
                </p>

                <a
                  href="/about"
                  className="inline-block bg-blue-700 hover:bg-blue-800 !text-white font-semibold px-7 py-3 rounded-lg transition"
                >
                  Learn More
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SERVICES ================= */}
        <section className="bg-gray-50 py-16">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-12">

              <p className="text-blue-700 font-semibold uppercase tracking-wide !mb-3">
                What We Do
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 !mb-3">
                Our Solutions
              </h2>

              <p className="text-gray-600 mx-auto mt-8">
                Delivering innovative solutions designed to meet the changing
                needs of the energy sector.
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Solution 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">

                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mb-6">
                  ⚡
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Energy Solutions
                </h3>

                <p className="text-gray-600 leading-7">
                  Innovative solutions designed to improve energy efficiency,
                  reliability and performance.
                </p>

              </div>

              {/* Solution 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">

                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-3xl mb-6">
                  🌱
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Sustainable Energy
                </h3>

                <p className="text-gray-600 leading-7">
                  Supporting a cleaner future through sustainable and
                  environmentally responsible energy practices.
                </p>

              </div>

              {/* Solution 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">

                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center text-3xl mb-6">
                  💡
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Technology & Innovation
                </h3>

                <p className="text-gray-600 leading-7">
                  Using technology and innovation to develop smarter and more
                  efficient solutions for tomorrow.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= STATS ================= */}
        <section className="bg-blue-900 py-14">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

              <div>
                <h3 className="text-4xl font-bold !text-white">
                  10+
                </h3>
                <p className="text-blue-200 mt-2">
                  Years of Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold !text-white">
                  50+
                </h3>
                <p className="text-blue-200 mt-2">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold !text-white">
                  25+
                </h3>
                <p className="text-blue-200 mt-2">
                  Customers
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold !text-white">
                  100%
                </h3>
                <p className="text-blue-200 mt-2">
                  Commitment
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-16">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center !mb-3">

              <p className="text-blue-700 !mb-3 font-semibold uppercase tracking-wide">
                Why Choose Us
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                Excellence in Everything We Do
              </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

              <div className="text-center p-6">
                <div className="text-4xl mb-4">🚀</div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Innovation
                </h3>

                <p className="text-gray-600">
                  Embracing new ideas and technologies to create better
                  solutions.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-4xl mb-4">🌍</div>

                <h3 className="text-xl font-bold text-gray-800 !mb-3">
                  Sustainability
                </h3>

                <p className="text-gray-600">
                  Working towards a cleaner and more sustainable future.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-4xl mb-4">🛡️</div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Reliability
                </h3>

                <p className="text-gray-600">
                  Delivering dependable solutions with a strong focus on
                  quality.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-4xl mb-4">🤝</div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Partnership
                </h3>

                <p className="text-gray-600">
                  Building long-term relationships with customers and partners.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= SUSTAINABILITY ================= */}
        <section className="bg-green-50 py-16">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div>

                <p className="text-blue-700 font-semibold uppercase tracking-wide !mb-3">
                  Sustainability
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 !mb-3">
                  Energy Today. A Better Tomorrow.
                </h2>

                <p className="text-gray-600 leading-7 mb-6">
                  Sustainability is at the heart of our approach. We believe
                  that responsible energy solutions can help create a healthier
                  environment and a stronger future for generations to come.
                </p>

                <a
                  href="/our-company"
                  className="inline-block bg-blue-700 hover:bg-blue-800 !text-white font-semibold px-7 py-3 rounded-lg transition"
                >
                  Our Company
                </a>

              </div>

              <div>
                <img
                  src="/images/sustainability.jpg"
                  alt="Sustainability"
                  className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
                />
              </div>

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}
        <ContactusComponent />

      </div>
    </>
  )
}

export default Home