import React from 'react';
import ContactusComponent from "../Components/ContactusComponent";

const About: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        {/* Page Header */}
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
              About Us
            </h1>

            <p className="text-blue-100 text-lg mx-auto">
              Powering a sustainable future through innovative and reliable
              energy solutions.
            </p>

          </div>

        </section>

        {/* Who We Are */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div>
              <img
                src="/images/energy-2.jpg"
                alt="About Cellexa Energy"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
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
                  hover:tracking-[0.25em]"
                  >
                    What We Do
                  </p>
                </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Building a Cleaner & Sustainable Future
              </h2>

              <p className="text-gray-600 leading-7 mb-5 text-sm">
                Cellexa Energy is committed to delivering innovative, reliable, and sustainable energy 
                solutions that help businesses and communities transition towards a cleaner and more 
                energy-efficient future.
              </p>

              <p className="text-gray-600 leading-7 mb-5 text-sm">
                We combine advanced technology, innovation, and sustainable practices to develop 
                practical energy solutions that deliver long-term value for our customers while 
                contributing positively to the environment.
              </p>

              <p className="text-gray-600 leading-7 text-sm">
                From developing efficient energy solutions to supporting sustainable initiatives, our 
                team focuses on quality, reliability, efficiency, and continuous improvement. Through 
                responsible innovation and a customer-focused approach, we aim to play an active role 
                in shaping a cleaner and more sustainable future.
              </p>

            </div>

          </div>

        </section>

        {/* Mission & Vision */}
        <section className="bg-white py-16">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-12">

              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                  Our Purpose
                </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                Mission & Vision
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Mission */}
  <div
    className="
      group relative
      bg-blue-50
      rounded-2xl
      p-8
      border border-blue-100
      overflow-hidden
      transition-all duration-700 ease-out
      hover:-translate-y-3
      hover:shadow-2xl
      hover:border-blue-300
    "
  >

    {/* Top Hover Line */}
    <div
      className="
        absolute top-0 left-0 right-0
        h-1
        bg-gradient-to-r from-blue-600 to-cyan-400
        scale-x-0
        group-hover:scale-x-100
        origin-left
        transition-transform duration-700 ease-out
      "
    />

    {/* Icon */}
    <div
      className="
    w-14 h-14
    bg-blue-100
    rounded-xl
    flex items-center justify-center
    text-blue-700 text-2xl
    mb-5
    transition-all duration-700 ease-out
    group-hover:scale-110
    group-hover:rotate-6
    group-hover:bg-blue-200
    group-hover:text-blue-800
    group-hover:shadow-lg
  "
    >
      🎯
    </div>

    {/* Title */}
    <h3
      className="
        text-2xl font-bold text-gray-800 mb-4
        transition-all duration-500
        group-hover:text-blue-700
        group-hover:translate-x-1
      "
    >
      Our Mission
    </h3>

    {/* Description */}
    <p
      className="
        text-gray-600 leading-7 text-sm
        transition-colors duration-500
        group-hover:text-gray-700
      "
    >
      To provide innovative, efficient, and sustainable energy solutions that address the evolving 
      needs of our customers while supporting a cleaner, greener, and more sustainable future.
    </p>
    <p
      className="
        text-gray-600 leading-7 text-sm
        transition-colors duration-500
        group-hover:text-gray-700
      "
    >
      We are committed to combining advanced technology, responsible practices, and continuous innovation 
      to deliver reliable solutions that create lasting value for our customers, communities, and the 
      environment.
    </p>

    {/* Hover Arrow */}
    <div
      className="
        mt-5
        text-blue-700 text-lg
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


  {/* Vision */}
  <div
    className="
      group relative
      bg-green-50
      rounded-2xl
      p-8
      border border-green-100
      overflow-hidden
      transition-all duration-700 ease-out
      hover:-translate-y-3
      hover:shadow-2xl
      hover:border-green-300
    "
  >

    {/* Top Hover Line */}
    <div
      className="
        absolute top-0 left-0 right-0
        h-1
        bg-gradient-to-r from-green-600 to-emerald-400
        scale-x-0
        group-hover:scale-x-100
        origin-left
        transition-transform duration-700 ease-out
      "
    />

    {/* Icon */}
    <div
     className="
    w-14 h-14
    bg-green-100
    rounded-xl
    flex items-center justify-center
    text-green-700 text-2xl
    mb-5
    transition-all duration-700 ease-out
    group-hover:scale-110
    group-hover:-rotate-6
    group-hover:bg-green-200
    group-hover:text-green-700
    group-hover:shadow-lg
  "
    >
      🌱
    </div>

    {/* Title */}
    <h3
      className="
        text-2xl font-bold text-gray-800 mb-4
        transition-all duration-500
        group-hover:text-green-700
        group-hover:translate-x-1
      "
    >
      Our Vision
    </h3>

    {/* Description */}
    <p
      className="
        text-gray-600 leading-7 text-sm
        transition-colors duration-500
        group-hover:text-gray-700
      "
    >
      To become a trusted leader in sustainable energy solutions by embracing innovation, advanced 
      technology, and responsible business practices that create lasting value for our customers, 
      communities, and the environment.
    </p>
    <p
      className="
        text-gray-600 leading-7 text-sm
        transition-colors duration-500
        group-hover:text-gray-700
      "
    >
      We envision a future where clean energy, smart technology, and sustainable practices work together 
      to build a cleaner, more efficient, and resilient world for generations to come.
    </p>

    {/* Hover Arrow */}
    <div
      className="
        mt-5
        text-green-700 text-lg
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

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                  Why Choose Us
                </p>

                <span className="w-12 h-[2px] bg-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              What Sets Us Apart
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* Card 1 - Innovation */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="
      group relative
      bg-white
      rounded-xl
      shadow-md
      p-7
      text-center
      overflow-hidden
      border border-gray-100

      transition-all
      duration-700
      ease-out

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

    {/* Icon */}
    <div
      className="
        w-16 h-16
        mx-auto
        mb-5
        rounded-2xl
        bg-blue-50
        flex items-center justify-center
        text-4xl

        transition-all
        duration-700
        ease-out

        group-hover:scale-110
        group-hover:rotate-6
        group-hover:bg-blue-100
        group-hover:shadow-md
      "
    >
      ⚡
    </div>

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

    <p
      className="
        text-gray-600 text-sm leading-6
        transition-colors duration-500
        group-hover:text-gray-700
      "
    >
      We continuously explore new technologies and innovative
      approaches to energy solutions.
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


  {/* Card 2 - Sustainability */}
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    className="
      group relative
      bg-white
      rounded-xl
      shadow-md
      p-7
      text-center
      overflow-hidden
      border border-gray-100

      transition-all
      duration-700
      ease-out

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

    {/* Icon */}
    <div
      className="
        w-16 h-16
        mx-auto
        mb-5
        rounded-2xl
        bg-green-50
        flex items-center justify-center
        text-4xl

        transition-all
        duration-700
        ease-out

        group-hover:scale-110
        group-hover:-rotate-6
        group-hover:bg-green-100
        group-hover:shadow-md
      "
    >
      🌍
    </div>

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

    <p
      className="
        text-gray-600 text-sm leading-6
        transition-colors duration-500
        group-hover:text-gray-700
      "
    >
      Sustainability is at the heart of everything we do.
    </p>

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


  {/* Card 3 - Quality */}
  <div
    data-aos="fade-up"
    data-aos-delay="300"
    className="
      group relative
      bg-white
      rounded-xl
      shadow-md
      p-7
      text-center
      overflow-hidden
      border border-gray-100

      transition-all
      duration-700
      ease-out

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

    {/* Icon */}
    <div
      className="
        w-16 h-16
        mx-auto
        mb-5
        rounded-2xl
        bg-orange-50
        flex items-center justify-center
        text-4xl

        transition-all
        duration-700
        ease-out

        group-hover:scale-110
        group-hover:rotate-6
        group-hover:bg-orange-100
        group-hover:shadow-md
      "
    >
      ⭐
    </div>

    <h3
      className="
        text-xl font-bold text-gray-800 mb-3
        transition-all duration-500
        group-hover:text-orange-600
        group-hover:-translate-y-1
      "
    >
      Quality
    </h3>

    <p
      className="
        text-gray-600 text-sm leading-6
        transition-colors duration-500
        group-hover:text-gray-700
      "
    >
      We maintain high standards of quality and reliability in
      our solutions.
    </p>

    <div
      className="
        mt-4
        text-orange-600
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


  {/* Card 4 - Customer Focus */}
  <div
    data-aos="fade-up"
    data-aos-delay="400"
    className="
      group relative
      bg-white
      rounded-xl
      shadow-md
      p-7
      text-center
      overflow-hidden
      border border-gray-100

      transition-all
      duration-700
      ease-out

      hover:-translate-y-3
      hover:shadow-2xl
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
        rounded-2xl
        bg-purple-50
        flex items-center justify-center
        text-4xl

        transition-all
        duration-700
        ease-out

        group-hover:scale-110
        group-hover:-rotate-6
        group-hover:bg-purple-100
        group-hover:shadow-md
      "
    >
      🤝
    </div>

    <h3
      className="
        text-xl font-bold text-gray-800 mb-3
        transition-all duration-500
        group-hover:text-purple-600
        group-hover:-translate-y-1
      "
    >
      Customer Focus
    </h3>

    <p
      className="
        text-gray-600 text-sm leading-6
        transition-colors duration-500
        group-hover:text-gray-700
      "
    >
      We build strong relationships by understanding and
      responding to our customers' needs.
    </p>

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

        </section>

        {/* Call To Action */}
        <ContactusComponent />

      </div>
    </>
  )
}

export default About