import React from 'react'
import ContactusComponent from "../Components/ContactusComponent";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-screen overflow-hidden flex items-center">

          {/* Background Video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/energy-video.mp4" type="video/mp4" />
          </video>

          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-black/80" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

            <p className="text-green-300 font-semibold uppercase tracking-widest mb-4">
              Powering a Sustainable Future
            </p>

            <h1 className="text-4xl md:text-6xl font-bold !text-white leading-tight mb-6">
              Innovative Energy Solutions
              <span className="block text-blue-500">
                For A Better Tomorrow
              </span>
            </h1>

            <p className="text-blue-100 text-sm leading-8 !mb-8 max-w-2xl">
              We deliver innovative, reliable, and sustainable energy and telecom solutions designed
              to create long-term value for businesses, communities, and the environment.
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

        </section>

        {/* ================= INTRODUCTION ================= */}
        <section className="py-16">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <div>
                <img
                  src="/images/energy-1.png"
                  alt="Energy Solutions"
                  className="w-full h-[350px] object-contain rounded-2xl shadow-lg"
                />
              </div>

              {/* Content */}
              <div>

                <div
  data-aos="fade-right"
  data-aos-duration="800"
  className="flex items-center gap-3 !mb-3"
>
  <span
    className="
      block
      w-10 h-[2px]
      bg-blue-600
      origin-left
      transition-all duration-500 ease-out
      hover:w-16
    "
  />

  <p
    data-aos="fade-left"
    data-aos-duration="700"
    data-aos-delay="250"
    className="
      text-blue-700
      text-xs
      font-bold
      uppercase
      tracking-[0.2em]
      transition-all
      duration-300
      hover:tracking-[0.25em]
    "
  >
    Welcome to Cellexa Energy
  </p>
