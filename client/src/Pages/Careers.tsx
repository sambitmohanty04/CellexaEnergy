import React from "react";
import ContactusComponent from "../Components/ContactusComponent";

const Careers: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* =========================
          PAGE HEADER
      ========================== */}
      <section className="relative overflow-hidden bg-blue-950 py-10">

        {/* Background Decorations */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <div
            data-aos="fade-down"
            data-aos-duration="800"
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-10 h-[2px] bg-blue-400" />

            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em] !mb-0">
              Join Our Team
            </p>

            <span className="w-10 h-[2px] bg-blue-400" />
          </div>

          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="150"
            className="text-4xl md:text-5xl font-bold !text-white mb-5"
          >
            Build Your Future With Us
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="300"
            className="mx-auto text-blue-100 text-sm leading-7"
          >
            Join Cellexa Energy and be part of a team working to create
            innovative, reliable and sustainable solutions for a cleaner
            energy future.
          </p>

        </div>
      </section>


      {/* =========================
          INTRODUCTION
      ========================== */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div
              data-aos="fade-right"
              data-aos-duration="900"
            >

              <div className="flex items-center gap-3 mb-4">

                <span className="w-10 h-[2px] bg-blue-600" />

                <p className="text-blue-700 text-xs font-bold uppercase tracking-[0.2em] !mb-0">
                  Careers at Cellexa
                </p>

              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
                Grow With a Purpose
              </h2>

              <p className="text-gray-600 text-sm leading-7 mb-4">
                At Cellexa Energy, we believe that great ideas come from
                talented people working together towards a common purpose.
              </p>

              <p className="text-gray-600 text-sm leading-7">
                We encourage innovation, collaboration and continuous
                learning while providing opportunities for individuals to
                grow their skills and build meaningful careers in the
                evolving energy sector.
              </p>

            </div>


            {/* Highlight Card */}
            <div
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="200"
              className="
                group relative overflow-hidden
                rounded-3xl
                bg-blue-50
                border border-blue-100
                p-8 md:p-10
                hover:-translate-y-2
                hover:shadow-xl
                transition-all duration-700
              "
            >

              <div
                className="
                  absolute top-0 left-0 right-0 h-1
                  bg-gradient-to-r from-blue-500 to-cyan-400
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-700
                  origin-left
                "
              />

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-6">
                🚀
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Make an Impact
              </h3>

              <p className="text-gray-600 text-sm leading-7">
                Be part of a team that combines technology, innovation and
                sustainability to help shape the future of energy.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WHY JOIN US
      ========================== */}
      <section className="bg-slate-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-center mb-12"
          >

            <div className="flex items-center justify-center gap-3 mb-3">

              <span className="w-12 h-[2px] bg-blue-500" />

              <p className="text-blue-700 text-xs font-bold uppercase tracking-wide !mb-0">
                Why Join Us
              </p>

              <span className="w-12 h-[2px] bg-blue-500" />

            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Work With Cellexa?
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Innovation */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                group
                bg-white
                rounded-2xl
                p-7
                text-center
                border border-gray-100
                shadow-sm
                hover:-translate-y-2
                hover:shadow-xl
                transition-all duration-700
              "
            >

              <div
                className="
                  w-16 h-16 mx-auto mb-5
                  rounded-2xl
                  bg-blue-100
                  flex items-center justify-center
                  text-3xl
                  group-hover:bg-blue-600
                  group-hover:scale-110
                  transition-all duration-500
                "
              >
                💡
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Innovation
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Work on innovative ideas and technologies that contribute
                to the future of sustainable energy.
              </p>

            </div>


            {/* Growth */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                group
                bg-white
                rounded-2xl
                p-7
                text-center
                border border-gray-100
                shadow-sm
                hover:-translate-y-2
                hover:shadow-xl
                transition-all duration-700
              "
            >

              <div
                className="
                  w-16 h-16 mx-auto mb-5
                  rounded-2xl
                  bg-green-100
                  flex items-center justify-center
                  text-3xl
                  group-hover:bg-green-600
                  group-hover:scale-110
                  transition-all duration-500
                "
              >
                📈
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Career Growth
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Develop your skills through continuous learning,
                collaboration and new professional opportunities.
              </p>

            </div>


            {/* Collaboration */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="
                group
                bg-white
                rounded-2xl
                p-7
                text-center
                border border-gray-100
                shadow-sm
                hover:-translate-y-2
                hover:shadow-xl
                transition-all duration-700
              "
            >

              <div
                className="
                  w-16 h-16 mx-auto mb-5
                  rounded-2xl
                  bg-purple-100
                  flex items-center justify-center
                  text-3xl
                  group-hover:bg-purple-600
                  group-hover:scale-110
                  transition-all duration-500
                "
              >
                🤝
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Collaboration
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Work alongside talented professionals in an environment
                that values teamwork and shared success.
              </p>

            </div>


            {/* Purpose */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="
                group
                bg-white
                rounded-2xl
                p-7
                text-center
                border border-gray-100
                shadow-sm
                hover:-translate-y-2
                hover:shadow-xl
                transition-all duration-700
              "
            >

              <div
                className="
                  w-16 h-16 mx-auto mb-5
                  rounded-2xl
                  bg-orange-100
                  flex items-center justify-center
                  text-3xl
                  group-hover:bg-orange-500
                  group-hover:scale-110
                  transition-all duration-500
                "
              >
                🌱
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Meaningful Work
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Contribute to solutions that support sustainability and
                create a positive impact on communities and the environment.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          OUR CULTURE
      ========================== */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div
              data-aos="fade-right"
              data-aos-duration="900"
            >

              <div className="flex items-center gap-3 mb-4">

                <span className="w-10 h-[2px] bg-blue-600" />

                <p className="text-blue-700 text-xs font-bold uppercase tracking-[0.2em] !mb-0">
                  Our Culture
                </p>

              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
                A Culture That Encourages Growth
              </h2>

              <p className="text-gray-600 text-sm leading-7 mb-6">
                We believe a positive workplace is built on trust,
                respect, collaboration and a shared commitment to
                excellence.
              </p>

              <div className="space-y-3">

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <span className="text-sm font-semibold text-gray-700">
                    Open communication
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <span className="text-sm font-semibold text-gray-700">
                    Continuous learning
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <span className="text-sm font-semibold text-gray-700">
                    Team collaboration
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <span className="text-sm font-semibold text-gray-700">
                    Commitment to excellence
                  </span>
                </div>

              </div>

            </div>


            {/* Right */}
            <div
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="200"
              className="
                rounded-3xl
                bg-blue-950
                p-8 md:p-10
                text-white
                shadow-xl
              "
            >

              <div className="text-4xl mb-5">
                🌍
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Be Part of the Change
              </h3>

              <p className="text-blue-100 text-sm leading-7">
                The energy landscape is changing rapidly. At Cellexa
                Energy, you will have the opportunity to contribute to
                meaningful projects while developing your skills and
                building a career with purpose.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          OPEN POSITIONS
      ========================== */}
      <section className="bg-slate-50 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <div className="flex items-center justify-center gap-3 mb-3">

              <span className="w-12 h-[2px] bg-blue-500" />

              <p className="text-blue-700 text-xs font-bold uppercase tracking-wide !mb-0">
                Opportunities
              </p>

              <span className="w-12 h-[2px] bg-blue-500" />

            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Current Opportunities
            </h2>

            <p className="text-gray-600 text-sm mt-4">
              Explore opportunities to join our growing team.
            </p>

          </div>


          {/* Job Card */}
          <div
            data-aos="fade-up"
            className="
              group
              bg-white
              rounded-2xl
              p-7 md:p-8
              border border-gray-100
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-500
            "
          >

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div>

                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Full Time
                </span>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Explore Career Opportunities
                </h3>

                <p className="text-gray-600 text-sm">
                  We are always interested in connecting with talented
                  professionals who share our passion for innovation and
                  sustainable energy.
                </p>

              </div>

              <a
                href="/contact"
                className="
                  shrink-0
                  inline-flex items-center justify-center
                  bg-blue-900
                  hover:bg-blue-800
                  text-white
                  font-semibold
                  px-6 py-3
                  rounded-lg
                  transition
                  duration-300
                "
              >
                Apply Now →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================== */}
      <ContactusComponent />

    </div>
  );
};

export default Careers;