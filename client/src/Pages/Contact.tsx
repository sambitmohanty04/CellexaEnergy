import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

import API_URL from "../service/api";

const Contact: React.FC = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  // =====================================================
  // AOS INITIALIZATION
  // =====================================================

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);


  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  // =====================================================
  // SUBMIT FORM
  // =====================================================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      console.log("Sending data:", formData);

      const response = await API_URL.post(
        "/contactus",
        formData
      );

      console.log(
        "API Response:",
        response.data
      );


      if (response.data.success) {

        toast.success(
          "Thank you! Your message has been submitted."
        );

        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

      } else {

        toast.error(
          response.data.message ||
          "Something went wrong."
        );

      }

    } catch (error: any) {

      console.error(
        "Contact API Error:",
        error.response?.data ||
        error.message
      );

      toast.error(
        error.response?.data?.message ||
        "Unable to submit your message. Please try again."
      );

    }

  };


  return (

    <div className="bg-slate-50">


      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="relative overflow-hidden bg-blue-950 py-10">


        {/* Background Circle 1 */}

        <div
          className="
            absolute
            -left-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-blue-600/20
            blur-3xl
            animate-pulse
          "
        />


        {/* Background Circle 2 */}

        <div
          className="
            absolute
            -right-24
            -bottom-32
            h-96
            w-96
            rounded-full
            bg-cyan-400/10
            blur-3xl
            animate-pulse
          "
        />


        {/* Small Floating Circle */}

        <div
          className="
            absolute
            left-[15%]
            top-10
            h-3
            w-3
            rounded-full
            bg-blue-400/60
            animate-bounce
          "
        />


        {/* Small Floating Circle */}

        <div
          className="
            absolute
            right-[20%]
            top-20
            h-2
            w-2
            rounded-full
            bg-cyan-300/70
            animate-ping
          "
        />


        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">


          {/* Section Label */}

          <div
            data-aos="fade-down"
            data-aos-duration="900"
            className="flex items-center justify-center gap-3 mb-5"
          >

            <span className="w-10 h-[2px] bg-blue-400" />

            <p className="!mb-0 text-blue-300 text-xs font-bold uppercase tracking-[0.2em]">
              Get In Touch
            </p>

            <span className="w-10 h-[2px] bg-blue-400" />

          </div>


          {/* Heading */}

          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            className="
              text-4xl
              md:text-5xl
              font-bold
              !text-white
              mb-5
            "
          >
            Contact Us
          </h1>


          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="300"
            className="
              mx-auto
              text-blue-100
              text-sm
              leading-7
            "
          >
            Have a question or need assistance? We would love to hear
            from you. Get in touch with our team today.
          </p>

        </div>

      </section>



      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <section className="relative overflow-hidden py-16">


        {/* Background Decoration */}

        <div
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-blue-100/50
            blur-3xl
          "
        />


        <div
          className="
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-cyan-100/40
            blur-3xl
          "
        />


        <div className="relative z-10 max-w-7xl mx-auto px-6">


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="lg:col-span-1"
            >

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  bg-gradient-to-br
                  from-blue-950
                  via-blue-900
                  to-blue-800
                  text-white
                  rounded-3xl
                  p-8
                  h-full
                  shadow-xl

                  transition-all
                  duration-700

                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >


                {/* Decorative Circle */}

                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-56
                    w-56
                    rounded-full
                    bg-blue-500/20

                    transition-all
                    duration-1000

                    group-hover:scale-125
                  "
                />


                {/* Decorative Circle */}

                <div
                  className="
                    absolute
                    -bottom-20
                    -left-20
                    h-48
                    w-48
                    rounded-full
                    bg-cyan-400/10
                    blur-xl
                  "
                />


                <div className="relative z-10">


                  <h2 className="text-2xl font-bold mb-4">
                    Get In Touch
                  </h2>


                  <p className="text-blue-100 !mb-8 text-sm leading-7">
                    We are here to help and answer any questions you may have.
                    Feel free to reach out to us.
                  </p>



                  {/* ================= ADDRESS ================= */}

                  <div
                    className="
                      group/item
                      flex
                      gap-4
                      mb-7
                      p-3
                      rounded-xl

                      transition-all
                      duration-500

                      hover:bg-white/10
                      hover:translate-x-2
                    "
                  >

                    <div
                      className="
                        shrink-0
                        w-11
                        h-11
                        rounded-xl
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        text-xl

                        transition-all
                        duration-500

                        group-hover/item:bg-white/20
                        group-hover/item:scale-110
                      "
                    >
                      📍
                    </div>


                    <div>

                      <h3 className="font-semibold text-lg">
                        Address
                      </h3>

                      <p className="text-blue-100 mt-1 text-sm leading-6">
                        Cellexa Energy Pvt. Ltd.
                        <br />
                        Bangalore, Karnataka
                        <br />
                        India
                      </p>

                    </div>

                  </div>



                  {/* ================= PHONE ================= */}

                  <div
                    className="
                      group/item
                      flex
                      gap-4
                      mb-7
                      p-3
                      rounded-xl

                      transition-all
                      duration-500

                      hover:bg-white/10
                      hover:translate-x-2
                    "
                  >

                    <div
                      className="
                        shrink-0
                        w-11
                        h-11
                        rounded-xl
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        text-xl

                        transition-all
                        duration-500

                        group-hover/item:bg-white/20
                        group-hover/item:scale-110
                      "
                    >
                      📞
                    </div>


                    <div>

                      <h3 className="font-semibold text-lg">
                        Phone
                      </h3>

                      <p className="text-blue-100 text-sm mt-1">
                        +91 98765 43210
                      </p>

                    </div>

                  </div>



                  {/* ================= EMAIL ================= */}

                  <div
                    className="
                      group/item
                      flex
                      gap-4
                      mb-7
                      p-3
                      rounded-xl

                      transition-all
                      duration-500

                      hover:bg-white/10
                      hover:translate-x-2
                    "
                  >

                    <div
                      className="
                        shrink-0
                        w-11
                        h-11
                        rounded-xl
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        text-xl

                        transition-all
                        duration-500

                        group-hover/item:bg-white/20
                        group-hover/item:scale-110
                      "
                    >
                      ✉️
                    </div>


                    <div>

                      <h3 className="font-semibold text-lg">
                        Email
                      </h3>

                      <p className="text-blue-100 mt-1 text-sm">
                        info@cellexaenergy.com
                      </p>

                    </div>

                  </div>



                  {/* ================= WORKING HOURS ================= */}

                  <div
                    className="
                      group/item
                      flex
                      gap-4
                      p-3
                      rounded-xl

                      transition-all
                      duration-500

                      hover:bg-white/10
                      hover:translate-x-2
                    "
                  >

                    <div
                      className="
                        shrink-0
                        w-11
                        h-11
                        rounded-xl
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        text-xl

                        transition-all
                        duration-500

                        group-hover/item:bg-white/20
                        group-hover/item:scale-110
                      "
                    >
                      🕒
                    </div>


                    <div>

                      <h3 className="font-semibold text-lg">
                        Working Hours
                      </h3>

                      <p className="text-blue-100 mt-1 text-sm leading-6">
                        Monday - Friday
                        <br />
                        9:00 AM - 6:00 PM
                      </p>

                    </div>

                  </div>


                </div>

              </div>

            </div>



            {/* =================================================
                CONTACT FORM
            ================================================== */}

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="350"
              className="lg:col-span-2"
            >

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white
                  rounded-3xl
                  shadow-lg
                  p-8
                  lg:p-10
                  border
                  border-slate-100

                  transition-all
                  duration-700

                  hover:shadow-2xl
                "
              >


                {/* Top Animated Line */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-1

                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-blue-500

                    origin-left
                    scale-x-0
                    group-hover:scale-x-100

                    transition-transform
                    duration-1000
                  "
                />


                <h2 className="text-2xl font-bold !text-blue-800 !mb-2">
                  Send Us a Message
                </h2>


                <p className="text-gray-500 mb-10 text-sm">
                  Fill in the form below and our team will get back to you.
                </p>


                {/* Success */}

                {successMessage && (

                  <div
                    data-aos="fade-down"
                    className="
                      mb-6
                      p-4
                      rounded-xl
                      bg-green-50
                      border
                      border-green-200
                      text-green-700
                      text-sm
                    "
                  >
                    {successMessage}
                  </div>

                )}


                {/* Error */}

                {errorMessage && (

                  <div
                    data-aos="fade-down"
                    className="
                      mb-6
                      p-4
                      rounded-xl
                      bg-red-50
                      border
                      border-red-200
                      text-red-700
                      text-sm
                    "
                  >
                    {errorMessage}
                  </div>

                )}



                <form
                  className="mt-5"
                  onSubmit={handleSubmit}
                >


                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                    {/* NAME */}

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="
                          w-full
                          border
                          border-gray-200
                          rounded-xl
                          px-4
                          py-3
                          text-sm

                          bg-slate-50

                          focus:outline-none
                          focus:bg-white
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-100

                          transition-all
                          duration-300
                        "
                      />

                    </div>



                    {/* EMAIL */}

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="
                          w-full
                          border
                          border-gray-200
                          rounded-xl
                          px-4
                          py-3
                          text-sm

                          bg-slate-50

                          focus:outline-none
                          focus:bg-white
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-100

                          transition-all
                          duration-300
                        "
                      />

                    </div>



                    {/* PHONE */}

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="
                          w-full
                          border
                          border-gray-200
                          rounded-xl
                          px-4
                          py-3
                          text-sm

                          bg-slate-50

                          focus:outline-none
                          focus:bg-white
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-100

                          transition-all
                          duration-300
                        "
                      />

                    </div>



                    {/* SUBJECT */}

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>

                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Enter subject"
                        className="
                          w-full
                          border
                          border-gray-200
                          rounded-xl
                          px-4
                          py-3
                          text-sm

                          bg-slate-50

                          focus:outline-none
                          focus:bg-white
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-100

                          transition-all
                          duration-300
                        "
                      />

                    </div>

                  </div>



                  {/* MESSAGE */}

                  <div className="mt-6">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Write your message..."
                      className="
                        w-full
                        border
                        border-gray-200
                        rounded-xl
                        px-4
                        py-3
                        text-sm

                        bg-slate-50

                        focus:outline-none
                        focus:bg-white
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100

                        transition-all
                        duration-300

                        resize-none
                      "
                    />

                  </div>



                  {/* SUBMIT BUTTON */}

                  <div className="mt-6">

                    <button
                      type="submit"
                      className="
                        group/btn
                        relative
                        overflow-hidden

                        bg-blue-900
                        hover:bg-blue-800

                        text-white
                        font-semibold

                        px-8
                        py-3
                        rounded-xl

                        transition-all
                        duration-500

                        hover:-translate-y-1
                        hover:shadow-xl
                      "
                    >

                      <span
                        className="
                          relative
                          z-10
                          inline-flex
                          items-center
                          gap-2
                        "
                      >

                        Send Message

                        <span
                          className="
                            transition-transform
                            duration-500

                            group-hover/btn:translate-x-2
                          "
                        >
                          →
                        </span>

                      </span>


                      {/* Button Shine */}

                      <span
                        className="
                          absolute
                          inset-0
                          -translate-x-full

                          bg-white/10

                          transition-transform
                          duration-700

                          group-hover/btn:translate-x-full
                        "
                      />

                    </button>

                  </div>


                </form>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          MAP SECTION
      ====================================================== */}

      <section className="relative max-w-7xl mx-auto px-6 pb-16">

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="
            group
            bg-white
            rounded-3xl
            shadow-lg
            overflow-hidden
            border
            border-slate-100

            transition-all
            duration-700

            hover:shadow-2xl
          "
        >


          {/* Map Header */}

          <div className="p-6 lg:p-8">

            <div className="flex items-center gap-3">

              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  text-xl

                  transition-all
                  duration-500

                  group-hover:bg-blue-600
                  group-hover:scale-110
                "
              >
                📍
              </div>


              <div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Find Us
                </h2>

                <p className="text-gray-500 mt-1 text-sm">
                  Visit our office in Bangalore.
                </p>

              </div>

            </div>

          </div>



          {/* MAP */}

          <div
            className="
              h-80

              bg-gradient-to-br
              from-blue-50
              via-slate-100
              to-cyan-50

              flex
              items-center
              justify-center

              relative
              overflow-hidden
            "
          >


            {/* Background Decoration */}

            <div
              className="
                absolute
                -left-10
                top-10
                w-40
                h-40
                rounded-full
                bg-blue-200/30
                blur-2xl
              "
            />


            <div
              className="
                absolute
                -right-10
                bottom-5
                w-48
                h-48
                rounded-full
                bg-cyan-200/30
                blur-2xl
              "
            />


            <div className="relative z-10 text-center">


              <div
                className="
                  text-5xl
                  mb-4

                  transition-transform
                  duration-700

                  group-hover:scale-110
                  group-hover:-translate-y-2
                "
              >
                📍
              </div>


              <p className="font-semibold text-gray-700">
                Bangalore, Karnataka
              </p>


              <p className="text-sm text-gray-500 mt-1">
                Google Maps can be embedded here
              </p>

            </div>

          </div>

        </div>

      </section>


    </div>

  );
};

export default Contact;