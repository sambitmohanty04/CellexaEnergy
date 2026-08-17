import React from "react";
import ContactusComponent from "../Components/ContactusComponent";
import { FaRegCheckCircle } from "react-icons/fa";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <section className="relative overflow-hidden py-24">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/energy-3.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Decorative Glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

            <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">
              Legal Information
            </div>

            <h1 className="text-4xl md:text-5xl font-bold !text-white mb-5">
              Privacy Policy
            </h1>

            <p className="text-blue-100 text-sm mx-auto leading-7">
              Your privacy matters to us. Learn how we collect, use,
              protect and manage your personal information.
            </p>

          </div>
        </section>


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-10">

              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-10 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-widest">
                  Privacy & Security
                </p>

                <span className="w-10 h-[2px] bg-blue-500" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Protecting Your Privacy
              </h2>

            </div>

            <div
              className="bg-white rounded-2xl p-7 md:p-10 text-sm
                         border border-slate-100 shadow-sm"
            >
              <p className="text-gray-600 leading-7 text-sm mb-5">
                We respect your privacy and are committed to protecting
                the personal information you share with us. This Privacy
                Policy explains how we collect, use, store and protect
                information when you visit our website or use our services.
              </p>

              <p className="text-gray-600 leading-7 text-sm">
                By accessing or using our website, you acknowledge that
                you have read and understood this Privacy Policy.
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            PRIVACY SECTIONS
        ====================================================== */}
        <section className="max-w-7xl mx-auto px-6 pb-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

            {/* Information We Collect */}
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="100"
              className="
      group relative bg-white rounded-2xl p-7
      border border-slate-100 shadow-sm
      overflow-hidden

      transition-all duration-700 ease-out

      hover:-translate-y-2
      hover:shadow-2xl
      hover:border-blue-200
    "
            >

              {/* Top Gradient */}
              <div
                className="
        absolute top-0 left-0 right-0 h-1
        bg-gradient-to-r from-blue-500 to-cyan-400
        origin-left scale-x-0
        group-hover:scale-x-100
        transition-transform duration-700 ease-out
      "
              />

              {/* Icon */}
              <div
                className="
        w-14 h-14 rounded-2xl
        bg-blue-50
        flex items-center justify-center
        text-2xl mb-5

        transition-all duration-700 ease-out

        group-hover:bg-blue-100
        group-hover:scale-110
        group-hover:rotate-6
        group-hover:shadow-md
      "
              >
                🔐
              </div>

              {/* Title */}
              <h3
                className="
        text-xl font-bold text-gray-800 mb-3

        transition-all duration-500

        group-hover:text-blue-600
        group-hover:translate-x-1
      "
              >
                Information We Collect
              </h3>

              {/* Description */}
              <p
                className="
        text-gray-600 text-sm leading-6
        transition-colors duration-500
        group-hover:text-gray-700
      "
              >
                We may collect information that you voluntarily provide
                when you contact us, request information, submit a form,
                subscribe to communications or interact with our website.
              </p>

              {/* List */}
              <ul className="mt-5 space-y-2 text-sm text-gray-600">

                <li className="flex gap-2">
                  <span className="text-blue-500 transition-transform duration-500 group-hover:translate-x-1">
                    <FaRegCheckCircle />
                  </span>
                  <span>Name and contact information</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-blue-500 transition-transform duration-500 group-hover:translate-x-1">
                    <FaRegCheckCircle />
                  </span>
                  <span>Email address and phone number</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-blue-500 transition-transform duration-500 group-hover:translate-x-1">
                    <FaRegCheckCircle />
                  </span>
                  <span>Company or organization details</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-blue-500 transition-transform duration-500 group-hover:translate-x-1">
                    <FaRegCheckCircle />
                  </span>
                  <span>Information submitted through forms</span>
                </li>

              </ul>

            </div>


            {/* How We Use Information */}
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
              className="
      group relative bg-white rounded-2xl p-7
      border border-slate-100 shadow-sm
      overflow-hidden

      transition-all duration-700 ease-out

      hover:-translate-y-2
      hover:shadow-2xl
      hover:border-green-200
    "
            >

              {/* Top Gradient */}
              <div
                className="
        absolute top-0 left-0 right-0 h-1
        bg-gradient-to-r from-green-500 to-emerald-400
        origin-left scale-x-0
        group-hover:scale-x-100
        transition-transform duration-700 ease-out
      "
              />

              {/* Icon */}
              <div
                className="
        w-14 h-14 rounded-2xl
        bg-green-50
        flex items-center justify-center
        text-2xl mb-5

        transition-all duration-700 ease-out

        group-hover:bg-green-100
        group-hover:scale-110
        group-hover:-rotate-6
        group-hover:shadow-md
      "
              >
                📊
              </div>

              <h3
                className="
        text-xl font-bold text-gray-800 mb-3

        transition-all duration-500

        group-hover:text-green-600
        group-hover:translate-x-1
      "
              >
                How We Use Your Information
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Information collected through our website may be used
                to respond to enquiries, provide requested services,
                improve our website and communicate important updates.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-600">

                <li className="flex gap-2">
                  <span className="text-green-500"><FaRegCheckCircle /></span>
                  <span>Respond to enquiries and requests</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-green-500"><FaRegCheckCircle /></span>
                  <span>Provide and improve our services</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-green-500"><FaRegCheckCircle /></span>
                  <span>Communicate with customers</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-green-500"><FaRegCheckCircle /></span>
                  <span>Improve website functionality</span>
                </li>

              </ul>

            </div>


            {/* Data Protection */}
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
              className="
      group relative bg-white rounded-2xl p-7
      border border-slate-100 shadow-sm
      overflow-hidden

      transition-all duration-700 ease-out

      hover:-translate-y-2
      hover:shadow-2xl
      hover:border-orange-200
    "
            >

              {/* Top Gradient */}
              <div
                className="
        absolute top-0 left-0 right-0 h-1
        bg-gradient-to-r from-orange-500 to-yellow-400
        origin-left scale-x-0
        group-hover:scale-x-100
        transition-transform duration-700 ease-out
      "
              />

              {/* Icon */}
              <div
                className="
        w-14 h-14 rounded-2xl
        bg-orange-50
        flex items-center justify-center
        text-2xl mb-5

        transition-all duration-700 ease-out

        group-hover:bg-orange-100
        group-hover:scale-110
        group-hover:rotate-6
        group-hover:shadow-md
      "
              >
                🛡️
              </div>

              <h3
                className="
        text-xl font-bold text-gray-800 mb-3

        transition-all duration-500

        group-hover:text-orange-600
        group-hover:translate-x-1
      "
              >
                Data Protection
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                We take reasonable measures to protect personal
                information against unauthorized access, alteration,
                disclosure or destruction.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-600">

                <li className="flex gap-2">
                  <span className="text-orange-500"><FaRegCheckCircle /></span>
                  <span>Secure handling of personal information</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-orange-500"><FaRegCheckCircle /></span>
                  <span>Restricted access to sensitive data</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-orange-500"><FaRegCheckCircle /></span>
                  <span>Reasonable security measures</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-orange-500"><FaRegCheckCircle /></span>
                  <span>Regular review of security practices</span>
                </li>

              </ul>

            </div>


            {/* Cookies */}
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="400"
              className="
      group relative bg-white rounded-2xl p-7
      border border-slate-100 shadow-sm
      overflow-hidden

      transition-all duration-700 ease-out

      hover:-translate-y-2
      hover:shadow-2xl
      hover:border-purple-200
    "
            >

              {/* Top Gradient */}
              <div
                className="
        absolute top-0 left-0 right-0 h-1
        bg-gradient-to-r from-purple-500 to-pink-400
        origin-left scale-x-0
        group-hover:scale-x-100
        transition-transform duration-700 ease-out
      "
              />

              {/* Icon */}
              <div
                className="
        w-14 h-14 rounded-2xl
        bg-purple-50
        flex items-center justify-center
        text-2xl mb-5

        transition-all duration-700 ease-out

        group-hover:bg-purple-100
        group-hover:scale-110
        group-hover:-rotate-6
        group-hover:shadow-md
      "
              >
                🍪
              </div>

              <h3
                className="
        text-xl font-bold text-gray-800 mb-3

        transition-all duration-500

        group-hover:text-purple-600
        group-hover:translate-x-1
      "
              >
                Cookies & Tracking
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Our website may use cookies or similar technologies
                to improve your browsing experience, understand website
                usage and maintain essential functionality.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-600">

                <li className="flex gap-2">
                  <span className="text-purple-500"><FaRegCheckCircle /></span>
                  <span>Essential website functionality</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-purple-500"><FaRegCheckCircle /></span>
                  <span>Website performance analysis</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-purple-500"><FaRegCheckCircle /></span>
                  <span>Improving user experience</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-purple-500"><FaRegCheckCircle /></span>
                  <span>Understanding website usage</span>
                </li>

              </ul>

            </div>

          </div>

        </section>


        {/* =====================================================
            ADDITIONAL PRIVACY INFORMATION
        ====================================================== */}
        <section className="bg-white border-y border-gray-100">

          <div className="max-w-5xl mx-auto px-6 py-16">

            <div className="text-center mb-10">

              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-10 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-widest">
                  Your Rights
                </p>

                <span className="w-10 h-[2px] bg-blue-500" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Your Privacy Choices
              </h2>

            </div>


            <div className="space-y-5">

              {/* Right 1 */}
              <div
                className="bg-gray-50 rounded-2xl p-6
                           border border-gray-100
                           hover:border-blue-200
                           hover:shadow-md
                           transition-all duration-500"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Access & Correction
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  You may contact us if you believe the personal
                  information we hold about you needs to be corrected
                  or updated.
                </p>
              </div>


              {/* Right 2 */}
              <div
                className="bg-gray-50 rounded-2xl p-6
                           border border-gray-100
                           hover:border-blue-200
                           hover:shadow-md
                           transition-all duration-500"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Communication Preferences
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  If you receive communications from us, you may
                  contact us to request changes to your communication
                  preferences.
                </p>
              </div>


              {/* Right 3 */}
              <div
                className="bg-gray-50 rounded-2xl p-6
                           border border-gray-100
                           hover:border-blue-200
                           hover:shadow-md
                           transition-all duration-500"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Third-Party Services
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  Our website may use third-party services or tools.
                  Their handling of information is governed by their
                  respective privacy policies.
                </p>
              </div>


              {/* Right 4 */}
              <div
                className="bg-gray-50 rounded-2xl p-6
                           border border-gray-100
                           hover:border-blue-200
                           hover:shadow-md
                           transition-all duration-500"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Policy Updates
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  We may update this Privacy Policy from time to time
                  to reflect changes in our services, practices or
                  applicable requirements.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT CTA
        ====================================================== */}
        <ContactusComponent />

      </div>
    </>
  );
};

export default PrivacyPolicy;