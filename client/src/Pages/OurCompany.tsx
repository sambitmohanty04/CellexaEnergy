import React from "react";
import ContactusComponent from "../Components/ContactusComponent";

const OurCompany: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold !text-white mb-4">
            Our Company
          </h1>

          <p className="text-white text-sm mx-auto">
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
              src="/images/company.jpg"
              alt="Our Company"
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>

            <span className="text-blue-700 font-semibold uppercase tracking-wide">
              About Our Company
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
              Empowering the Future of Energy
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              Cellexa Energy is focused on delivering reliable, innovative
              and sustainable energy solutions for a rapidly changing world.
            </p>

            <p className="text-gray-600 leading-7 mb-5">
              We combine technology, engineering expertise and a strong
              commitment to sustainability to create solutions that support
              the evolving energy needs of businesses and communities.
            </p>

            <p className="text-gray-600 leading-7">
              Our approach is built around innovation, quality, safety,
              efficiency and long-term partnerships with our customers.
            </p>

          </div>

        </div>

      </section>

      {/* Company Highlights */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="text-blue-700 font-semibold uppercase tracking-wide">
              Our Strength
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              What Defines Our Company
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

            {/* Innovation */}
            <div className="bg-gray-50 rounded-2xl p-7 text-center border border-gray-100 hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                ⚡
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Innovation
              </h3>

              <p className="text-gray-600 leading-6">
                Embracing technology and new ideas to create smarter energy
                solutions.
              </p>

            </div>

            {/* Sustainability */}
            <div className="bg-gray-50 rounded-2xl p-7 text-center border border-gray-100 hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto mb-5 bg-green-100 rounded-full flex items-center justify-center text-3xl">
                🌱
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sustainability
              </h3>

              <p className="text-gray-600 leading-6">
                Supporting a cleaner future through responsible and
                sustainable energy practices.
              </p>

            </div>

            {/* Quality */}
            <div className="bg-gray-50 rounded-2xl p-7 text-center border border-gray-100 hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto mb-5 bg-yellow-100 rounded-full flex items-center justify-center text-3xl">
                ⭐
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Quality
              </h3>

              <p className="text-gray-600 leading-6">
                Maintaining high standards of quality, reliability and
                performance.
              </p>

            </div>

            {/* Partnership */}
            <div className="bg-gray-50 rounded-2xl p-7 text-center border border-gray-100 hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto mb-5 bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                🤝
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Partnership
              </h3>

              <p className="text-gray-600 leading-6">
                Building trusted and long-term relationships with our
                customers and partners.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Our Approach */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <span className="text-blue-700 font-semibold uppercase tracking-wide">
            Our Approach
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            How We Work
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8">

            <div className="text-blue-900 text-4xl font-bold mb-4">
              01
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Understand
            </h3>

            <p className="text-gray-600 leading-7">
              We understand our customers' requirements and the challenges
              they face in today's energy environment.
            </p>

          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8">

            <div className="text-blue-900 text-4xl font-bold mb-4">
              02
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Innovate
            </h3>

            <p className="text-gray-600 leading-7">
              Our teams use technology, engineering and innovation to develop
              practical and efficient solutions.
            </p>

          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8">

            <div className="text-blue-900 text-4xl font-bold mb-4">
              03
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Deliver
            </h3>

            <p className="text-gray-600 leading-7">
              We focus on quality, reliability and customer satisfaction
              throughout every stage of delivery.
            </p>

          </div>

        </div>

      </section>

      {/* Our Values */}
      <section className="bg-blue-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-blue-700 font-semibold uppercase tracking-wide">
                Our Values
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
                Driven by Our Core Values
              </h2>

              <p className="text-gray-600 leading-7 mb-7">
                Our values guide the way we work, make decisions and build
                relationships with our customers, employees and partners.
              </p>

              <div className="space-y-4">

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center">
                    ✓
                  </div>

                  <span className="font-semibold text-gray-700">
                    Integrity & Transparency
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center">
                    ✓
                  </div>

                  <span className="font-semibold text-gray-700">
                    Customer Commitment
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center">
                    ✓
                  </div>

                  <span className="font-semibold text-gray-700">
                    Continuous Improvement
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center">
                    ✓
                  </div>

                  <span className="font-semibold text-gray-700">
                    Safety & Responsibility
                  </span>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10">

              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Our Commitment
              </h3>

              <p className="text-gray-600 leading-7 mb-5">
                We are committed to creating meaningful value through
                responsible innovation and sustainable business practices.
              </p>

              <p className="text-gray-600 leading-7">
                By continuously improving our capabilities and embracing
                emerging technologies, we aim to contribute to a more
                sustainable and energy-efficient future.
              </p>

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