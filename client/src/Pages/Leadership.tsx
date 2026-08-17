import React from 'react';
import ContactusComponent from "../Components/ContactusComponent";

const Leadership: React.FC = () => {

    const leaders = [
        {
            name: "John Anderson",
            role: "Chief Executive Officer",
            image: "/images/leadeship-1.jpg",
            description:
                "Leading our vision to build innovative and sustainable energy solutions.",
        },
        {
            name: "Michael Wilson",
            role: "Chief Technology Officer",
            image: "/images/leadeship-1.jpg",
            description:
                "Driving technology, innovation and digital transformation across our organization.",
        },
        {
            name: "Sarah Johnson",
            role: "Director of Operations",
            image: "/images/leadeship-1.jpg",
            description:
                "Building operational excellence and delivering reliable energy solutions.",
        },
    ];

    return (
        <>
            <div className="min-h-screen bg-slate-50">

                {/* Hero Section */}
                <section className="relative overflow-hidden py-10">

                    {/* Background */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/energy-3.jpg')",
                        }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-blue-950/70" />

                    {/* Hero Content */}
                    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                        <p className="text-blue-300 uppercase tracking-widest font-semibold mb-4">
                            Our Leadership
                        </p>
                        

                        <h1 className="text-4xl md:text-6xl font-bold !text-white mb-6">
                            Meet Our Leadership
                        </h1>

                        <p className="text-blue-100 text-sm md:text-md mx-auto leading-8">
                            Visionary leaders committed to innovation, sustainability and
                            building a better energy future.
                        </p>

                    </div>
                </section>

                {/* Leadership Section */}
                <section className="py-20">

                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                  Leadership Team
                </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 !mb-3">
                                The People Behind Our Vision
                            </h2>

                            <p className="text-slate-600 mt-4 mx-auto text-sm">
                                Our leadership team combines experience, innovation and
                                industry expertise to create sustainable energy solutions.
                            </p>

                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {leaders.map((leader) => (
                                <div
                                    key={leader.name}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >

                                    {/* Image */}
                                    <div className="relative overflow-hidden">

                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Image Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />

                                    </div>

                                    {/* Content */}
                                    <div className="p-6">

                                        <h3 className="text-lg font-bold text-slate-900">
                                            {leader.name}
                                        </h3>

                                        <p className="text-blue-700 font-semibold mt-1 text-sm !my-2">
                                            {leader.role}
                                        </p>

                                        <p className="text-slate-600 mt-4 leading-7 text-sm">
                                            {leader.description}
                                        </p>

                                        <button className="mt-5 text-blue-700 font-semibold hover:text-blue-900 transition">
                                            View Profile →
                                        </button>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>

                {/* Leadership Philosophy */}
                <section className="bg-blue-950 py-20 overflow-hidden">

  <div className="max-w-6xl mx-auto px-6">

    {/* ==============================
        SECTION HEADER
    =============================== */}
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="text-center mb-12"
    >

      <div className="flex items-center justify-center gap-3 mb-3">

        {/* Left Line */}
        <span
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="200"
          className="
            w-12 h-[2px]
            bg-blue-500
            transition-all duration-700 ease-out
            hover:w-20
          "
        />

        {/* Label */}
        <p
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="350"
          className="
            text-blue-300
            !mb-0
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]

            transition-all duration-500

            hover:text-blue-200
            hover:tracking-[0.3em]
          "
        >
          What Drives Us
        </p>

        {/* Right Line */}
        <span
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="200"
          className="
            w-12 h-[2px]
            bg-blue-500
            transition-all duration-700 ease-out
            hover:w-20
          "
        />

      </div>


      {/* Heading */}
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="450"
        className="
          text-3xl
          md:text-4xl
          font-bold
          !text-white

          transition-all duration-700

          hover:text-blue-100
        "
      >
        Our Leadership Philosophy
      </h2>

    </div>


    {/* ==============================
        CARDS
    =============================== */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


      {/* ==============================
          INNOVATION
      =============================== */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        className="
          group
          relative
          text-center
          p-8
          rounded-2xl

          bg-white/10
          border border-white/10

          overflow-hidden

          transition-all duration-700 ease-out

          hover:-translate-y-3
          hover:bg-white/[0.15]
          hover:border-blue-400/40
          hover:shadow-[0_20px_50px_rgba(37,99,235,0.20)]
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
            from-blue-500
            to-cyan-400

            scale-x-0
            group-hover:scale-x-100

            origin-left
            transition-transform duration-700 ease-out
          "
        />

        {/* Icon */}
        <div
          className="
            mx-auto
            mb-5
            w-14
            h-14
            rounded-2xl

            bg-blue-500/10
            border border-blue-400/20

            flex items-center justify-center

            text-2xl

            transition-all duration-700 ease-out

            group-hover:scale-110
            group-hover:rotate-6
            group-hover:bg-blue-500/20
            group-hover:shadow-lg
          "
        >
          ⚡
        </div>

        <h3
          className="
            text-xl
            font-bold
            !text-white
            mb-3

            transition-all duration-500

            group-hover:text-blue-300
            group-hover:translate-y-[-2px]
          "
        >
          Innovation
        </h3>

        <p
          className="
            text-blue-100
            leading-7 text-sm

            transition-colors duration-500

            group-hover:text-white
          "
        >
          Embracing technology and new ideas to create better
          energy solutions.
        </p>

        {/* Arrow */}
        <div
          className="
            mt-5
            text-blue-400

            opacity-0
            translate-y-3

            group-hover:opacity-100
            group-hover:translate-y-0

            transition-all duration-500
          "
        >
          →
        </div>

      </div>


      {/* ==============================
          SUSTAINABILITY
      =============================== */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="450"
        className="
          group
          relative
          text-center
          p-8
          rounded-2xl

          bg-white/10
          border border-white/10

          overflow-hidden

          transition-all duration-700 ease-out

          hover:-translate-y-3
          hover:bg-white/[0.15]
          hover:border-green-400/40
          hover:shadow-[0_20px_50px_rgba(34,197,94,0.18)]
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
            from-green-500
            to-emerald-400

            scale-x-0
            group-hover:scale-x-100

            origin-left
            transition-transform duration-700 ease-out
          "
        />

        {/* Icon */}
        <div
          className="
            mx-auto
            mb-5
            w-14
            h-14
            rounded-2xl

            bg-green-500/10
            border border-green-400/20

            flex items-center justify-center

            text-2xl

            transition-all duration-700 ease-out

            group-hover:scale-110
            group-hover:-rotate-6
            group-hover:bg-green-500/20
            group-hover:shadow-lg
          "
        >
          🌱
        </div>

        <h3
          className="
            text-xl
            font-bold
            !text-white
            mb-3

            transition-all duration-500

            group-hover:text-green-300
            group-hover:translate-y-[-2px]
          "
        >
          Sustainability
        </h3>

        <p
          className="
            text-blue-100
            leading-7 text-sm

            transition-colors duration-500

            group-hover:text-white
          "
        >
          Creating long-term value while protecting our environment
          for future generations.
        </p>

        {/* Arrow */}
        <div
          className="
            mt-5
            text-green-400

            opacity-0
            translate-y-3

            group-hover:opacity-100
            group-hover:translate-y-0

            transition-all duration-500
          "
        >
          →
        </div>

      </div>


      {/* ==============================
          INTEGRITY
      =============================== */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
        className="
          group
          relative
          text-center
          p-8
          rounded-2xl

          bg-white/10
          border border-white/10

          overflow-hidden

          transition-all duration-700 ease-out

          hover:-translate-y-3
          hover:bg-white/[0.15]
          hover:border-purple-400/40
          hover:shadow-[0_20px_50px_rgba(168,85,247,0.18)]
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

            scale-x-0
            group-hover:scale-x-100

            origin-left
            transition-transform duration-700 ease-out
          "
        />

        {/* Icon */}
        <div
          className="
            mx-auto
            mb-5
            w-14
            h-14
            rounded-2xl

            bg-purple-500/10
            border border-purple-400/20

            flex items-center justify-center

            text-2xl

            transition-all duration-700 ease-out

            group-hover:scale-110
            group-hover:rotate-6
            group-hover:bg-purple-500/20
            group-hover:shadow-lg
          "
        >
          🛡️
        </div>

        <h3
          className="
            text-xl
            font-bold
            !text-white
            mb-3

            transition-all duration-500

            group-hover:text-purple-300
            group-hover:translate-y-[-2px]
          "
        >
          Integrity
        </h3>

        <p
          className="
            text-blue-100
            leading-7 text-sm

            transition-colors duration-500

            group-hover:text-white
          "
        >
          Building trust through transparency, accountability and
          responsible leadership.
        </p>

        {/* Arrow */}
        <div
          className="
            mt-5
            text-purple-400

            opacity-0
            translate-y-3

            group-hover:opacity-100
            group-hover:translate-y-0

            transition-all duration-500
          "
        >
          →
        </div>

      </div>

    </div>

  </div>

</section>

                <ContactusComponent />

            </div>

        </>
    )
}

export default Leadership