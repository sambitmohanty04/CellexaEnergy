import React from "react";
import ContactusComponent from "../Components/ContactusComponent";

const ManpowerServices: React.FC = () => {

    interface RecruitmentStep {
        number: string;
        title: string;
        description: string;
    }
    interface industries {
        icon: string;
        title: string;
    }
 
    const data: RecruitmentStep[] = [
        {
            number: "01",
            title: "Understand",
            description:
                "We understand your workforce requirements, job roles, skills, experience and project needs.",
        },
        {
            number: "02",
            title: "Source",
            description:
                "We identify suitable candidates through our recruitment network and talent sourcing channels.",
        },
        {
            number: "03",
            title: "Screen",
            description:
                "Candidates are evaluated based on qualifications, experience, skills and suitability for the role.",
        },
        {
            number: "04",
            title: "Deploy",
            description:
                "Selected personnel are deployed according to the agreed requirements, timelines and project needs.",
        },
    ];

    const industries = [
        { icon: "⚡", title: "Energy" },
        { icon: "🏗️", title: "Construction" },
        { icon: "🏭", title: "Manufacturing" },
        { icon: "🚚", title: "Logistics" },
        { icon: "🔧", title: "Engineering" },
        { icon: "🏢", title: "Facilities" },
    ]
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* =====================================================
          HERO SECTION
      ====================================================== */}
            <section className="relative overflow-hidden py-14 md:py-20">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/manpower_services_bg.jpg')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Content */}
                <div
                    className="relative z-10 max-w-4xl mx-auto px-6 text-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-10 h-[2px] bg-blue-400" />

                        <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] !mb-0">
                            Manpower Services
                        </p>

                        <span className="w-10 h-[2px] bg-blue-400" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold !text-white mb-5">
                        Reliable Workforce Solutions
                    </h1>

                    <p className="text-blue-100 text-sm md:text-base leading-7 mx-auto">
                        Connecting businesses with skilled, reliable and qualified
                        professionals to support efficient operations and sustainable growth.
                    </p>
                </div>

            </section>


            {/* =====================================================
          ABOUT MANPOWER SERVICES
      ====================================================== */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <img
                            src="/images/manpower_services_1.jpg"
                            alt="Manpower Services"
                            className="
                w-full
                h-[420px]
                object-cover
                rounded-2xl
                shadow-lg
              "
                        />
                    </div>


                    {/* Content */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >

                        {/* Section Label */}
                        <div className="flex items-center gap-3 !mb-3">

                            <span
                                className="
                  block
                  w-10 h-[2px]
                  bg-blue-600
                  transition-all duration-500
                  hover:w-16
                "
                            />

                            <p
                                className="
                  text-blue-700
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  !mb-0
                "
                            >
                                About Our Services
                            </p>

                        </div>


                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 !mb-4">
                            The Right People for the Right Job
                        </h2>


                        <p className="text-gray-600 leading-7 text-sm mb-5">
                            We provide dependable manpower solutions designed to help
                            organizations meet their workforce requirements efficiently
                            and effectively.
                        </p>

                        <p className="text-gray-600 leading-7 text-sm mb-5">
                            Our recruitment and staffing approach focuses on identifying
                            qualified candidates based on skills, experience, job
                            requirements and organizational needs.
                        </p>

                        <p className="text-gray-600 leading-7 text-sm">
                            From skilled professionals and technical personnel to
                            semi-skilled and support staff, we help businesses build
                            capable teams while reducing the challenges associated with
                            workforce sourcing and deployment.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
          STAFFING SOLUTIONS
      ====================================================== */}
            <section className="bg-white py-16">

                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div
                        className="text-center mb-12"
                        data-aos="fade-up"
                    >

                        <div className="flex items-center justify-center gap-3 mb-3">

                            <span className="w-12 h-[2px] bg-blue-500" />

                            <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                                Our Solutions
                            </p>

                            <span className="w-12 h-[2px] bg-blue-500" />

                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                            Our Staffing Solutions
                        </h2>

                        <p className="text-gray-600 text-sm mx-auto mt-4 leading-7">
                            Flexible workforce solutions tailored to meet the changing
                            requirements of businesses across different industries.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">


                        {/* Skilled Workforce */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="
                            group relative
                            bg-gray-50
                            rounded-2xl
                            p-7
                            text-center
                            border border-gray-100
                            overflow-hidden
                            transition-all duration-700 ease-out
                            hover:-translate-y-3
                            hover:shadow-xl
                            hover:border-blue-200"
                        >

                            <div
                                className="
                                absolute top-0 left-0 right-0
                                h-1
                                bg-gradient-to-r from-blue-500 to-cyan-400
                                scale-x-0
                                group-hover:scale-x-100
                                origin-left
                                transition-transform duration-700
                                "
                            />

                            <div
                                className="
                                w-16 h-16
                                mx-auto mb-5
                                bg-blue-100
                                rounded-full
                                flex items-center justify-center
                                text-3xl
                                transition-all duration-700
                                group-hover:scale-110
                                group-hover:rotate-6
                                group-hover:bg-blue-200
                                "
                            >
                                👷
                            </div>

                            <h3 className="
                text-xl font-bold text-gray-800 mb-3
                transition-all duration-500
                group-hover:text-blue-600
              ">
                                Skilled Workforce
                            </h3>

                            <p className="
                text-gray-600 leading-6 text-sm
                group-hover:text-gray-700
              ">
                                Qualified and experienced professionals for technical,
                                operational and specialized roles.
                            </p>

                            <div className="
                mt-4 text-blue-600
                opacity-0 translate-y-2
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-500
              ">
                                →
                            </div>

                        </div>


                        {/* Semi Skilled */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="
                group relative
                bg-gray-50
                rounded-2xl
                p-7
                text-center
                border border-gray-100
                overflow-hidden
                transition-all duration-700 ease-out
                hover:-translate-y-3
                hover:shadow-xl
                hover:border-green-200
              "
                        >

                            <div
                                className="
                  absolute top-0 left-0 right-0
                  h-1
                  bg-gradient-to-r from-green-500 to-emerald-400
                  scale-x-0
                  group-hover:scale-x-100
                  origin-left
                  transition-transform duration-700
                "
                            />

                            <div
                                className="
                  w-16 h-16
                  mx-auto mb-5
                  bg-green-100
                  rounded-full
                  flex items-center justify-center
                  text-3xl
                  transition-all duration-700
                  group-hover:scale-110
                  group-hover:-rotate-6
                  group-hover:bg-green-200
                "
                            >
                                🛠️
                            </div>

                            <h3 className="
                text-xl font-bold text-gray-800 mb-3
                transition-all duration-500
                group-hover:text-green-600
              ">
                                Semi-Skilled Workforce
                            </h3>

                            <p className="
                text-gray-600 leading-6 text-sm
                group-hover:text-gray-700
              ">
                                Trained personnel capable of supporting operational,
                                maintenance and production activities.
                            </p>

                            <div className="
                mt-4 text-green-600
                opacity-0 translate-y-2
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-500
              ">
                                →
                            </div>

                        </div>


                        {/* Unskilled */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="
                group relative
                bg-gray-50
                rounded-2xl
                p-7
                text-center
                border border-gray-100
                overflow-hidden
                transition-all duration-700 ease-out
                hover:-translate-y-3
                hover:shadow-xl
                hover:border-orange-200
              "
                        >

                            <div
                                className="
                  absolute top-0 left-0 right-0
                  h-1
                  bg-gradient-to-r from-orange-500 to-yellow-400
                  scale-x-0
                  group-hover:scale-x-100
                  origin-left
                  transition-transform duration-700
                "
                            />

                            <div
                                className="
                  w-16 h-16
                  mx-auto mb-5
                  bg-orange-100
                  rounded-full
                  flex items-center justify-center
                  text-3xl
                  transition-all duration-700
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:bg-orange-200
                "
                            >
                                👥
                            </div>

                            <h3 className="
                text-xl font-bold text-gray-800 mb-3
                transition-all duration-500
                group-hover:text-orange-600
              ">
                                General Workforce
                            </h3>

                            <p className="
                text-gray-600 leading-6 text-sm
                group-hover:text-gray-700
              ">
                                Reliable manpower for general support, site operations,
                                logistics and day-to-day activities.
                            </p>

                            <div className="
                mt-4 text-orange-600
                opacity-0 translate-y-2
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-500
              ">
                                →
                            </div>

                        </div>


                        {/* Contract Staffing */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="
                group relative
                bg-gray-50
                rounded-2xl
                p-7
                text-center
                border border-gray-100
                overflow-hidden
                transition-all duration-700 ease-out
                hover:-translate-y-3
                hover:shadow-xl
                hover:border-purple-200
              "
                        >

                            <div
                                className="
                  absolute top-0 left-0 right-0
                  h-1
                  bg-gradient-to-r from-purple-500 to-pink-400
                  scale-x-0
                  group-hover:scale-x-100
                  origin-left
                  transition-transform duration-700
                "
                            />

                            <div
                                className="
                  w-16 h-16
                  mx-auto mb-5
                  bg-purple-100
                  rounded-full
                  flex items-center justify-center
                  text-3xl
                  transition-all duration-700
                  group-hover:scale-110
                  group-hover:-rotate-6
                  group-hover:bg-purple-200
                "
                            >
                                📋
                            </div>

                            <h3 className="
                text-xl font-bold text-gray-800 mb-3
                transition-all duration-500
                group-hover:text-purple-600
              ">
                                Contract Staffing
                            </h3>

                            <p className="
                text-gray-600 leading-6 text-sm
                group-hover:text-gray-700
              ">
                                Flexible workforce deployment for short-term, long-term
                                and project-based requirements.
                            </p>

                            <div className="
                mt-4 text-purple-600
                opacity-0 translate-y-2
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-500
              ">
                                →
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >

                        <div className="flex items-center gap-3 !mb-4">

                            <span className="w-10 h-[2px] bg-blue-600" />

                            <p className="
                text-blue-700
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                !mb-0
              ">
                                Why Choose Us
                            </p>

                        </div>

                        <h2 className="
              text-3xl md:text-4xl
              font-bold
              text-gray-800
              mb-5
            ">
                            Workforce You Can Depend On
                        </h2>

                        <p className="
              text-gray-600
              leading-7
              text-sm
              mb-6
            ">
                            We understand that people are at the heart of every
                            successful organization. Our manpower solutions are designed
                            to provide businesses with dependable personnel while
                            maintaining high standards of professionalism and service.
                        </p>


                        {/* Features */}
                        <div className="space-y-3">

                            {[
                                "Qualified and screened candidates",
                                "Flexible workforce deployment",
                                "Quick response to staffing requirements",
                                "Focus on reliability and performance",
                                "Professional workforce management",
                                "Long-term customer support",
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    data-aos="fade-right"
                                    data-aos-delay={index * 100}
                                    className="
                    group flex items-center gap-4
                    p-3 rounded-xl
                    border border-transparent
                    transition-all duration-500
                    hover:bg-blue-50
                    hover:border-blue-100
                    hover:translate-x-2
                  "
                                >

                                    <div className="
                    w-9 h-9 shrink-0
                    bg-blue-100
                    text-blue-600
                    rounded-full
                    flex items-center justify-center
                    font-bold
                    transition-all duration-500
                    group-hover:bg-blue-600
                    group-hover:text-white
                    group-hover:scale-110
                  ">
                                        ✓
                                    </div>

                                    <span className="
                    text-sm
                    font-semibold
                    text-gray-700
                    group-hover:text-blue-700
                  ">
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* Right Card */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="
              group relative
              bg-blue-900
              rounded-3xl
              p-8 md:p-10
              overflow-hidden
              shadow-xl
              transition-all duration-700
              hover:-translate-y-3
              hover:shadow-2xl
            "
                    >

                        {/* Decorative Circle */}
                        <div className="
              absolute -right-20 -top-20
              w-56 h-56
              rounded-full
              bg-blue-800
              transition-all duration-1000
              group-hover:scale-125
            " />

                        <div className="
              absolute -left-16 -bottom-16
              w-40 h-40
              rounded-full
              bg-blue-800/70
            " />


                        <div className="relative z-10">

                            <div className="
                w-16 h-16
                bg-blue-700
                rounded-2xl
                flex items-center justify-center
                text-3xl
                mb-6
                transition-all duration-700
                group-hover:scale-110
                group-hover:rotate-6
              ">
                                🤝
                            </div>

                            <h3 className="
                text-2xl
                font-bold
                !text-white
                mb-5
              ">
                                A Workforce Partner You Can Trust
                            </h3>

                            <p className="
                text-blue-100
                leading-7
                text-sm
                mb-5
              ">
                                Our objective is to simplify workforce management by
                                helping organizations find suitable personnel for their
                                operational requirements.
                            </p>

                            <p className="
                text-blue-100
                leading-7
                text-sm
              ">
                                We work closely with our clients to understand their
                                workforce needs and provide practical staffing solutions
                                that support productivity and business continuity.
                            </p>

                            <div className="
                mt-7
                !text-white
                text-lg
                opacity-0
                translate-y-3
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-700
              ">
                                →
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          RECRUITMENT PROCESS
      ====================================================== */}

            <section className="bg-white py-16">

                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Heading */}
                    <div
                        className="text-center mb-12"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >

                        <div className="flex items-center justify-center gap-3 mb-3">

                            <span className="w-12 h-[2px] bg-blue-500" />

                            <p
                                className="
            text-blue-700
            !mb-0
            text-xs
            font-bold
            uppercase
            tracking-[0.15em]
          "
                            >
                                Our Process
                            </p>

                            <span className="w-12 h-[2px] bg-blue-500" />

                        </div>

                        <h2
                            className="
          text-3xl
          md:text-4xl
          font-bold
          text-gray-800
          mt-2
        "
                        >
                            Our Recruitment Process
                        </h2>

                        <p
                            className="
                            text-gray-600
                            text-sm
                            leading-7
                            mx-auto
                            mt-4
                            "
                        >
                            Our structured recruitment process helps us identify,
                            evaluate and deploy the right workforce for your business needs.
                        </p>

                    </div>


                    {/* Process Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

                        {data.map((step, index) => (

                            <div
                                key={step.number}
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                                data-aos-duration="800"
                                className="
                                group
                                relative
                                bg-gray-50
                                rounded-2xl
                                p-7
                                border
                                border-gray-100
                                overflow-hidden

                                transition-all
                                duration-700
                                ease-out

                                hover:-translate-y-3
                                hover:shadow-xl
                                hover:border-blue-200
                            "
                            >

                                {/* Animated Top Border */}
                                <div
                                    className="
                                    absolute
                                    top-0
                                    left-0
                                    right-0
                                    h-1
                                    bg-gradient-to-r
                                    from-blue-500
                                    to-cyan-400

                                    scale-x-0
                                    group-hover:scale-x-100

                                    origin-left
                                    transition-transform
                                    duration-700
                                    ease-out
                                    "
                                />


                                {/* Number */}
                                <div
                                    className="
                                    text-4xl
                                    font-bold
                                    text-blue-800
                                    mb-4

                                    transition-all
                                    duration-500
                                    ease-out

                                    group-hover:text-blue-600
                                    group-hover:translate-x-2
                                    group-hover:scale-105
                                    "
                                >
                                    {step.number}
                                </div>


                                {/* Title */}
                                <h3
                                    className="
                                    text-xl
                                    font-bold
                                    text-gray-800
                                    mb-3

                                    transition-all
                                    duration-500

                                    group-hover:text-blue-600
                                    group-hover:translate-x-1
                                    "
                                >
                                    {step.title}
                                </h3>


                                {/* Description */}
                                <p
                                    className="
                                    text-gray-600
                                    text-sm
                                    leading-7

                                    transition-colors
                                    duration-500

                                    group-hover:text-gray-700
                                    "
                                >
                                    {step.description}
                                </p>


                                {/* Arrow */}
                                <div
                                    className="
                                    mt-5
                                    text-blue-600
                                    text-lg
                                    font-semibold

                                    opacity-0
                                    translate-y-2

                                    group-hover:opacity-100
                                    group-hover:translate-y-0

                                    transition-all
                                    duration-500
                                    "
                                >
                                    →
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
          INDUSTRIES WE SERVE
      ====================================================== */}
            <section className="bg-blue-50 py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <div
                        className="text-center mb-12"
                        data-aos="fade-up"
                    >

                        <div className="flex items-center justify-center gap-3 mb-3">

                            <span className="w-12 h-[2px] bg-blue-500" />

                            <p className="
                text-blue-700
                !mb-0
                text-xs
                font-bold
                uppercase
                tracking-wide
              ">
                                Industries
                            </p>

                            <span className="w-12 h-[2px] bg-blue-500" />

                        </div>

                        <h2 className="
              text-3xl md:text-4xl
              font-bold
              text-gray-800
              mt-2
            ">
                            Industries We Serve
                        </h2>

                        <p className="
              text-gray-600
              text-sm
              mx-auto
              mt-4
              leading-7
            ">
                            Our workforce solutions can support organizations across
                            multiple sectors and operational environments.
                        </p>

                    </div>


                    <div className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-5
          ">

                        {industries.map((industry, index) => (

                            <div
                                key={industry.title}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                className="
                  group
                  bg-white
                  rounded-2xl
                  p-6
                  text-center
                  border border-blue-100
                  shadow-sm
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:border-blue-300
                "
                            >

                                <div className="
                  text-3xl
                  mb-3
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:-rotate-6
                ">
                                    {industry.icon}
                                </div>

                                <h3 className="
                  text-sm
                  font-bold
                  text-gray-700
                  group-hover:text-blue-700
                  transition-colors duration-500
                ">
                                    {industry.title}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          COMMITMENT
      ====================================================== */}

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="
      relative
      overflow-hidden
      rounded-3xl
      bg-gradient-to-r
      from-blue-900
      via-blue-800
      to-cyan-700
      px-6
      py-10
      shadow-xl
      sm:px-8
      md:px-14
      md:py-14
    "
                >

                    {/* Decorative Circle - Top Right */}
                    <div
                        className="
        pointer-events-none
        absolute
        -right-20
        -top-20
        h-64
        w-64
        rounded-full
        bg-white/5
        transition-transform
        duration-1000
        hover:scale-110
      "
                    />

                    {/* Decorative Circle - Bottom Left */}
                    <div
                        className="
        pointer-events-none
        absolute
        -bottom-20
        -left-20
        h-56
        w-56
        rounded-full
        bg-white/5
      "
                    />

                    {/* Decorative Small Circle */}
                    <div
                        className="
        pointer-events-none
        absolute
        right-20
        bottom-10
        h-16
        w-16
        rounded-full
        bg-cyan-400/10
      "
                    />


                    {/* Content */}
                    <div className="relative z-10 max-w-3xl">

                        {/* Section Label */}
                        <div
                            className="
          mb-4
          flex
          items-center
          gap-3
        "
                        >

                            <span className="block h-[2px] w-10 bg-cyan-300" />

                            <p
                                className="
            !mb-0
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            text-cyan-200
          "
                            >
                                Our Commitment
                            </p>

                        </div>


                        {/* Heading */}
                        <h2
                            className="
          mb-5
          text-3xl
          font-bold
          !text-white
          leading-tight
          sm:text-4xl
          md:text-4xl
        "
                        >
                            Building Stronger Teams for a Better Future
                        </h2>


                        {/* Description */}
                        <p
                            className="
          max-w-2xl
          text-sm
          leading-7
          text-blue-100
          md:text-base
        "
                        >
                            We are committed to providing responsible, reliable and
                            professional manpower solutions that create value for
                            organizations, employees and communities.
                        </p>


                        {/* CTA */}
                        <div className="mt-7">

                            <button
                                type="button"
                                className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-white
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-blue-800
                                shadow-md

                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:bg-cyan-50
                                hover:shadow-xl
                            "
                            >
                                Talk to Our Team

                                <span
                                    className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                                >
                                    →
                                </span>
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
          CTA
      ====================================================== */}
            <ContactusComponent />

        </div>
    );
};

export default ManpowerServices;

