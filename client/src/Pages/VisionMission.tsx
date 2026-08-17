import React from 'react';
import ContactusComponent from "../Components/ContactusComponent";

const VisionMission: React.FC = () => {

    return (
        <>
            <div className="min-h-screen bg-slate-50">

                {/* Hero Section */}
                <section className="relative overflow-hidden py-24">

                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/energy-3.jpg')",
                        }}
                    />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/70" />

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

                        <h1 className="text-4xl md:text-5xl font-bold !text-white mb-4">
                            Vision & Mission
                        </h1>

                        <p className="text-blue-100 text-lg mx-auto">
                             Driving innovation and sustainable solutions to create a cleaner,
                            smarter, and more reliable energy future.
                        </p>

                    </div>

                </section>


                {/* Vision & Mission */}
                <section className="mx-auto max-w-7xl px-6 py-20">
                    <div className="grid gap-8 md:grid-cols-2">

                        {/* Vision */}
<div
  data-aos="fade-right"
  data-aos-duration="1000"
  data-aos-delay="200"
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    bg-white
    p-8
    shadow-lg
    ring-1
    ring-slate-200
    md:p-10

    transition-all
    duration-700
    ease-out

    hover:-translate-y-3
    hover:shadow-2xl
    hover:ring-indigo-200
  "
>
  {/* Top Gradient */}
  <div
    className="
      absolute
      top-0
      left-0
      right-0
      h-1
      bg-gradient-to-r
      from-indigo-500
      to-blue-400

      origin-left
      scale-x-0
      group-hover:scale-x-100

      transition-transform
      duration-700
      ease-out
    "
  />

  {/* Icon */}
  <div
    className="
      mb-6
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      bg-indigo-100
      text-3xl

      transition-all
      duration-700
      ease-out

      group-hover:scale-110
      group-hover:rotate-6
      group-hover:bg-indigo-200
      group-hover:shadow-lg
    "
  >
    👁️
  </div>

  {/* Heading */}
  <h2
    className="
      mb-4
      text-3xl
      font-bold
      text-slate-900

      transition-all
      duration-500

      group-hover:translate-x-1
      group-hover:text-indigo-700
    "
  >
    Our Vision
  </h2>

  {/* Description */}
  <p
    className="
      text-sm
      leading-8
      text-slate-600

      transition-colors
      duration-500

      group-hover:text-slate-700
    "
  >
    To become a trusted leader in sustainable energy solutions by
    delivering innovative technologies that empower communities,
    businesses, and industries to build a cleaner and more
    sustainable future.
  </p>

  {/* Arrow */}
  <div
    className="
      mt-5
      text-indigo-600
      text-lg

      opacity-0
      translate-y-3

      group-hover:opacity-100
      group-hover:translate-y-0

      transition-all
      duration-500
    "
  >
    →
  </div>
</div>


{/* Mission */}
<div
  data-aos="fade-left"
  data-aos-duration="1000"
  data-aos-delay="400"
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    bg-white
    p-8
    shadow-lg
    ring-1
    ring-slate-200
    md:p-10

    transition-all
    duration-700
    ease-out

    hover:-translate-y-3
    hover:shadow-2xl
    hover:ring-purple-200
  "
>
  {/* Top Gradient */}
  <div
    className="
      absolute
      top-0
      left-0
      right-0
      h-1
      bg-gradient-to-r
      from-purple-500
      to-pink-400

      origin-left
      scale-x-0
      group-hover:scale-x-100

      transition-transform
      duration-700
      ease-out
    "
  />

  {/* Icon */}
  <div
    className="
      mb-6
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      bg-purple-100
      text-3xl

      transition-all
      duration-700
      ease-out

      group-hover:scale-110
      group-hover:-rotate-6
      group-hover:bg-purple-200
      group-hover:shadow-lg
    "
  >
    🚀
  </div>

  {/* Heading */}
  <h2
    className="
      mb-4
      text-3xl
      font-bold
      text-slate-900

      transition-all
      duration-500

      group-hover:translate-x-1
      group-hover:text-purple-700
    "
  >
    Our Mission
  </h2>

  {/* Description */}
  <p
    className="
      text-sm
      leading-8
      text-slate-600

      transition-colors
      duration-500

      group-hover:text-slate-700
    "
  >
    To provide reliable, efficient, and environmentally responsible
    energy solutions through continuous innovation, advanced
    technology, and a strong commitment to our customers and the
    planet.
  </p>

  {/* Arrow */}
  <div
    className="
      mt-5
      text-purple-600
      text-lg

      opacity-0
      translate-y-3

      group-hover:opacity-100
      group-hover:translate-y-0

      transition-all
      duration-500
    "
  >
    →
  </div>
</div>

                    </div>
                </section>

                {/* Core Commitment */}
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                  Our Commitment
                </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>
                        <p className="mx-auto mb-12 text-sm text-slate-600">
                            We are committed to creating meaningful impact through innovation,
                            sustainability, and responsible growth.
                        </p>

                        <div className="grid gap-6 md:grid-cols-3">

                            <div className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-lg">
                                <div className="mb-4 text-4xl">🌱</div>
                                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                                    Sustainability
                                </h3>
                                <p className="leading-7 text-slate-600 text-sm">
                                    Promoting environmentally responsible solutions for a
                                    sustainable tomorrow.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-lg">
                                <div className="mb-4 text-4xl">💡</div>
                                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                                    Innovation
                                </h3>
                                <p className="leading-7 text-slate-600 text-sm">
                                    Leveraging technology and creativity to solve tomorrow's
                                    energy challenges.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-slate-50 p-8 transition hover:shadow-lg">
                                <div className="mb-4 text-4xl">🤝</div>
                                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                                    Trust
                                </h3>
                                <p className="leading-7 text-slate-600 text-sm">
                                    Building lasting relationships through reliability,
                                    transparency, and excellence.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <ContactusComponent />

            </div>

        </>
    )
}

export default VisionMission;