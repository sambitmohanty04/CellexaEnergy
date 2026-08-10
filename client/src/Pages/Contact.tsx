import React, {useState} from 'react'

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
  //   <>
      

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  {/* const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await API_URL.post("/contactus", formData);

      if (response.data.success) {
        setSuccessMessage("Thank you! Your message has been submitted.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMessage(response.data.message || "Something went wrong.");
      }
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message ||
          "Unable to submit your message. Please try again."
      );
    }
  }; */}

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>

          <p className="text-blue-100 text-lg mx-auto mb-8">
            Have a question or need assistance? We would love to hear from you.
            Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-14 mt-5">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Information */}
          <div className="lg:col-span-1">

            <div className="bg-blue-900 text-white rounded-2xl p-8 h-full">

              <h2 className="text-2xl font-bold mb-6">
                Get In Touch
              </h2>

              <p className="text-blue-100 mb-8">
                We are here to help and answer any questions you may have.
                Feel free to reach out to us.
              </p>

              {/* Address */}
              <div className="flex gap-4 mb-7">
                <div className="text-2xl">📍</div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Address
                  </h3>

                  <p className="text-blue-100 mt-1">
                    Cellexa Energy Pvt. Ltd.
                    <br />
                    Bangalore, Karnataka
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-7">
                <div className="text-2xl">📞</div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Phone
                  </h3>

                  <p className="text-blue-100 mt-1">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 mb-7">
                <div className="text-2xl">✉️</div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>

                  <p className="text-blue-100 mt-1">
                    info@cellexaenergy.com
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="text-2xl">🕒</div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Working Hours
                  </h3>

                  <p className="text-blue-100 mt-1">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-2xl shadow-md p-8">

              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Send Us a Message
              </h2>

              <p className="text-gray-500 mb-10">
                Fill in the form below and our team will get back to you.
              </p>

              {/* Success */}
              {/* {successMessage && (
                <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-700">
                  {successMessage}
                </div>
              )} */}

              {/* Error */}
              {/* {errorMessage && (
                <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700">
                  {errorMessage}
                </div>
              )} */}

              <form className='mt-5'>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      // value={formData.name}
                      // onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      // value={formData.email}
                      // onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      // value={formData.phone}
                      // onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>

                    <input
                      type="text"
                      name="subject"
                      // value={formData.subject}
                      // onChange={handleChange}
                      required
                      placeholder="Enter subject"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                </div>

                {/* Message */}
                <div className="mt-6">

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    // value={formData.message}
                    // onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />

                </div>

                {/* Submit */}
                <div className="mt-6">

                  <button
                    type="submit"
                    className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Find Us
            </h2>

            <p className="text-gray-500 mt-1">
              Visit our office in Bangalore.
            </p>
          </div>

          <div className="h-80 bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-5xl mb-3">📍</div>
              <p className="font-medium">
                Bangalore, Karnataka
              </p>
              <p className="text-sm">
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
