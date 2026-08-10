import React from 'react';
import ContactusComponent from "../Components/ContactusComponent";

const About: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        {/* Page Header */}
        <section className="bg-blue-900 py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h1>

            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
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
                src="/images/about-us.jpg"
                alt="About Cellexa Energy"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div>

              <div className="text-blue-700 font-semibold uppercase my-3 tracking-wide">
                Who We Are
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Building a Cleaner & Sustainable Future
              </h2>

              <p className="text-gray-600 leading-7 mb-5">
                Cellexa Energy is committed to delivering innovative and
                sustainable energy solutions that help businesses and
                communities move towards a cleaner future.
              </p>

              <p className="text-gray-600 leading-7 mb-5">
                We focus on combining technology, innovation and
                sustainability to develop reliable energy solutions that
                create long-term value for our customers and the environment.
              </p>

              <p className="text-gray-600 leading-7">
                Our team works with a strong commitment to quality,
                efficiency and continuous improvement while helping shape
                the future of energy.
              </p>

            </div>

          </div>

        </section>

        {/* Mission & Vision */}
        <section className="bg-white py-16">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-12">

              <div className="mb-3 text-blue-700 font-semibold uppercase tracking-wide">
                Our Purpose
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                Mission & Vision
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Mission */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">

                <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center text-white text-2xl mb-5">
                  🎯
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>

                <p className="text-gray-600 leading-7">
                  To provide innovative, efficient and sustainable energy
                  solutions that meet the evolving needs of our customers
                  while contributing to a cleaner and greener planet.
                </p>

              </div>

              {/* Vision */}
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">

                <div className="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center text-white text-2xl mb-5">
                  🌱
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-600 leading-7">
                  To become a trusted leader in sustainable energy by
                  embracing innovation, technology and responsible business
                  practices for a better tomorrow.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-12">

            <div className="mb-3 text-blue-700 font-semibold uppercase tracking-wide">
              Why Choose Us
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              What Sets Us Apart
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-7 text-center hover:shadow-xl transition">

              <div className="text-4xl mb-4">
                ⚡
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Innovation
              </h3>

              <p className="text-gray-600">
                We continuously explore new technologies and innovative
                approaches to energy solutions.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-7 text-center hover:shadow-xl transition">

              <div className="text-4xl mb-4">
                🌍
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sustainability
              </h3>

              <p className="text-gray-600">
                Sustainability is at the heart of everything we do.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-7 text-center hover:shadow-xl transition">

              <div className="text-4xl mb-4">
                ⭐
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Quality
              </h3>

              <p className="text-gray-600 mb-3">
                We maintain high standards of quality and reliability in
                our solutions.
              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-7 text-center hover:shadow-xl transition">

              <div className="text-4xl mb-4">
                🤝
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Customer Focus
              </h3>

              <p className="text-gray-600">
                We build strong relationships by understanding and
                responding to our customers' needs.
              </p>

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