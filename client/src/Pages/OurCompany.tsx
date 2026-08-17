import React from "react";
import ContactusComponent from "../Components/ContactusComponent";

const OurCompany: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}

      {/* <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold !text-white mb-4">
            Our Company
          </h1>

          <p className="text-white text-sm mx-auto">
            Driving innovation, sustainability and excellence in the energy
            sector.
          </p>

        </div>
      </section> */}
      <section className="relative overflow-hidden py-10">

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
              Our Company
            </h1>

            <p className="text-blue-100 text-sm mx-auto">
              Driving innovation, sustainability and excellence in the energy
            sector.
            </p>

          </div>

        </section>

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="/images/energy-2.jpg"
              alt="Our Company"
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
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
    About Our Company
  </p>
</div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 !mb-3">
              Empowering the Future of Energy
            </h2>

            <p className="text-gray-600 leading-7 mb-5 text-sm">
              Cellexa Energy is committed to delivering reliable, innovative, and sustainable energy 
              solutions designed to meet the evolving demands of a rapidly changing world.
            </p>

            <p className="text-gray-600 leading-7 text-sm mb-5">
              By combining technology, engineering expertise, and a strong commitment to sustainability, 
              we develop practical solutions that help businesses and communities improve energy 
              efficiency and move towards a cleaner future.
            </p>

            <p className="text-gray-600 leading-7 text-sm">
              Our approach is built on innovation, quality, safety, efficiency, and long-term 
              partnerships. We work closely with our customers to understand their needs and deliver 
              dependable solutions that create lasting value for both people and the environment.
            </p>

          </div>

        </div>

      </section>

      {/* Company Highlights */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                  Our Strength
                </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              What Defines Our Company
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

  {/* =====================================================
      INNOVATION
  ====================================================== */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="
      group relative
      bg-gray-50
      rounded-2xl
      p-7
      text-center
      border border-gray-100
      overflow-hidden

      transition-all duration-700 ease-out

      hover:-translate-y-3
      hover:shadow-xl
      hover:border-blue-200
    "
  >

    {/* Top Gradient */}
    <div
      className="
        absolute top-0 left-0 right-0
        h-1
        bg-gradient-to-r from-blue-500 to-cyan-400
        scale-x-0
        group-hover:scale-x-100
        origin-left
        transition-transform duration-700 ease-out
      "
    />

    {/* Icon */}
    <div
      className="
        w-16 h-16
        mx-auto
        mb-5
        bg-blue-100
        rounded-full
        flex items-center justify-center
        text-3xl

        transition-all duration-700 ease-out

        group-hover:scale-110
        group-hover:rotate-6
        group-hover:bg-blue-200
        group-hover:shadow-md
      "
    >
      ⚡
    </div>

    {/* Title */}
    <h3
      className="
        text-xl font-bold text-gray-800 mb-3
        transition-all duration-500
        group-hover:text-blue-600
        group-hover:-translate-y-1
      "
    >
      Innovation
    </h3>

    {/* Description */}
    <p
      className="
        text-gray-600 leading-6
        transition-colors duration-500
        group-hover:text-gray-700 text-sm
      "
    >
      Embracing technology and new ideas to create smarter energy
      solutions.
    </p>

    {/* Arrow */}
    <div
      className="
        mt-4
        text-blue-600
        opacity-0
        translate-y-2

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all duration-500
      "
    >
      →
    </div>

  </div>


  {/* =====================================================
      SUSTAINABILITY
  ====================================================== */}
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    className="
      group relative
      bg-gray-50
      rounded-2xl
      p-7
      text-center
      border border-gray-100
      overflow-hidden

      transition-all duration-700 ease-out

      hover:-translate-y-3
      hover:shadow-xl
      hover:border-green-200
    "
  >

    {/* Top Gradient */}
    <div
      className="
        absolute top-0 left-0 right-0
        h-1
        bg-gradient-to-r from-green-500 to-emerald-400
        scale-x-0
        group-hover:scale-x-100
        origin-left
        transition-transform duration-700 ease-out
      "
    />

    {/* Icon */}
    <div
      className="
        w-16 h-16
        mx-auto
        mb-5
        bg-green-100
        rounded-full
        flex items-center justify-center
        text-3xl

        transition-all duration-700 ease-out

        group-hover:scale-110
        group-hover:-rotate-6
        group-hover:bg-green-200
        group-hover:shadow-md
      "
    >
      🌱
    </div>

    {/* Title */}
    <h3
      className="
        text-xl font-bold text-gray-800 mb-3
        transition-all duration-500
        group-hover:text-green-600
        group-hover:-translate-y-1
      "
    >
      Sustainability
    </h3>

    {/* Description */}
    <p
      className="
        text-gray-600 leading-6
        transition-colors duration-500
        group-hover:text-gray-700 text-sm
      "
    >
      Supporting a cleaner future through responsible and
      sustainable energy practices.
    </p>

    {/* Arrow */}
    <div
      className="
        mt-4
        text-green-600
        opacity-0
        translate-y-2

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all duration-500
      "
    >
      →
    </div>

  </div>


  {/* =====================================================
      QUALITY
  ====================================================== */}
  <div
    data-aos="fade-up"
    data-aos-delay="300"
    className="
      group relative
      bg-gray-50
      rounded-2xl
      p-7
      text-center
      border border-gray-100
      overflow-hidden

      transition-all duration-700 ease-out

      hover:-translate-y-3
      hover:shadow-xl
      hover:border-yellow-200
    "
  >

    {/* Top Gradient */}
    <div
      className="
        absolute top-0 left-0 right-0
        h-1
        bg-gradient-to-r from-yellow-500 to-orange-400
        scale-x-0
        group-hover:scale-x-100
        origin-left
        transition-transform duration-700 ease-out
      "
    />

    {/* Icon */}
    <div
      className="
        w-16 h-16
        mx-auto
        mb-5
        bg-yellow-100
        rounded-full
        flex items-center justify-center
        text-3xl

        transition-all duration-700 ease-out

        group-hover:scale-110
        group-hover:rotate-6
        group-hover:bg-yellow-200
        group-hover:shadow-md
      "
    >
      ⭐
    </div>

    {/* Title */}
    <h3
      className="
        text-xl font-bold text-gray-800 mb-3
        transition-all duration-500
        group-hover:text-yellow-600
        group-hover:-translate-y-1
      "
    >
      Quality
    </h3>

    {/* Description */}
    <p
      className="
        text-gray-600 leading-6
        transition-colors duration-500
        group-hover:text-gray-700 text-sm
      "
    >
      Maintaining high standards of quality, reliability and
      performance.
    </p>

    {/* Arrow */}
    <div
      className="
        mt-4
        text-yellow-600
        opacity-0
        translate-y-2

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all duration-500
      "
    >
      →
    </div>

  </div>


  {/* =====================================================
      PARTNERSHIP
  ====================================================== */}
  <div
    data-aos="fade-up"
    data-aos-delay="400"
    className="
      group relative
      bg-gray-50
      rounded-2xl
      p-7
      text-center
      border border-gray-100
      overflow-hidden

      transition-all duration-700 ease-out

      hover:-translate-y-3
      hover:shadow-xl
      hover:border-purple-200
    "
  >

    {/* Top Gradient */}
    <div
      className="
        absolute top-0 left-0 right-0
        h-1
        bg-gradient-to-r from-purple-500 to-pink-400
        scale-x-0
        group-hover:scale-x-100
        origin-left
        transition-transform duration-700 ease-out
      "
    />

    {/* Icon */}
    <div
      className="
        w-16 h-16
        mx-auto
        mb-5
        bg-purple-100
        rounded-full
        flex items-center justify-center
        text-3xl

        transition-all duration-700 ease-out

        group-hover:scale-110
        group-hover:-rotate-6
        group-hover:bg-purple-200
        group-hover:shadow-md
      "
    >
      🤝
    </div>

    {/* Title */}
    <h3
      className="
        text-xl font-bold text-gray-800 mb-3
        transition-all duration-500
        group-hover:text-purple-600
        group-hover:-translate-y-1
      "
    >
      Partnership
    </h3>

    {/* Description */}
    <p
      className="
        text-gray-600 leading-6
        transition-colors duration-500
        group-hover:text-gray-700 text-sm
      "
    >
      Building trusted and long-term relationships with our
      customers and partners.
    </p>

    {/* Arrow */}
    <div
      className="
        mt-4
        text-purple-600
        opacity-0
        translate-y-2

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

      {/* Our Approach */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                  Our Approach
                </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            How We Work
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

  {/* =====================================================
      STEP 1 - UNDERSTAND
  ====================================================== */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="
      group relative
      bg-white
      rounded-2xl
      shadow-md
      p-8
      overflow-hidden
      border border-gray-100

      transition-all duration-700 ease-out

      hover:-translate-y-3
      hover:shadow-2xl
      hover:border-blue-200
    "
  >

    {/* Top Gradient */}
    <div
      className="
        absolute top-0 left-0 right-0
        h-1
        bg-gradient-to-r from-blue-500 to-cyan-400
        scale-x-0
        group-hover:scale-x-100
        origin-left
        transition-transform duration-700 ease-out
      "
    />

    {/* Number */}
    <div
      className="
        text-blue-900
        text-4xl
        font-bold
        mb-4

        transition-all duration-700 ease-out

        group-hover:text-blue-600
        group-hover:translate-x-2
        group-hover:scale-105
      "
    >
      01
    </div>

    {/* Title */}
    <h3
      className="
        text-xl
        font-bold
        text-gray-800
        mb-3

        transition-all duration-500

        group-hover:text-blue-600
        group-hover:translate-x-1
      "
    >
      Understand
    </h3>

    {/* Description */}
    <p
      className="
        text-gray-600
        leading-7 text-sm

        transition-colors duration-500

        group-hover:text-gray-700
      "
    >
      We understand our customers' requirements and the challenges
      they face in today's energy environment.
    </p>

    {/* Arrow */}
    <div
      className="
        mt-5
        text-blue-600
        text-lg

        opacity-0
        translate-y-2

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all duration-500
      "
    >
      →
    </div>

  </div>


  {/* =====================================================
      STEP 2 - INNOVATE
  ====================================================== */}
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    className="
      group relative
      bg-white
      rounded-2xl
      shadow-md
      p-8
      overflow-hidden
      border border-gray-100

      transition-all duration-700 ease-out

      hover:-translate-y-3
      hover:shadow-2xl
      hover:border-green-200
    "
  >

    {/* Top Gradient */}
    <div
      className="
        absolute top-0 left-0 right-0
        h-1
        bg-gradient-to-r from-green-500 to-emerald-400
        scale-x-0
        group-hover:scale-x-100
        origin-left
        transition-transform duration-700 ease-out
      "
    />

    {/* Number */}
    <div
      className="
        text-green-700
        text-4xl
        font-bold
        mb-4

        transition-all duration-700 ease-out

        group-hover:text-green-600
        group-hover:translate-x-2
        group-hover:scale-105
      "
    >
      02
    </div>

    {/* Title */}
    <h3
      className="
        text-xl
        font-bold
        text-gray-800
        mb-3

        transition-all duration-500

        group-hover:text-green-600
        group-hover:translate-x-1
      "
    >
      Innovate
    </h3>

    {/* Description */}
    <p
      className="
        text-gray-600
        leading-7
        text-sm

        transition-colors duration-500

        group-hover:text-gray-700
      "
    >
      Our teams use technology, engineering and innovation to develop
      practical and efficient solutions.
    </p>

    {/* Arrow */}
    <div
      className="
        mt-5
        text-green-600
        text-lg

        opacity-0
        translate-y-2

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all duration-500
      "
    >
      →
    </div>

  </div>


  {/* =====================================================
      STEP 3 - DELIVER
  ====================================================== */}
  <div
    data-aos="fade-up"
    data-aos-delay="300"
    className="
      group relative
      bg-white
      rounded-2xl
      shadow-md
      p-8
      overflow-hidden
      border border-gray-100

      transition-all duration-700 ease-out

      hover:-translate-y-3
      hover:shadow-2xl
      hover:border-orange-200
    "
  >

    {/* Top Gradient */}
    <div
      className="
        absolute top-0 left-0 right-0
        h-1
        bg-gradient-to-r from-orange-500 to-yellow-400
        scale-x-0
        group-hover:scale-x-100
        origin-left
        transition-transform duration-700 ease-out
      "
    />

    {/* Number */}
    <div
      className="
        text-orange-600
        text-4xl
        font-bold
        mb-4

        transition-all duration-700 ease-out

        group-hover:text-orange-500
        group-hover:translate-x-2
        group-hover:scale-105
      "
    >
      03
    </div>

    {/* Title */}
    <h3
      className="
        text-xl
        font-bold
        text-gray-800
        mb-3

        transition-all duration-500

        group-hover:text-orange-600
        group-hover:translate-x-1
      "
    >
      Deliver
    </h3>

    {/* Description */}
    <p
      className="
        text-gray-600
        leading-7 text-sm

        transition-colors duration-500

        group-hover:text-gray-700
      "
    >
      We focus on quality, reliability and customer satisfaction
      throughout every stage of delivery.
    </p>

    {/* Arrow */}
    <div
      className="
        mt-5
        text-orange-600
        text-lg

        opacity-0
        translate-y-2

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all duration-500
      "
    >
      →
    </div>

  </div>

</div>

      </section>

      {/* Our Values */}
      <section className="bg-blue-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

  {/* LEFT SIDE */}
  <div
    data-aos="fade-right"
    data-aos-duration="1200"
    data-aos-delay="200"
  >

    {/* Heading */}
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="flex items-center gap-3 !mb-4"
    >
      <span
        className="
          block
          w-10 h-[2px]
          bg-blue-600
          transition-all duration-700 ease-out
          hover:w-16
        "
      />

      <p
        className="
          text-blue-700
          text-xs
          font-bold
          uppercase
          tracking-[0.2em]
          !mb-0
          transition-all duration-500
          hover:tracking-[0.3em]
        "
      >
        Our Values
      </p>
    </div>


    {/* Heading */}
    <h2
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="450"
      className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-5"
    >
      Driven by Our Core Values
    </h2>


    {/* Description */}
    <p
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="550"
      className="text-gray-600 leading-7 !mb-6 text-sm"
    >
      Our values guide the way we work, make decisions and build
      relationships with our customers, employees and partners.
    </p>


    {/* Values */}
    <div className="space-y-2">

  {/* Value 1 */}
  <div
    data-aos="fade-right"
    data-aos-duration="900"
    data-aos-delay="300"
    className="
      group flex items-center gap-4
      p-3 rounded-xl
      border border-transparent

      transition-all duration-700 ease-out

      hover:bg-blue-50
      hover:border-blue-100
      hover:translate-x-2
      hover:shadow-sm
    "
  >
    <div
      className="
        w-10 h-10 shrink-0
        bg-blue-100
        text-blue-600
        rounded-full
        flex items-center justify-center
        font-bold

        transition-all duration-700 ease-out

        group-hover:bg-blue-600
        group-hover:text-white
        group-hover:scale-110
        group-hover:rotate-6
        group-hover:shadow-md
      "
    >
      ✓
    </div>

    <span
      className="
        font-semibold
        text-gray-700
        text-sm

        transition-all duration-500 ease-out

        group-hover:text-blue-700
        group-hover:translate-x-1
      "
    >
      Integrity & Transparency
    </span>
  </div>


  {/* Value 2 */}
  <div
    data-aos="fade-right"
    data-aos-duration="900"
    data-aos-delay="450"
    className="
      group flex items-center gap-4
      p-3 rounded-xl
      border border-transparent

      transition-all duration-700 ease-out

      hover:bg-blue-50
      hover:border-blue-100
      hover:translate-x-2
      hover:shadow-sm
    "
  >
    <div
      className="
        w-10 h-10 shrink-0
        bg-blue-100
        text-blue-600
        rounded-full
        flex items-center justify-center
        font-bold

        transition-all duration-700 ease-out

        group-hover:bg-blue-600
        group-hover:text-white
        group-hover:scale-110
        group-hover:rotate-6
        group-hover:shadow-md
      "
    >
      ✓
    </div>

    <span
      className="
        font-semibold
        text-gray-700
        text-sm

        transition-all duration-500 ease-out

        group-hover:text-blue-700
        group-hover:translate-x-1
      "
    >
      Customer Commitment
    </span>
  </div>


  {/* Value 3 */}
  <div
    data-aos="fade-right"
    data-aos-duration="900"
    data-aos-delay="600"
    className="
      group flex items-center gap-4
      p-3 rounded-xl
      border border-transparent

      transition-all duration-700 ease-out

      hover:bg-blue-50
      hover:border-blue-100
      hover:translate-x-2
      hover:shadow-sm
    "
  >
    <div
      className="
        w-10 h-10 shrink-0
        bg-blue-100
        text-blue-600
        rounded-full
        flex items-center justify-center
        font-bold

        transition-all duration-700 ease-out

        group-hover:bg-blue-600
        group-hover:text-white
        group-hover:scale-110
        group-hover:rotate-6
        group-hover:shadow-md
      "
    >
      ✓
    </div>

    <span
      className="
        font-semibold
        text-gray-700
        text-sm

        transition-all duration-500 ease-out

        group-hover:text-blue-700
        group-hover:translate-x-1
      "
    >
      Continuous Improvement
    </span>
  </div>


  {/* Value 4 */}
  <div
    data-aos="fade-right"
    data-aos-duration="900"
    data-aos-delay="750"
    className="
      group flex items-center gap-4
      p-3 rounded-xl
      border border-transparent

      transition-all duration-700 ease-out

      hover:bg-blue-50
      hover:border-blue-100
      hover:translate-x-2
      hover:shadow-sm
    "
  >
    <div
      className="
        w-10 h-10 shrink-0
        bg-blue-100
        text-blue-600
        rounded-full
        flex items-center justify-center
        font-bold

        transition-all duration-700 ease-out

        group-hover:bg-blue-600
        group-hover:text-white
        group-hover:scale-110
        group-hover:rotate-6
        group-hover:shadow-md
      "
    >
      ✓
    </div>

    <span
      className="
        font-semibold
        text-gray-700
        text-sm

        transition-all duration-500 ease-out

        group-hover:text-blue-700
        group-hover:translate-x-1
      "
    >
      Safety & Responsibility
    </span>
  </div>

</div>

  </div>


  {/* RIGHT SIDE */}
  <div
    data-aos="fade-left"
    data-aos-duration="1200"
    data-aos-delay="400"
    className="
      group relative
      bg-white
      rounded-3xl
      p-8 md:p-10
      overflow-hidden
      border border-gray-100
      shadow-lg

      transition-all duration-1000 ease-out

      hover:-translate-y-3
      hover:shadow-2xl
      hover:border-blue-200
    "
  >

    {/* Animated Top Line */}
    <div
      className="
        absolute top-0 left-0 right-0
        h-1
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-green-400

        scale-x-0
        group-hover:scale-x-100

        origin-left
        transition-transform duration-1000 ease-out
      "
    />

    {/* Decorative Circle */}
    <div
      className="
        absolute -right-16 -top-16
        w-40 h-40
        rounded-full
        bg-blue-50

        transition-all duration-1000 ease-out

        group-hover:scale-125
      "
    />

    {/* Icon */}
    <div
      className="
        relative
        w-14 h-14
        rounded-2xl
        bg-blue-100
        text-blue-700
        flex items-center justify-center
        text-2xl
        mb-6

        transition-all duration-1000 ease-out

        group-hover:scale-110
        group-hover:rotate-6
        group-hover:bg-blue-200
        group-hover:shadow-lg
      "
    >
      🌱
    </div>

    {/* Heading */}
    <h3
      className="
        relative
        text-2xl
        font-bold
        text-gray-800
        mb-5

        transition-all duration-700 ease-out

        group-hover:text-blue-700
        group-hover:translate-x-2
      "
    >
      Our Commitment
    </h3>

    {/* Paragraph */}
    <p
      className="
        relative
        text-gray-600
        leading-7
        mb-5
        text-sm

        transition-all duration-700 ease-out

        group-hover:text-gray-700
      "
    >
      We are committed to creating meaningful value through
      responsible innovation and sustainable business practices.
    </p>

    <p
      className="
        relative
        text-gray-600
        leading-7
        text-sm

        transition-all duration-700 ease-out

        group-hover:text-gray-700
      "
    >
      By continuously improving our capabilities and embracing
      emerging technologies, we aim to contribute to a more
      sustainable and energy-efficient future.
    </p>

    {/* Arrow */}
    <div
      className="
        relative
        mt-6
        text-blue-600
        text-lg

        opacity-0
        translate-y-3

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all duration-700 ease-out
      "
    >
      →
    </div>

  </div>

</div>

        </div>

      </section>

      {/* CTA */}
      <ContactusComponent />

    </div>
  );
};

export default OurCompany;