</div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 !mb-3">
                  Creating a Smarter and Sustainable Energy Future
                </h2>

                <p className="text-gray-500 text-sm leading-7 !mb-3 text-justify font-semibold">
                  Cellexa Energy is committed to creating a smarter and more sustainable energy future by
                  delivering innovative, reliable, and environmentally responsible energy solutions.
                  Our approach combines modern technology, renewable energy, and efficient power
                  management to help businesses and communities reduce energy costs while
                  minimizing their environmental impact.
                </p>

                <p className="text-gray-500 leading-7 !mb-3 text-sm text-justify font-semibold">
                  From solar power solutions and energy-efficient systems to advanced electrical
                  infrastructure, network connectivity, and telecom solutions, we provide end-to-end
                  services that combine modern technology, reliable infrastructure, and expert
                  installation and maintenance.
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
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                  What We Do
                </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 !mb-3">
                Our Solutions
              </h2>

              <p className="text-gray-600 mx-auto mt-8 text-sm">
                Delivering innovative & reliable solutions designed to meet the evolving needs of
                the energy & <br />telecommunications sectors, enabling smarter infrastructure, seamless
                connectivity & sustainable growth.
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Telecom Services */}
              <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">

                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-3xl">📡</span>
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    Connectivity
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Telecom Services
                  </h3>

                  <p className="text-gray-600 leading-7 text-sm">
                    End-to-end telecom infrastructure, installation, deployment, and
                    maintenance services designed to keep communication networks
                    connected, reliable, and future-ready.
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="mt-7 flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                  <span>Explore Service</span>
                  <span>→</span>
                </div>

              </div>


              {/* Solar Installation */}
              <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">

                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-400" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-3xl">☀️</span>
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">
                    Renewable Energy
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Solar Installation
                  </h3>

                  <p className="text-gray-600 leading-7 text-sm">
                    Professional solar installation and renewable energy solutions that
                    help businesses and customers adopt clean, efficient, and sustainable
                    power for the future.
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="mt-7 flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                  <span>Explore Service</span>
                  <span>→</span>
                </div>

              </div>


              {/* Safety Items */}
              <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">

                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-400" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-100 flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-3xl">🦺</span>
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
                    Workplace Protection
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Safety Items Supply
                  </h3>

                  <p className="text-gray-600 leading-7 text-sm">
                    A wide range of quality safety equipment and PPE designed to create
                    safer workplaces and protect people across construction, industrial,
                    telecom, and energy environments.
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="mt-7 flex items-center gap-2 text-orange-600 font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                  <span>Explore Service</span>
                  <span>→</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= STATS ================= */}
        <section className="relative bg-blue-900 py-16 overflow-hidden">

          {/* Background Glow */}
          <div className="absolute -top-32 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />


          <div className="relative max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">


              {/* Experience */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="group relative text-center px-5 py-4
                   border-r border-blue-700/60
                   last:border-r-0"
              >

                <div
                  className="mx-auto mb-4 w-14 h-14
                     rounded-2xl
                     bg-white/10
                     border border-white/10
                     backdrop-blur-sm
                     flex items-center justify-center
                     shadow-lg
                     transition-all duration-500
                     group-hover:bg-green-400/20
                     group-hover:border-green-300/30
                     group-hover:scale-110
                     group-hover:-translate-y-1"
                >
                  <span className="text-2xl transition-transform duration-500 group-hover:scale-110">
                    🏆
                  </span>
                </div>

                <h3
                  className="text-4xl md:text-5xl font-bold text-white
                     tracking-tight
                     transition-transform duration-500
                     group-hover:scale-110"
                >
                  10+
                </h3>

                <p className="text-blue-200 text-sm !mt-3">
                  Years of Experience
                </p>

              </div>


              {/* Projects */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="group relative text-center px-5 py-4
                   border-r border-blue-700/60
                   md:last:border-r-0"
              >

                <div
                  className="mx-auto mb-4 w-14 h-14
                     rounded-2xl
                     bg-white/10
                     border border-white/10
                     backdrop-blur-sm
                     flex items-center justify-center
                     shadow-lg
                     transition-all duration-500
                     group-hover:bg-blue-400/20
                     group-hover:border-blue-300/30
                     group-hover:scale-110
                     group-hover:-translate-y-1"
                >
                  <span className="text-2xl transition-transform duration-500 group-hover:scale-110">
                    🚀
                  </span>
                </div>

                <h3
                  className="text-4xl md:text-5xl font-bold text-white
                     tracking-tight
                     transition-transform duration-500
                     group-hover:scale-110"
                >
                  50+
                </h3>

                <p className="text-blue-200 text-sm !mt-3">
                  Projects
                </p>

              </div>


              {/* Customers */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="group relative text-center px-5 py-4
                   border-r border-blue-700/60"
              >

                <div
                  className="mx-auto mb-4 w-14 h-14
                     rounded-2xl
                     bg-white/10
                     border border-white/10
                     backdrop-blur-sm
                     flex items-center justify-center
                     shadow-lg
                     transition-all duration-500
                     group-hover:bg-purple-400/20
                     group-hover:border-purple-300/30
                     group-hover:scale-110
                     group-hover:-translate-y-1"
                >
                  <span className="text-2xl transition-transform duration-500 group-hover:scale-110">
                    🤝
                  </span>
                </div>

                <h3
                  className="text-4xl md:text-5xl font-bold text-white
                     tracking-tight
                     transition-transform duration-500
                     group-hover:scale-110"
                >
                  25+
                </h3>

                <p className="text-blue-200 text-sm !mt-3">
                  Customers
                </p>

              </div>


              {/* Commitment */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="group relative text-center px-5 py-4"
              >

                <div
                  className="mx-auto mb-4 w-14 h-14
                     rounded-2xl
                     bg-white/10
                     border border-white/10
                     backdrop-blur-sm
                     flex items-center justify-center
                     shadow-lg
                     transition-all duration-500
                     group-hover:bg-yellow-400/20
                     group-hover:border-yellow-300/30
                     group-hover:scale-110
                     group-hover:-translate-y-1"
                >
                  <span className="text-2xl transition-transform duration-500 group-hover:scale-110">
                    ⭐
                  </span>
                </div>

                <h3
                  className="text-4xl md:text-5xl font-bold text-white
                     tracking-tight
                     transition-transform duration-500
                     group-hover:scale-110"
                >
                  100%
                </h3>

                <p className="text-blue-200 text-sm !mt-3">
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
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-[0.2em]">
                  Why Choose Us
                </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 !mb-5">
                Excellence in Everything We Do
              </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">

              {/* ===================== INNOVATION ===================== */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="group relative text-center p-7 bg-white rounded-2xl
               border border-slate-100 shadow-sm
               hover:shadow-xl hover:-translate-y-2
               transition-all duration-1000 delay-200
               overflow-hidden"
              >

                {/* Top Gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-1
                 bg-gradient-to-r from-blue-500 to-cyan-400
                 scale-x-0 group-hover:scale-x-100
                 transition-transform duration-1000 delay-200
                 origin-left"
                />

                {/* Icon */}
                <div
                  className="mx-auto mb-5 w-16 h-16 rounded-2xl
                 bg-blue-50 flex items-center justify-center
                 text-3xl
                 transition-all duration-1000 delay-200
                 group-hover:bg-blue-100
                 group-hover:scale-110
                 group-hover:rotate-6"
                >
                  🚀
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-slate-800 !mb-3
                 group-hover:text-blue-600
                 transition-colors duration-1000 delay-200"
                >
                  Innovation
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-6">
                  Embracing new ideas and technologies to create better
                  solutions.
                </p>

                {/* Arrow */}
                <div
                  className="mt-5 text-blue-600 text-lg
                 opacity-0 translate-y-2
                 group-hover:opacity-100
                 group-hover:translate-y-0
                 transition-all duration-1000 delay-200"
                >
                  →
                </div>
              </div>


              {/* ===================== SUSTAINABILITY ===================== */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="group relative text-center p-7 bg-white rounded-2xl
               border border-slate-100 shadow-sm
               hover:shadow-xl hover:-translate-y-2
               transition-all duration-1000 delay-200
               overflow-hidden"
              >

                {/* Top Gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-1
                 bg-gradient-to-r from-green-500 to-emerald-400
                 scale-x-0 group-hover:scale-x-100
                 transition-transform duration-1000 delay-200
                 origin-left"
                />

                {/* Icon */}
                <div
                  className="mx-auto mb-5 w-16 h-16 rounded-2xl
                 bg-green-50 flex items-center justify-center
                 text-3xl
                 transition-all duration-1000 delay-200
                 group-hover:bg-green-100
                 group-hover:scale-110
                 group-hover:-rotate-6"
                >
                  🌍
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-slate-800 !mb-3
                 group-hover:text-green-600
                 transition-colors duration-1000 delay-200"
                >
                  Sustainability
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-6">
                  Working towards a cleaner and more sustainable future.
                </p>

                {/* Arrow */}
                <div
                  className="mt-5 text-green-600 text-lg
                 opacity-0 translate-y-2
                 group-hover:opacity-100
                 group-hover:translate-y-0
                 transition-all duration-1000 delay-200"
                >
                  →
                </div>
              </div>


              {/* ===================== RELIABILITY ===================== */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="group relative text-center p-7 bg-white rounded-2xl
               border border-slate-100 shadow-sm
               hover:shadow-xl hover:-translate-y-2
               transition-all duration-1000 delay-200
               overflow-hidden"
              >

                {/* Top Gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-1
                 bg-gradient-to-r from-orange-500 to-yellow-400
                 scale-x-0 group-hover:scale-x-100
                 transition-transform duration-1000 delay-200
                 origin-left"
                />

                {/* Icon */}
                <div
                  className="mx-auto mb-5 w-16 h-16 rounded-2xl
                 bg-orange-50 flex items-center justify-center
                 text-3xl
                 transition-all duration-1000 delay-200
                 group-hover:bg-orange-100
                 group-hover:scale-110
                 group-hover:rotate-6"
                >
                  🛡️
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-slate-800 !mb-3
                 group-hover:text-orange-600
                 transition-colors duration-1000 delay-200"
                >
                  Reliability
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-6">
                  Delivering dependable solutions with a strong focus on
                  quality.
                </p>

                {/* Arrow */}
                <div
                  className="mt-5 text-orange-600 text-lg
                 opacity-0 translate-y-2
                 group-hover:opacity-100
                 group-hover:translate-y-0
                 transition-all duration-1000 delay-200"
                >
                  →
                </div>
              </div>


              {/* ===================== PARTNERSHIP ===================== */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="group relative text-center p-7 bg-white rounded-2xl
               border border-slate-100 shadow-sm
               hover:shadow-xl hover:-translate-y-2
               transition-all duration-1000 delay-200
               overflow-hidden"
              >

                {/* Top Gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-1
                 bg-gradient-to-r from-purple-500 to-pink-400
                 scale-x-0 group-hover:scale-x-100
                 transition-transform duration-1000 delay-200
                 origin-left"
                />

                {/* Icon */}
                <div
                  className="mx-auto mb-5 w-16 h-16 rounded-2xl
                 bg-purple-50 flex items-center justify-center
                 text-3xl
                 transition-all duration-1000 delay-200
                 group-hover:bg-purple-100
                 group-hover:scale-110
                 group-hover:-rotate-6"
                >
                  🤝
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-slate-800 !mb-3
                 group-hover:text-purple-600
                 transition-colors duration-1000 delay-200"
                >
                  Partnership
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-6">
                  Building long-term relationships with customers and partners.
                </p>

                {/* Arrow */}
                <div
                  className="mt-5 text-purple-600 text-lg
                 opacity-0 translate-y-2
                 group-hover:opacity-100
                 group-hover:translate-y-0
                 transition-all duration-1000 delay-200"
                >
                  →
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* ================= SUSTAINABILITY ================= */}
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 overflow-hidden">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Content */}
              <div
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="100"
              >

                <div
                  data-aos="fade-right"
                  data-aos-duration="800"
                  className="flex items-center gap-3 !mb-3"
                >
                  <span
                    className="
                    block
                    w-10 h-[2px]
                    bg-blue-600
                    origin-left
                    transition-all duration-500 ease-out
                    hover:w-16
                  "
                  />

                  <p
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="250"
                    className="
                  text-blue-700
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  transition-all
                  duration-300
                  hover:tracking-[0.25em]"
                  >
                    Sustainability
                  </p>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight !mb-3">
                  Energy Today.
                  <span className="block text-blue-600 !mt-2">
                    A Better Tomorrow.
                  </span>
                </h2>

                <p className="text-slate-600 leading-7 mb-5 text-sm">
                  Sustainability is at the heart of our approach. We believe
                  responsible energy solutions can help create a healthier
                  environment and a stronger future for generations to come.
                </p>

                <p className="text-slate-600 leading-7 mb-8 text-sm !mb-3">
                  From renewable energy and solar solutions to efficient
                  infrastructure and smart technologies, we focus on solutions
                  that deliver lasting value while reducing environmental impact.
                </p>

                <div className="grid grid-cols-2 gap-5 mb-8">

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                      🌱
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        Sustainable
                      </h4>
                      <p className="text-xs text-slate-500">
                        Eco-friendly solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                      ⚡
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        Efficient
                      </h4>
                      <p className="text-xs text-slate-500">
                        Smart technology
                      </p>
                    </div>
                  </div>

                </div>

                <a
                  href="/our-company"
                  className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  Our Company
                  <span>→</span>
                </a>

              </div>


              {/* Image */}
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="relative"
              >

                <div className="relative overflow-hidden rounded-3xl group">

                  <img
                    src="/images/energy-2.jpg"
                    alt="Sustainable energy solutions"
                    className="
      w-full h-[450px] object-cover
      scale-100
      transition-transform duration-[2000ms] ease-out
      group-hover:scale-110
      group-hover:translate-x-1
    "
                  />

                  {/* Dark/Green Overlay */}
                  <div
                    className="
      absolute inset-0
      bg-gradient-to-t
      from-green-900/50
      via-green-600/10
      to-transparent
      opacity-70
      transition-opacity duration-700
      group-hover:opacity-40
    "
                  />

                  {/* Animated shine */}
                  <div
                    className="
      absolute inset-0
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      -translate-x-full
      group-hover:translate-x-full
      transition-transform duration-[1500ms] ease-in-out
    "
                  />

                </div>


                {/* Floating card */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                  className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-5"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      ☀️
                    </div>

                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">
                        Our Focus
                      </p>

                      <h3 className="text-lg font-bold text-slate-800">
                        Clean & Smart Energy
                      </h3>
                    </div>

                  </div>

                </div>

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