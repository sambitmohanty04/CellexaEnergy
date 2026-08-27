import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ContactusComponent: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="group relative overflow-hidden py-20">

      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          scale-100
          transition-transform duration-[2000ms]
          ease-out
          group-hover:scale-105
        "
        style={{
          backgroundImage: "url('/images/energy-3.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute inset-0
          bg-slate-950/85
          transition-all duration-700
          group-hover:bg-slate-950/75
        "
      />

      {/* Decorative Glow */}
      <div
        className="
          absolute -top-24 -right-24
          w-80 h-80
          bg-blue-500/20
          rounded-full
          blur-3xl
          transition-transform duration-1000
          group-hover:scale-125
        "
      />

      <div
        className="
          absolute -bottom-24 -left-24
          w-80 h-80
          bg-green-500/10
          rounded-full
          blur-3xl
          transition-transform duration-1000
          group-hover:scale-125
        "
      />


      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Small Label */}
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          className="flex items-center justify-center gap-3 mb-5"
        >

          <span className="w-10 h-[2px] bg-blue-500" />

          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
            Get In Touch
          </p>

          <span className="w-10 h-[2px] bg-blue-500" />

        </div>


        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
          className="
            text-3xl md:text-4xl lg:text-5xl
            font-bold !text-white
            !mb-3
            leading-tight
            transition-transform duration-500
            hover:scale-[1.02]
          "
        >
          Let's Build the Future Together
        </h2>


        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="250"
          className="
            mx-auto
            text-blue-100
            text-sm md:text-base
            leading-7
            !mb-3
          "
        >
          Have a project or requirement? Get in touch with our team
          and discover how we can help you with reliable,
          innovative, and sustainable solutions.
        </p>


        {/* Button */}
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="400"
        >

          <Link
            to="/contact"
            className="
    group/btn
    inline-flex items-center gap-3
    bg-blue-600
    hover:bg-blue-700
    text-white
    font-semibold
    px-5 py-2.5
    rounded-xl
    shadow-lg
    hover:shadow-blue-500/30
    hover:-translate-y-1
    transition-all duration-300
  "
          >
            <span>
              Contact Us
            </span>

            <span
              className="
      text-lg
      transition-transform duration-300
      group-hover/btn:translate-x-2
    "
            >
              →
            </span>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default ContactusComponent;