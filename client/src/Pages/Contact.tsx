import React, { useEffect, useState } from "react";
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

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    try {
      console.log("Sending data:", formData);

      const response = await API_URL.post(
        "/api/contact",
        formData
      );

      console.log("API Response:", response.data);

      if (response.data.success) {
        const message =
          "Thank you! Your message has been submitted.";

        setSuccessMessage(message);
        toast.success(message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const message =
          response.data.message ||
          "Something went wrong.";

        setErrorMessage(message);

        toast.error(message);
      }
    } catch (error: any) {
      console.error("Contact form error:", error);

      const message =
        error?.response?.data?.message ||
        "Unable to submit your message. Please try again.";

      setErrorMessage(message);
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-blue-950 py-10">
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

          {/* Section Label */}
          <div
            data-aos="fade-down"
            data-aos-duration="900"
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-10 bg-blue-400" />

            <p className="!mb-0 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Get In Touch
            </p>

            <span className="h-[2px] w-10 bg-blue-400" />
          </div>

          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            className="
              mb-5
              text-4xl
              font-bold
              !text-white
              md:text-5xl
            "
          >
            Contact Us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="300"
            className="
              mx-auto
              text-sm
              leading-7
              text-blue-100
            "
          >
            Have a question or need assistance? We would love to hear
            from you. Get in touch with our team today.
          </p>

        </div>
      </section>

      <section className="relative overflow-hidden py-16">
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

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

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
                  h-full
                  overflow-hidden
                  rounded-3xl
                  bg-gradient-to-br
                  from-blue-950
                  via-blue-900
                  to-blue-800
                  p-8
                  text-white
                  shadow-xl
                  transition-all
                  duration-700
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

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

                  <h2 className="mb-4 text-2xl font-bold">
                    Get In Touch
                  </h2>

                  <p className="!mb-4 text-sm leading-7 text-blue-100">
                    We are here to help and answer any questions you may have.
                    Feel free to reach out to us.
                  </p>

                  <div
                    className="
                      group/item
                      mb-3
                      flex
                      gap-4
                      rounded-xl
                      p-3
                      transition-all
                      duration-500
                      hover:translate-x-2
                      hover:bg-white/10
                    "
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/10
                        text-xl
                        transition-all
                        duration-500
                        group-hover/item:scale-110
                        group-hover/item:bg-white/20
                      "
                    >
                      📍
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        Address
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-blue-100">
                        Cellexa Energy Pvt. Ltd.
                        <br />
                        No-618/2148, Dibya Bihar, Lane-5, Samantarapur, Khordha, Bhubaneswar, Odisha, 751002
                        <br />
                        India
                      </p>
                    </div>

                  </div>
                  <div
                    className="
                      group/item
                      mb-3
                      flex
                      gap-4
                      rounded-xl
                      p-3
                      transition-all
                      duration-500
                      hover:translate-x-2
                      hover:bg-white/10
                    "
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/10
                        text-xl
                        transition-all
                        duration-500
                        group-hover/item:scale-110
                        group-hover/item:bg-white/20
                      "
                    >
                      📞
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        Phone
                      </h3>

                      <p className="mt-1 text-sm text-blue-100">
                        +91 9337372340
                      </p>
                    </div>

                  </div>
                  <div
                    className="
                      group/item
                      mb-3
                      flex
                      gap-4
                      rounded-xl
                      p-3
                      transition-all
                      duration-500
                      hover:translate-x-2
                      hover:bg-white/10
                    "
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/10
                        text-xl
                        transition-all
                        duration-500
                        group-hover/item:scale-110
                        group-hover/item:bg-white/20
                      "
                    >
                      ✉️
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        Email
                      </h3>
                      <p className="mt-1 text-sm text-blue-100">
                        info@cellexa.co.in
                      </p>
                      <p className="mt-1 text-sm text-blue-100">
                        hr@cellexa.co.in
                      </p>
                    </div>

                  </div>
                  <div
                    className="
                      group/item
                      flex
                      gap-4
                      rounded-xl
                      p-3
                      transition-all
                      duration-500
                      hover:translate-x-2
                      hover:bg-white/10
                    "
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/10
                        text-xl
                        transition-all
                        duration-500
                        group-hover/item:scale-110
                        group-hover/item:bg-white/20
                      "
                    >
                      🕒
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        Working Hours
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-blue-100">
                        Monday - Friday
                        <br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>

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
                  rounded-3xl
                  border
                  border-slate-100
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-700
                  hover:shadow-2xl
                  lg:p-10
                "
              >
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-1
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-blue-500
                    transition-transform
                    duration-1000
                    group-hover:scale-x-100
                  "
                />

                <h2 className="!mb-2 text-2xl font-bold !text-blue-800">
                  Send Us a Message
                </h2>

                <p className="mb-10 text-sm text-gray-500">
                  Fill in the form below and our team will get back to you.
                </p>

                {successMessage && (
                  <div
                    data-aos="fade-down"
                    className="
                      mb-3
                      mt-3
                      rounded-xl
                      border
                      border-green-200
                      bg-green-50
                      p-2
                      text-sm
                      text-green-700
                    "
                  >
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div
                    data-aos="fade-down"
                    className="
                      mb-3
                      mt-3
                      rounded-xl
                      border
                      border-red-200
                      bg-red-50
                      p-2
                      text-sm
                      text-red-700
                    "
                  >
                    {errorMessage}
                  </div>
                )}
                <form
                  className="mt-5"
                  onSubmit={handleSubmit}
                >

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
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
                          rounded-xl
                          border
                          border-gray-200
                          bg-slate-50
                          px-4
                          py-3
                          text-sm
                          transition-all
                          duration-300
                          focus:border-blue-500
                          focus:bg-white
                          focus:outline-none
                          focus:ring-4
                          focus:ring-blue-100
                        "
                      />

                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
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
                          rounded-xl
                          border
                          border-gray-200
                          bg-slate-50
                          px-4
                          py-3
                          text-sm
                          transition-all
                          duration-300
                          focus:border-blue-500
                          focus:bg-white
                          focus:outline-none
                          focus:ring-4
                          focus:ring-blue-100
                        "
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
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
                          rounded-xl
                          border
                          border-gray-200
                          bg-slate-50
                          px-4
                          py-3
                          text-sm
                          transition-all
                          duration-300
                          focus:border-blue-500
                          focus:bg-white
                          focus:outline-none
                          focus:ring-4
                          focus:ring-blue-100
                        "
                      />

                    </div>
                    <div>

                      <label className="mb-2 block text-sm font-medium text-gray-700">
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
                          rounded-xl
                          border
                          border-gray-200
                          bg-slate-50
                          px-4
                          py-3
                          text-sm
                          transition-all
                          duration-300
                          focus:border-blue-500
                          focus:bg-white
                          focus:outline-none
                          focus:ring-4
                          focus:ring-blue-100
                        "
                      />

                    </div>

                  </div>
                  <div className="mt-6">

                    <label className="mb-2 block text-sm font-medium text-gray-700">
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
                        resize-none
                        rounded-xl
                        border
                        border-gray-200
                        bg-slate-50
                        px-4
                        py-3
                        text-sm
                        transition-all
                        duration-300
                        focus:border-blue-500
                        focus:bg-white
                        focus:outline-none
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />

                  </div>
                  <div className="mt-6">

                    <button
                      type="submit"
                      className="
                        group/btn
                        relative
                        overflow-hidden
                        rounded-xl
                        bg-blue-900
                        px-8
                        py-3
                        font-semibold
                        text-white
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:bg-blue-800
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
      <section className="relative mx-auto max-w-7xl px-6 pb-16">

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-slate-100
            bg-white
            shadow-lg
            transition-all
            duration-700
            hover:shadow-2xl
          "
        >
          <div className="p-6 lg:p-8">

            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-100
                  text-xl
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-blue-600
                "
              >
                📍
              </div>

              <div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Find Us
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Visit our office in Bhubaneswar.
                </p>

              </div>
            </div>
          </div>

          <div
            className="
              relative
              flex
              h-80
              items-center
              justify-center
              overflow-hidden
              bg-gradient-to-br
              from-blue-50
              via-slate-100
              to-cyan-50
            "
          >
            <div
              className="
                absolute
                -left-10
                top-10
                h-40
                w-40
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
                h-48
                w-48
                rounded-full
                bg-cyan-200/30
                blur-2xl
              "
            />
            <div className="relative z-10 text-center">
              <div
                className="
                  mb-4
                  text-5xl
                  transition-transform
                  duration-700
                  group-hover:-translate-y-2
                  group-hover:scale-110
                "
              >
                📍
              </div>
              <p className="font-semibold text-gray-700">
                Bhubaneswar, Odisha
              </p>
              <p className="mt-1 text-sm text-gray-500">
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