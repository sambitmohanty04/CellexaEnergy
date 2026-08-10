import React from "react";
import ContactusComponent from "../Components/ContactusComponent";
const Services: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We build modern, responsive, and scalable web applications tailored to your business requirements.",
      icon: "🌐",
    },
    {
      title: "Software Development",
      description:
        "Our team develops reliable software solutions that improve business processes and productivity.",
      icon: "💻",
    },
    {
      title: "Cloud Solutions",
      description:
        "We provide secure and scalable cloud solutions to help businesses modernize their infrastructure.",
      icon: "☁️",
    },
    {
      title: "Digital Transformation",
      description:
        "Transform your business with technology-driven solutions that improve efficiency and customer experience.",
      icon: "🚀",
    },
    {
      title: "IT Consulting",
      description:
        "Get expert technology guidance to choose the right solutions and build an effective IT strategy.",
      icon: "📊",
    },
    {
      title: "Application Support",
      description:
        "We provide ongoing application maintenance and support to keep your systems reliable and efficient.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold !text-white leading-tight mb-6">
            Our Services
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-full mx-auto">
            Delivering innovative technology solutions that help businesses
            grow, transform, and achieve their goals.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 !mb-3">
              What We Offer
            </h2>

            <p className="text-gray-600 mx-auto">
              We provide end-to-end technology services designed to meet the
              evolving needs of modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-3xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition">
                  Learn More →
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 !mb-5">
                Why Choose Our Services?
              </h2>

              <p className="text-gray-600 leading-relaxed !mb-5">
                We combine technology, experience, and business understanding
                to deliver solutions that create measurable value for our
                clients.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Experienced Team
                    </h3>
                    <p className="text-gray-600">
                      Skilled professionals with strong technical expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-blue-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Customer Focused
                    </h3>
                    <p className="text-gray-600">
                      Solutions designed around your business needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-blue-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Reliable Support
                    </h3>
                    <p className="text-gray-600">
                      Continuous support to ensure long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl">
                <ContactusComponent />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;