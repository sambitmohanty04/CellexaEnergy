import React from "react";

import {
  FaHardHat,
  FaShieldAlt,
  FaFireExtinguisher,
  FaFirstAid,
  FaVest,
  FaGlasses,
} from "react-icons/fa";

import ContactusComponent from "../Components/ContactusComponent";

const SafetyProducts: React.FC = () => {
  const safetyProducts = [
    {
      title: "Safety Helmets",
      icon: FaHardHat,
      description:
        "High-quality protective helmets designed to provide reliable head protection in demanding work environments.",
      features: [
        "Industrial Safety Helmets",
        "Adjustable Head Protection",
        "Impact Protection",
        "Comfortable Design",
      ],
    },

    {
      title: "Safety Gloves",
      icon: FaShieldAlt,
      description:
        "Protective gloves designed to safeguard hands against workplace hazards while maintaining flexibility and comfort.",
      features: [
        "Industrial Gloves",
        "Cut Resistant Gloves",
        "Grip Protection",
        "Durable Materials",
      ],
    },

    {
      title: "Fire Safety Equipment",
      icon: FaFireExtinguisher,
      description:
        "Reliable fire safety equipment designed to support emergency preparedness and workplace fire protection.",
      features: [
        "Fire Extinguishers",
        "Fire Safety Accessories",
        "Emergency Equipment",
        "Fire Protection Solutions",
      ],
    },

    {
      title: "First Aid Products",
      icon: FaFirstAid,
      description:
        "Essential first aid products designed to provide immediate assistance during workplace emergencies.",
      features: [
        "First Aid Kits",
        "Medical Supplies",
        "Emergency Care Products",
        "Workplace First Aid",
      ],
    },

    {
      title: "Safety Vests",
      icon: FaVest,
      description:
        "High-visibility safety vests designed to improve worker visibility in construction and industrial environments.",
      features: [
        "Reflective Vests",
        "High Visibility",
        "Industrial Safety Wear",
        "Comfortable Fit",
      ],
    },

    {
      title: "Safety Goggles",
      icon: FaGlasses,
      description:
        "Protective eyewear designed to help safeguard workers from dust, particles and other workplace hazards.",
      features: [
        "Protective Eyewear",
        "Dust Protection",
        "Impact Resistance",
        "Comfortable Design",
      ],
    },
  ];

  return (
    <>

      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <div className="min-h-screen bg-slate-50">


        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section className="relative overflow-hidden py-10">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/safety_bg.jpeg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-red-900/80" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-12 h-[2px] bg-blue-500" />

              <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                Safety Products
              </p>

              <span className="w-12 h-[2px] bg-blue-500" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold !text-white mb-6">
              Protecting People & Workplaces
            </h1>

            <p className="text-red-100 text-sm md:text-sm mx-auto leading-8">
              Reliable safety products designed to protect employees,
              improve workplace safety and create secure working
              environments.
            </p>

          </div>

        </section>


        {/* =====================================================
            SAFETY PRODUCTS SECTION
        ===================================================== */}

        <section className="py-20 bg-white">

          <div className="max-w-7xl mx-auto px-6">


            {/* Section Heading */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                  <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                    What We Provide
                  </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Safety Products
              </h2>

              <p className="text-slate-600 text-sm mx-auto mt-4 leading-7">
                Explore our range of reliable safety products designed
                to support workplace protection, employee safety and
                emergency preparedness.
              </p>

            </div>


            {/* =================================================
                PRODUCT CARDS
            ================================================= */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {safetyProducts.map((product) => {

                const Icon = product.icon;

                return (

                  <div
                    key={product.title}
                    className="
                      group
                      bg-white
                      rounded-2xl
                      overflow-hidden
                      border border-slate-200
                      shadow-lg
                      hover:shadow-2xl
                      hover:-translate-y-2
                      transition-all
                      duration-300
                    "
                  >


                    {/* ===============================
                        CARD HEADER
                    =============================== */}

                    <div
                      className="
                        relative
                        h-32
                        bg-gradient-to-r
                        from-red-600
                        to-red-950
                        overflow-hidden
                      "
                    >

                      {/* Background Glow */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.35),transparent_45%)]
                        "
                      />


                      {/* Icon Container */}
                      <div className="relative z-10 p-7">

                        <div
                          className="
                            w-14
                            h-14
                            rounded-xl
                            bg-white/15
                            border border-white/20
                            backdrop-blur-sm
                            flex
                            items-center
                            justify-center
                            group-hover:bg-white/25
                            group-hover:scale-110
                            transition-all
                            duration-300
                          "
                        >

                          <Icon className="text-red-300 text-2xl" />

                        </div>

                      </div>

                    </div>


                    {/* ===============================
                        CARD BODY
                    =============================== */}

                    <div className="p-7">


                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 !mb-3">
                        {product.title}
                      </h3>


                      {/* Description */}
                      <p className="text-slate-600 leading-7 text-sm">
                        {product.description}
                      </p>


                      {/* Features */}
                      <div className="space-y-3">

                        {product.features.map((feature) => (

                          <div
                            key={feature}
                            className="
                              flex
                              items-center
                              gap-3
                              text-slate-700
                              text-sm
                            "
                          >

                            {/* Check Icon */}
                            <span
                              className="
                                w-5
                                h-5
                                rounded-full
                                bg-red-200
                                text-red-600
                                flex
                                items-center
                                justify-center
                                text-xs
                                font-bold
                                flex-shrink-0
                              "
                            >
                              ✓
                            </span>


                            <span>
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
            SAFETY COMMITMENT SECTION
        ===================================================== */}

        <section className="bg-red-950 py-20">

          <div className="max-w-6xl mx-auto px-6">


            {/* Heading */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-[2px] bg-blue-500" />

                  <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                    Why Safety Matters
                  </p>

                <span className="w-12 h-[2px] bg-blue-500" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold !text-white">
                Protection You Can Rely On
              </h2>

              <p className="text-red-100 text-sm mx-auto mt-4 leading-7">
                We provide dependable safety products that help
                organizations create safer and more secure workplaces.
              </p>

            </div>


            {/* =================================================
                COMMITMENT CARDS
            ================================================= */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


              {/* ===============================
                  Protection
              =============================== */}

              <div
                className="
                  group
                  text-center
                  p-8
                  rounded-2xl
                  bg-white/10
                  border border-white/10
                  hover:bg-white/15
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    mx-auto
                    rounded-2xl
                    bg-gradient-to-br
                    from-red-400/30
                    to-red-600/10
                    border
                    border-red-400/30
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    mb-5
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                >

                  <FaShieldAlt className="text-red-300 text-xl" />

                </div>


                <h3 className="text-lg font-bold !text-white mb-3">
                  Protection
                </h3>


                <p className="text-red-100 text-sm leading-7">
                  Products designed to support safer workplaces and
                  protect employees from common workplace hazards.
                </p>

              </div>


              {/* ===============================
                  Quality
              =============================== */}

              <div
                className="
                  group
                  text-center
                  p-8
                  rounded-2xl
                  bg-white/10
                  border border-white/10
                  hover:bg-white/15
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    mx-auto
                    rounded-2xl
                    bg-gradient-to-br
                    from-orange-400/30
                    to-orange-600/10
                    border
                    border-orange-400/30
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    mb-5
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                >

                  <FaHardHat className="text-orange-300 text-xl" />

                </div>


                <h3 className="text-lg font-bold !text-white mb-3">
                  Quality
                </h3>


                <p className="text-red-100 text-sm leading-7">
                  Carefully selected safety products focused on
                  durability, comfort and dependable workplace
                  protection.
                </p>

              </div>


              {/* ===============================
                  Safety First
              =============================== */}

              <div
                className="
                  group
                  text-center
                  p-8
                  rounded-2xl
                  bg-white/10
                  border border-white/10
                  hover:bg-white/15
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    mx-auto
                    rounded-2xl
                    bg-gradient-to-br
                    from-yellow-400/30
                    to-yellow-600/10
                    border
                    border-yellow-400/30
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    mb-5
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                >

                  <FaFirstAid className="text-yellow-300 text-xl" />

                </div>


                <h3 className="text-lg font-bold !text-white mb-3">
                  Safety First
                </h3>


                <p className="text-red-100 text-sm leading-7">
                  Supporting organizations in building safer and more
                  responsible working environments.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT SECTION
        ===================================================== */}

        <ContactusComponent />

      </div>

    </>
  );
};

export default SafetyProducts;