import React from "react";
import ContactusComponent from "../Components/ContactusComponent";
import { BsHddNetworkFill, BsGlobe2, BsHeadset, BsWifi, BsDiagram2Fill, BsLightningChargeFill, BsShieldLockFill, BsGraphUpArrow } from "react-icons/bs";
import { FaRegCheckCircle, FaAward, FaShieldAlt, FaChartLine, FaHeadset } from "react-icons/fa";
import { TbBuildingBroadcastTowerFilled } from "react-icons/tb";

const TelecomServices: React.FC = () => {
  const telecomSolutions = [
    {
      title: "Network Infrastructure",
      icon: BsHddNetworkFill,
      description:
        "Reliable and scalable network infrastructure solutions designed to support modern communication and connectivity requirements.",
      features: [
        "Network Planning",
        "Structured Cabling",
        "Network Installation",
        "Infrastructure Management",
      ],
    },
    {
      title: "Fiber Optic Solutions",
      icon: BsLightningChargeFill,
      description:
        "High-speed fiber optic connectivity solutions delivering reliable, secure and efficient data communication.",
      features: [
        "Fiber Installation",
        "Fiber Splicing",
        "OTDR Testing",
        "Fiber Network Maintenance",
      ],
    },
    {
      title: "Wireless Solutions",
      icon: BsWifi,
      description:
        "Flexible wireless communication solutions that provide dependable connectivity across different environments.",
      features: [
        "Wireless Network Design",
        "Wi-Fi Deployment",
        "Point-to-Point Connectivity",
        "Wireless Maintenance",
      ],
    },
  ];

  const services = [
    {
      title: "Telecom Infrastructure",
      icon: BsHddNetworkFill,
      description:
        "Design, deployment and maintenance of robust telecommunications infrastructure.",
      features: [
        "Infrastructure Planning",
        "Network Deployment",
        "Equipment Installation",
        "Infrastructure Maintenance",
      ],
    },
    {
      title: "Connectivity Solutions",
      icon: BsGlobe2,
      description:
        "Reliable connectivity solutions designed to keep people, businesses and systems connected.",
      features: [
        "Internet Connectivity",
        "Fiber Connectivity",
        "Wireless Connectivity",
        "Network Integration",
      ],
    },
    {
      title: "Network Support",
      icon: BsHeadset,
      description:
        "Professional network monitoring, troubleshooting and technical support services.",
      features: [
        "Network Monitoring",
        "Troubleshooting",
        "Technical Support",
        "Network Maintenance",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-50">

        {/* =====================================================
                    HERO SECTION
                ===================================================== */}
        <section className="relative overflow-hidden py-10">

          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/telecom_bg.png')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900/80" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

            <p className="text-blue-200 uppercase tracking-widest font-bold mb-4">
              Telecom Services
            </p>

            <h1 className="text-4xl md:text-6xl font-bold !text-white mb-6">
              Connecting People, Businesses & Technology
            </h1>

            <p className="text-blue-100 text-sm md:text-sm mx-auto leading-8">
              Reliable telecommunications and connectivity solutions
              designed to build faster, smarter and more connected
              environments.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <button className="px-7 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition">
                Explore Services
              </button>

              <button className="px-7 py-3 rounded-lg border border-white/40 hover:bg-white/10 !text-white font-semibold transition">
                Contact Us
              </button>

            </div>

          </div>
        </section>


        {/* =====================================================
                    INTRODUCTION SECTION
                ===================================================== */}
        <section className="py-20 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <div className="relative">

                <img
                  src="/images/telecom_1.jpg"
                  alt="Telecom Services"
                  className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
                />

                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 bg-blue-700 rounded-2xl p-4 shadow-xl">

                  <div className="flex items-center gap-3">

                    <TbBuildingBroadcastTowerFilled className=" text-white text-3xl" />

                    <div>
                      <p className="text-white text-sm font-bold">
                        Reliable
                      </p>

                      <p className="text-white font-bold text-sm">
                        Connectivity
                      </p>
                    </div>

                  </div>

                </div>

              </div>


              {/* Content */}
              <div>

                <p className="text-blue-700 text-sm font-bold uppercase tracking-widest !mb-3">
                  Telecom Solutions
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Building Reliable Communication Networks
                </h2>

                <p className="text-slate-600 leading-8 mb-5 text-sm">
                  Modern businesses depend on reliable communication
                  networks. Our telecom solutions help organizations
                  establish secure, scalable and high-performance
                  connectivity infrastructure.
                </p>

                <p className="text-slate-600 leading-8 text-sm">
                  From network infrastructure and fiber optic
                  connectivity to wireless solutions and ongoing
                  technical support, we provide solutions designed
                  around your connectivity requirements.
                </p>


                {/* Highlights */}
                <div className="grid grid-cols-2 gap-5 mt-8">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <BsDiagram2Fill className="text-red-600" />
                    </div>

                    <span className="font-semibold text-slate-700">
                      Network Infrastructure
                    </span>

                  </div>


                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <BsLightningChargeFill className="text-blue-600" />
                    </div>

                    <span className="font-semibold text-slate-700">
                      High-Speed Connectivity
                    </span>

                  </div>


                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <BsShieldLockFill className="text-purple-600" />
                    </div>

                    <span className="font-semibold text-slate-700">
                      Secure Networks
                    </span>

                  </div>


                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                      <BsGraphUpArrow className="text-yellow-600" />
                    </div>

                    <span className="font-semibold text-slate-700">
                      Scalable Solutions
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
                    TELECOM SOLUTIONS
                ===================================================== */}
        <section className="py-20 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                  <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                    Our Telecom Solutions
                  </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Complete Connectivity Solutions
              </h2>

              <p className="text-slate-600 mx-auto leading-7">
                Comprehensive telecom solutions designed to support
                reliable communication, connectivity and network
                infrastructure.
              </p>

            </div>


            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {telecomSolutions.map((solution) => {

                const Icon = solution.icon;

                return (
                  <div
                    key={solution.title}
                    className="
                    group bg-white rounded-2xl overflow-hidden
                    shadow-lg hover:shadow-2xl
                    border border-slate-100
                    transition-all duration-300
                    hover:-translate-y-2
                  "
                  >

                    {/* Card Header */}
                    <div className="relative h-32 bg-gradient-to-r from-blue-700 to-blue-950">

                      {/* Gradient Decoration */}
                      <div
                        className="
                        absolute inset-0
                        bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.35),transparent_45%)]
                      "
                      />

                      <div className="relative z-10 p-7">
                        {/* Icon */}
                        <div
                          className="
                          w-14 h-14 rounded-xl
                          bg-white/15
                          backdrop-blur-sm
                          border border-white/10
                          flex items-center justify-center
                          group-hover:bg-white/25
                          group-hover:scale-110
                          transition-all duration-300
                        "
                        >
                          <Icon className="text-green-300 text-2xl" />
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-7">

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {solution.title}
                      </h3>


                      {/* Description */}
                      <p className="text-slate-600 leading-7 text-sm !mb-4">
                        {solution.description}
                      </p>


                      {/* Features */}
                      <div className="space-y-3">

                        {solution.features.map((feature) => (

                          <div
                            key={feature}
                            className="flex items-center gap-3"
                          >

                            <FaRegCheckCircle
                              className="text-green-500 shrink-0"
                            />

                            <span className="text-slate-700 text-sm">
                              {feature}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>
          </div>

        </section>


        {/* =====================================================
                    KEY SERVICES
                ===================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-10">
              <p className="text-blue-600 text-sm font-bold uppercase tracking-widest !mb-3">
                
              </p>
              <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="w-12 h-[2px] bg-blue-500" />

                  <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                    What We Provide
                  </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Telecom Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group p-6 rounded-2xl bg-white border border-slate-200
                       hover:-translate-y-2 hover:shadow-xl
                       transition-all duration-300"
                  >

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl
                         bg-blue-500/10
                         border border-blue-500/20
                         flex items-center justify-center
                         group-hover:bg-blue-500/20
                         group-hover:scale-110
                         transition-all duration-300 text-blue-600 text-2xl"
                    >
                      <Icon />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mt-5">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 !mt-3 text-sm leading-7">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-slate-600"
                        >
                          <span className="text-blue-600 font-bold">
                            ✓
                          </span>

                          {feature}
                        </li>
                      ))}
                    </ul>

                  </div>
                );
              })}

            </div>
          </div>
        </section>


        {/* =====================================================
                    WHY CHOOSE US
                ===================================================== */}
        <section className="py-20 bg-blue-950">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="w-12 h-[2px] bg-blue-500" />

                  <p className="text-blue-300 !mb-0 text-xs font-bold uppercase tracking-wide">
                    Why Choose Us
                  </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold !text-white">
                Built for Reliable Connectivity
              </h2>

              <p className="text-blue-100 text-sm mx-auto mt-4 leading-7">
                We combine technical expertise, reliable infrastructure
                and customer-focused service to deliver dependable
                telecom solutions.
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* 01 */}
              <div
                className="group flex gap-5 p-6 rounded-2xl
              bg-white/10 border border-white/10
              hover:bg-white/15 hover:-translate-y-2 hover:shadow-xl
              transition-all duration-300 ease-in-out"
              >

                {/* Icon */}
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl
                  bg-gradient-to-br from-red-400/30 to-red-600/10
                  border border-red-400/30
                  backdrop-blur-sm
                  flex items-center justify-center
                  shadow-lg shadow-red-500/20
                  group-hover:scale-110
                  transition-all duration-300"
                >
                  <FaAward className="text-red-300 text-xl" />
                </div>

                {/* Content */}
                <div className="text-left">

                  <h3 className="text-lg font-bold !text-white mb-2">
                    Expertise
                  </h3>

                  <p className="text-blue-100 text-sm leading-6">
                    Experienced professionals delivering dependable
                    telecom infrastructure.
                  </p>

                </div>

              </div>


              {/* 02 */}
              <div
                className="group flex items-center gap-5 p-6 rounded-2xl
              bg-white/10 border border-white/10
              hover:bg-white/15 hover:-translate-y-2 hover:shadow-xl
              transition-all duration-300 ease-in-out"
              >

                {/* Icon */}
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl
                  bg-gradient-to-br from-purple-400/30 to-purple-600/10
                  border border-purple-400/30
                  backdrop-blur-sm
                  flex items-center justify-center
                  shadow-lg shadow-purple-500/20
                  group-hover:scale-110
                  transition-all duration-300"
                >
                  <FaShieldAlt className="text-purple-300 text-xl" />
                </div>

                {/* Content */}
                <div className="text-left">

                  <h3 className="text-lg font-bold !text-white mb-2">
                    Reliability
                  </h3>

                  <p className="text-blue-100 text-sm leading-6">
                    Solutions designed for stable and consistent
                    connectivity.
                  </p>

                </div>

              </div>


              {/* 03 */}
              <div
                className="group flex items-center gap-5 p-6 rounded-2xl
              bg-white/10 border border-white/10
              hover:bg-white/15 hover:-translate-y-2 hover:shadow-xl
              transition-all duration-300 ease-in-out"
              >

                {/* Icon */}
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl
                  bg-gradient-to-br from-green-400/30 to-green-600/10
                  border border-green-400/30
                  backdrop-blur-sm
                  flex items-center justify-center
                  shadow-lg shadow-green-500/20
                  group-hover:scale-110
                  transition-all duration-300"
                >
                  <FaChartLine className="text-green-300 text-xl" />
                </div>

                {/* Content */}
                <div className="text-left">

                  <h3 className="text-lg font-bold !text-white mb-2">
                    Scalability
                  </h3>

                  <p className="text-blue-100 text-sm leading-6">
                    Flexible infrastructure that can grow with your
                    organization.
                  </p>

                </div>

              </div>


              {/* 04 */}
              <div
                className="group flex items-center gap-5 p-6 rounded-2xl
              bg-white/10 border border-white/10
              hover:bg-white/15 hover:-translate-y-2 hover:shadow-xl
              transition-all duration-300 ease-in-out"
              >

                {/* Icon */}
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl
                  bg-gradient-to-br from-blue-400/30 to-blue-600/10
                  border border-blue-400/30
                  backdrop-blur-sm
                  flex items-center justify-center
                  shadow-lg shadow-blue-500/20
                  group-hover:scale-110
                  transition-all duration-300"
                >
                  <FaHeadset className="text-blue-300 text-xl" />
                </div>

                {/* Content */}
                <div className="text-left">

                  <h3 className="text-lg font-bold !text-white mb-2">
                    Support
                  </h3>

                  <p className="text-blue-100 text-sm leading-6">
                    Ongoing technical assistance and network support.
                  </p>

                </div>

              </div>

            </div>
          </div>

        </section>


        {/* =====================================================
                    PROCESS
                ===================================================== */}
        <section className="py-20 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="w-12 h-[2px] bg-blue-500" />

                  <p className="text-blue-600 !mb-0 text-xs font-bold uppercase tracking-wide">
                    Our Approach
                  </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                How We Deliver
              </h2>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

              {/* Step 1 */}
              <div className="text-center">

                <div className="w-16 h-16 mx-auto rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mb-5">
                  01
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Requirement
                </h3>

                <p className="text-slate-600 leading-7 text-sm">
                  Understand your network and connectivity requirements.
                </p>

              </div>


              {/* Step 2 */}
              <div className="text-center">

                <div className="w-16 h-16 mx-auto rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mb-5">
                  02
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Planning
                </h3>

                <p className="text-slate-600 leading-7 text-sm">
                  Design an efficient and scalable telecom solution.
                </p>

              </div>


              {/* Step 3 */}
              <div className="text-center">

                <div className="w-16 h-16 mx-auto rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mb-5">
                  03
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Deployment
                </h3>

                <p className="text-slate-600 leading-7 text-sm">
                  Deploy and configure the required network
                  infrastructure.
                </p>

              </div>


              {/* Step 4 */}
              <div className="text-center">

                <div className="w-16 h-16 mx-auto rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mb-5">
                  04
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Support
                </h3>

                <p className="text-slate-600 leading-7 text-sm">
                  Monitor, maintain and support your telecom
                  infrastructure.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Contact */}
        <ContactusComponent />

      </div>
    </>
  );
};

export default TelecomServices;