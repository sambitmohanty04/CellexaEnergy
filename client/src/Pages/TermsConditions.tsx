import React, { useState } from "react";
import ContactusComponent from "../Components/ContactusComponent";

import {
  Globe,
  Copyright,
  Settings,
  User,
  FileText,
  Scale,
  Link as LinkIcon,
  RefreshCw,
  Gavel,
  Mail,
  ChevronDown,
} from "lucide-react";

const TermsConditions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleAccordion = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};  

  const additionalTerms = [
    {
      title: "Disclaimer",
      icon: FileText,
      color: "blue",
      content:
        "We make reasonable efforts to keep website information accurate and current. However, we do not guarantee that all content will always be complete, accurate, reliable or available without interruption.",
    },
    {
      title: "Limitation of Liability",
      icon: Scale,
      color: "green",
      content:
        "To the extent permitted by applicable law, we will not be responsible for losses or damages arising from the use of, or inability to use, this website or information provided through it.",
    },
    {
      title: "Third-Party Links",
      icon: LinkIcon,
      color: "orange",
      content:
        "Our website may contain links to third-party websites. These links are provided for convenience, and we are not responsible for the content, policies or practices of external websites.",
    },
    {
      title: "Changes to These Terms",
      icon: RefreshCw,
      color: "purple",
      content:
        "We reserve the right to update or modify these Terms & Conditions when necessary. Changes will become effective when they are published on this page.",
    },
    {
      title: "Governing Law",
      icon: Gavel,
      color: "indigo",
      content:
        "These Terms & Conditions shall be interpreted and governed in accordance with the applicable laws and regulations governing our services.",
    },
    {
      title: "Contact Us",
      icon: Mail,
      color: "blue",
      content:
        "If you have questions about these Terms & Conditions, please contact us through the contact information provided on our website.",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <section className="relative overflow-hidden py-10">

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
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          >

            <div
              data-aos="fade-down"
              data-aos-duration="700"
              className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-4"
            >
              Legal Information
            </div>

            <h1
              data-aos="zoom-in"
              data-aos-duration="900"
              data-aos-delay="150"
              className="text-4xl md:text-5xl font-bold !text-white mb-5"
            >
              Terms &amp; Conditions
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              className="text-blue-100 text-sm mx-auto leading-7"
            >
              Please read these terms carefully before using our website
              and services.
            </p>

          </div>
        </section>


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="max-w-4xl mx-auto">

            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-center mb-10"
            >

              <div className="flex items-center justify-center gap-3 mb-3">

                <span className="w-10 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-widest">
                  Terms of Use
                </p>

                <span className="w-10 h-[2px] bg-blue-500" />

              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Terms &amp; Conditions
              </h2>

            </div>


            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="150"
              className="
                group
                bg-white
                rounded-2xl
                p-7 md:p-10
                border border-slate-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-700
              "
            >

              <p className="text-gray-600 leading-7 text-sm mb-5">
                Welcome to our website. By accessing or using this website,
                you agree to comply with and be bound by these Terms &
                Conditions. If you do not agree with any part of these
                terms, please discontinue use of the website.
              </p>

              <p className="text-gray-600 leading-7 text-sm md:text-base">
                These terms are intended to establish the rules and
                conditions governing your use of our website, content,
                services and related resources.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            TERMS CARDS
        ====================================================== */}

        <section className="max-w-7xl mx-auto px-6 pb-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

            {/* =================================================
                01 - Website Usage
            ================================================== */}

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                group relative bg-white rounded-2xl p-7
                border border-slate-100 shadow-sm
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-700
                overflow-hidden
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

              <div
                className="
                  w-14 h-14 rounded-2xl bg-blue-50
                  flex items-center justify-center
                  text-blue-600
                  mb-5
                  transition-all duration-700
                  group-hover:bg-blue-100
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <Globe size={25} />
              </div>

              <h3
                className="
                  text-xl font-bold text-gray-800 mb-3
                  group-hover:text-blue-600
                  transition-colors duration-500
                "
              >
                1. Website Usage
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                You agree to use this website only for lawful purposes
                and in a manner that does not interfere with the
                operation, security or availability of the website.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-600">

                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  Use the website for lawful purposes
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  Do not attempt unauthorized access
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  Do not interfere with website functionality
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  Do not misuse website content or services
                </li>

              </ul>

            </div>


            {/* =================================================
                02 - Intellectual Property
            ================================================== */}

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                group relative bg-white rounded-2xl p-7
                border border-slate-100 shadow-sm
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-700
                overflow-hidden
              "
            >

              <div
                className="
                  absolute top-0 left-0 right-0 h-1
                  bg-gradient-to-r from-green-500 to-emerald-400
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-700
                  origin-left
                "
              />

              <div
                className="
                  w-14 h-14 rounded-2xl bg-green-50
                  flex items-center justify-center
                  text-green-600
                  mb-5
                  transition-all duration-700
                  group-hover:bg-green-100
                  group-hover:scale-110
                  group-hover:-rotate-6
                "
              >
                <Copyright size={25} />
              </div>

              <h3
                className="
                  text-xl font-bold text-gray-800 mb-3
                  group-hover:text-green-600
                  transition-colors duration-500
                "
              >
                2. Intellectual Property
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Unless otherwise stated, the content available on this
                website, including text, graphics, images, logos and
                other materials, is owned by or licensed to us.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-600">

                <li className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  Content is protected by applicable laws
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  Logos and trademarks remain their respective property
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  Content may not be reproduced without permission
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  Unauthorized commercial use is prohibited
                </li>

              </ul>

            </div>


            {/* =================================================
                03 - Services
            ================================================== */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="
                group relative bg-white rounded-2xl p-7
                border border-slate-100 shadow-sm
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-700
                overflow-hidden
              "
            >

              <div
                className="
                  absolute top-0 left-0 right-0 h-1
                  bg-gradient-to-r from-orange-500 to-yellow-400
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-700
                  origin-left
                "
              />

              <div
                className="
                  w-14 h-14 rounded-2xl bg-orange-50
                  flex items-center justify-center
                  text-orange-600
                  mb-5
                  transition-all duration-700
                  group-hover:bg-orange-100
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <Settings size={25} />
              </div>

              <h3
                className="
                  text-xl font-bold text-gray-800 mb-3
                  group-hover:text-orange-600
                  transition-colors duration-500
                "
              >
                3. Services &amp; Information
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Information presented on this website is provided for
                general informational purposes. Service descriptions,
                specifications, availability and other information may
                change without prior notice.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-600">

                <li className="flex items-center gap-3">
                  <span className="text-orange-600">✓</span>
                  Service information may change
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-orange-600">✓</span>
                  Availability may vary
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-orange-600">✓</span>
                  Information should be independently verified
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-orange-600">✓</span>
                  Additional terms may apply to specific services
                </li>

              </ul>

            </div>


            {/* =================================================
                04 - User Responsibilities
            ================================================== */}

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="
                group relative bg-white rounded-2xl p-7
                border border-slate-100 shadow-sm
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-700
                overflow-hidden
              "
            >

              <div
                className="
                  absolute top-0 left-0 right-0 h-1
                  bg-gradient-to-r from-purple-500 to-pink-400
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-700
                  origin-left
                "
              />

              <div
                className="
                  w-14 h-14 rounded-2xl bg-purple-50
                  flex items-center justify-center
                  text-purple-600
                  mb-5
                  transition-all duration-700
                  group-hover:bg-purple-100
                  group-hover:scale-110
                  group-hover:-rotate-6
                "
              >
                <User size={25} />
              </div>

              <h3
                className="
                  text-xl font-bold text-gray-800 mb-3
                  group-hover:text-purple-600
                  transition-colors duration-500
                "
              >
                4. User Responsibilities
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Users are responsible for ensuring that the information
                they provide is accurate and that their use of the website
                complies with these Terms &amp; Conditions.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-600">

                <li className="flex items-center gap-3">
                  <span className="text-purple-600">✓</span>
                  Provide accurate information
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-purple-600">✓</span>
                  Keep submitted information up to date
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-purple-600">✓</span>
                  Respect applicable laws and regulations
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-purple-600">✓</span>
                  Avoid activities that may harm the website
                </li>

              </ul>

            </div>

          </div>

        </section>


        {/* =====================================================
            ADDITIONAL TERMS ACCORDION
        ====================================================== */}

        <section className="bg-white border-y border-gray-100">

          <div className="max-w-5xl mx-auto px-6 py-16">

            {/* Heading */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-center mb-10"
            >

              <div className="flex items-center justify-center gap-3 mb-3">

                <span className="w-10 h-[2px] bg-blue-500" />

                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-widest">
                  Important Information
                </p>

                <span className="w-10 h-[2px] bg-blue-500" />

              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Additional Terms
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Click on each section to view the complete information.
              </p>

            </div>


            {/* Accordion */}<div className="space-y-4">

  {additionalTerms.map((term, index) => {
  const Icon = term.icon;
  const isOpen = openIndex === index;

  return (
    <div
      key={term.title}
      className={`
        group relative overflow-hidden
        rounded-2xl
        border
        bg-white
        ${
          isOpen
            ? "border-blue-200 shadow-xl"
            : "border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-lg"
        }
      `}
    >

      {/* Top Gradient */}
      <div
        className={`
          absolute top-0 left-0 right-0 h-1
          bg-gradient-to-r
          ${
            term.color === "blue"
              ? "from-blue-500 to-cyan-400"
              : term.color === "green"
              ? "from-green-500 to-emerald-400"
              : term.color === "orange"
              ? "from-orange-500 to-yellow-400"
              : term.color === "purple"
              ? "from-purple-500 to-pink-400"
              : "from-indigo-500 to-blue-400"
          }
          ${isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
        `}
      />

      {/* Header */}
      <button
        type="button"
        onClick={() => toggleAccordion(index)}
        className="
          w-full
          flex items-center justify-between
          gap-4
          p-5 md:p-6
          text-left
          focus:outline-none
        "
      >

        <div className="flex items-center gap-4">

          {/* Icon */}
          <div
            className={`
              w-12 h-12
              shrink-0
              rounded-xl
              flex items-center justify-center

              ${
                isOpen
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50 text-blue-600"
              }
            `}
          >
            <Icon size={21} strokeWidth={2} />
          </div>

          {/* Title */}
          <h3
            className={`
              text-base md:text-lg
              font-bold

              ${
                isOpen
                  ? "text-blue-700"
                  : "text-gray-800"
              }
            `}
          >
            {term.title}
          </h3>

        </div>

        {/* Arrow */}
        <div
          className={`
            shrink-0
            ${
              isOpen
                ? "text-blue-600 rotate-180"
                : "text-gray-400"
            }
          `}
        >
          <ChevronDown size={23} />
        </div>

      </button>


      {/* Content - Instant */}
      {isOpen && (
        <div className="px-5 pb-6 md:px-6 md:pb-7">

          <div className="ml-0 md:ml-16">

            <div className="w-16 h-[2px] mb-4 bg-blue-500" />

            <p className="text-gray-600 text-sm leading-7">
              {term.content}
            </p>

          </div>

        </div>
      )}

    </div>
  );
})}

</div>

          </div>

        </section>


        {/* =====================================================
            LAST UPDATED / THANK YOU
        ====================================================== */}

        <section className="max-w-5xl mx-auto px-6 py-12">

          <div
            data-aos="zoom-in"
            data-aos-duration="900"
            className="
              group
              relative
              bg-blue-900
              rounded-2xl
              p-8
              text-center
              shadow-lg
              overflow-hidden
              transition-all duration-500
              hover:shadow-2xl
            "
          >

            {/* Decorative circles */}
            <div
              className="
                absolute
                -top-20
                -right-20
                w-48
                h-48
                rounded-full
                bg-blue-500/20
                blur-2xl
                transition-transform duration-500
                group-hover:scale-125
              "
            />

            <div
              className="
                absolute
                -bottom-20
                -left-20
                w-48
                h-48
                rounded-full
                bg-cyan-400/10
                blur-2xl
                transition-transform duration-500
                group-hover:scale-200
              "
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 !mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                <p className="text-blue-300 !mb-0 text-xs font-bold uppercase tracking-wide">
                  Terms &amp; Conditions
                </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>

              <h3 className="text-2xl font-bold !text-white mb-3">
                Thank You for Using Our Website
              </h3>

              <p className="text-blue-100 text-sm leading-6 mx-auto">
                By continuing to use our website, you acknowledge that
                you have read and agree to these Terms &amp; Conditions.
              </p>

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

export default TermsConditions;