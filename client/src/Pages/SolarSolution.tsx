import React from "react";
import ContactusComponent from "../Components/ContactusComponent";
import { BsFillSunFill, BsGraphUpArrow, BsCashStack, BsLeafFill } from "react-icons/bs";
import { MdSolarPower } from "react-icons/md";
import { FaBoltLightning, FaSun } from "react-icons/fa6";
import { FaRegCheckCircle, FaHome, FaIndustry } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";

const SolarSolution: React.FC = () => {
    const solutions = [
        {
            title: "Residential Solar Solutions",
            icon: FaHome,
            description:
                "Efficient and reliable solar power systems designed to meet the energy needs of homes while reducing electricity costs.",
            features: [
                "Rooftop Solar Systems",
                "Energy Cost Reduction",
                "Grid Connected Solutions",
                "Low Maintenance",
            ],
        },
        {
            title: "Commercial Solar Solutions",
            icon: PiBuildingOfficeFill,
            description:
                "Customized solar solutions for businesses that help reduce operational costs and support long-term energy sustainability.",
            features: [
                "Commercial Rooftop Solar",
                "Customized System Design",
                "Energy Monitoring",
                "Long-Term Savings",
            ],
        },
        {
            title: "Industrial Solar Solutions",
            icon: FaIndustry,
            description:
                "High-performance solar power systems designed for industries with large-scale energy requirements.",
            features: [
                "Large Scale Solar Systems",
                "High Energy Efficiency",
                "Power Optimization",
                "Scalable Solutions",
            ],
        },
    ];

    const benefits = [
        {
            title: "Clean Energy",
            description:
                "Generate clean and renewable electricity while reducing dependence on conventional energy sources.",
            icon: FaSun
        },
        {
            title: "Cost Savings",
            description:
                "Reduce electricity expenses with an efficient solar power system designed around your energy requirements.",
            icon: BsCashStack
        },
        {
            title: "Sustainable Future",
            description:
                "Support a cleaner environment and contribute towards a more sustainable energy future.",
            icon: BsLeafFill,
        },
    ];

    return (
        <>
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
                                "url('/images/solar_1.jpg')",
                        }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-blue-900/80" />

                    <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
                        {/* Section Label */}
                        <div
                            data-aos="fade-down"
                            data-aos-duration="900"
                            className="mb-5 flex items-center justify-center gap-3"
                        >
                            <span className="h-[2px] w-10 bg-blue-400" />
                            <p className="!mb-0 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                                Solar Solutions
                            </p>
                            <span className="h-[2px] w-10 bg-blue-400" />
                        </div>

                        {/* Heading */}
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
                            Powering a Brighter Future
                        </h1>

                        {/* Description */}
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
                            Harness the power of the sun with innovative, reliable and
                            sustainable solar energy solutions designed for homes,
                            businesses and industries.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4"
                            data-aos="fade-up"
                            data-aos-duration="900"
                            data-aos-delay="300">
                            <button className="px-7 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition">
                                Explore Solutions
                            </button>
                            <button className="px-7 py-3 rounded-lg border border-white/40 hover:bg-white/10 !text-white font-semibold transition">
                                Get Started
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
                                    src="/images/solar_system_bg.jpg"
                                    alt="Solar Energy Solution"
                                    className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
                                />
                                <div className="absolute -bottom-6 -right-6 text-white bg-blue-500 rounded-2xl p-4 shadow-xl">
                                    <div className="flex items-center gap-3">
                                        <BsFillSunFill className="text-3xl" />
                                        <div>
                                            <p className="text-white text-sm font-semibold">
                                                Renewable
                                            </p>
                                            <p className="text-white text-sm font-semibold">
                                                Solar Energy
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Content */}
                            <div>
                                <div
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                    className="flex items-center gap-3 !mb-3"
                                >
                                    <span
                                        className="
                                            block
                                            w-10 h-[2px]
                                            bg-blue-600
                                            origin-left
                                            transition-all duration-500 ease-out
                                            hover:w-16
                                        "
                                    />

                                    <p
                                        data-aos="fade-left"
                                        data-aos-duration="700"
                                        data-aos-delay="250"
                                        className="
                                        text-blue-700
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        transition-all
                                        duration-300
                                        hover:tracking-[0.25em]"
                                    >
                                        Sustainable Energy
                                    </p>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Clean Energy From the Power of the Sun
                                </h2>
                                <p className="text-slate-600 text-sm leading-8 mb-5">
                                    Solar energy provides a clean, renewable and reliable
                                    source of electricity. Our solar solutions are designed
                                    to help customers make the transition towards cleaner
                                    and more efficient energy.
                                </p>
                                <p className="text-slate-600 text-sm leading-8">
                                    From residential rooftops to large commercial and
                                    industrial installations, we provide solutions tailored
                                    to different energy requirements.
                                </p>
                                <div className="grid grid-cols-2 gap-5 mt-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                            <MdSolarPower className="text-green-600" />
                                        </div>
                                        <span className="font-semibold text-slate-700">
                                            Renewable Energy
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <FaBoltLightning className="text-blue-600" />
                                        </div>
                                        <span className="font-semibold text-slate-700">
                                            Energy Efficient
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                                            <FaSun className="text-yellow-600" />
                                        </div>
                                        <span className="font-semibold text-slate-700">
                                            Clean Power
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                                            <BsGraphUpArrow className="text-purple-600" />
                                        </div>
                                        <span className="font-semibold text-slate-700">
                                            Long-Term Savings
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* =====================================================
                    SOLAR SOLUTIONS
                ===================================================== */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Section Header */}
                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <span className="w-12 h-[2px] bg-blue-500" />

                                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                                Our Solutions
                                </p>

                                <span className="w-12 h-[2px] bg-blue-500" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Solar Solutions For Every Need
                            </h2>
                            <p className="text-slate-600 text-sm mx-auto leading-7">
                                Flexible solar energy solutions designed for residential,
                                commercial and industrial applications.
                            </p>
                        </div>
                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutions.map((solution) => {
                                const Icon = solution.icon;

                                return (
                                    <div
                                        key={solution.title}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-2"
                                    >
                                        {/* Card Header */}
                                        <div className="relative h-32 bg-gradient-to-r from-green-500 to-green-900">

                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.35),transparent_45%)]" />

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

                                        {/* Card Content */}
                                        <div className="p-7">

                                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                                {solution.title}
                                            </h3>

                                            <p className="text-slate-600 text-sm leading-7 !mb-3">
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
                    BENEFITS SECTION
                ===================================================== */}
                <section className="py-20 bg-white">

                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <span className="w-12 h-[2px] bg-blue-500" />

                                <p className="text-blue-700 !mb-0 text-xs font-bold uppercase tracking-wide">
                                Why Solar Energy
                                </p>

                                <span className="w-12 h-[2px] bg-blue-500" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Benefits of Solar Power
                            </h2>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {benefits.map((benefit) => {
                                const Icon = benefit.icon;

                                return (
                                    <div
                                        key={benefit.title}
                                        className="
                                        group text-center p-8 rounded-2xl
                                        bg-slate-50 border border-slate-200
                                        hover:-translate-y-2
                                        hover:shadow-xl
                                        transition-all duration-300"
                                    >

                                        <div
                                            className="
                                            w-16 h-16 mx-auto rounded-2xl
                                            bg-green-100
                                            flex items-center justify-center
                                            mb-6
                                            group-hover:bg-green-200
                                            group-hover:scale-110
                                            transition-all duration-300"
                                        >
                                            <Icon className="text-green-600 text-3xl" />
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                                            {benefit.title}
                                        </h3>


                                        <p className="text-slate-600 text-sm leading-7">
                                            {benefit.description}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SOLAR PROCESS
                ===================================================== */}

                <section className="relative py-24 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700 overflow-hidden">

                    {/* Background Decorations */}
                    <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

                    <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">

                        {/* Heading */}
                        <div className="text-center mb-16">

                            <div className="flex items-center justify-center gap-3 mb-4">

                                <span className="w-10 h-[2px] bg-cyan-400" />

                                <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs font-bold !mb-0">
                                    Our Process
                                </p>

                                <span className="w-10 h-[2px] bg-cyan-400" />

                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white">
                                Simple Steps Towards{" "}
                                <span className="text-cyan-300">
                                    Solar
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 text-blue-100 text-sm md:text-base leading-7">
                                From consultation to installation, we make your transition
                                to clean and renewable energy simple, transparent and efficient.
                            </p>

                        </div>


                        {/* Process */}
                        <div className="relative">

                            {/* Connecting Line */}
                            <div
                                className="
                    hidden md:block
                    absolute
                    top-12
                    left-[12%]
                    right-[12%]
                    h-[2px]
                    bg-gradient-to-r
                    from-cyan-400/20
                    via-cyan-300
                    to-cyan-400/20
                "
                            />

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">

                                {/* Step 1 */}
                                <div className="relative group text-center">

                                    <div
                                        className="
                            relative z-10
                            w-24 h-24
                            mx-auto
                            rounded-full
                            bg-blue-900
                            border-4 border-cyan-400
                            flex items-center justify-center
                            shadow-xl shadow-blue-950/40
                            group-hover:bg-cyan-400
                            group-hover:scale-110
                            transition-all duration-500
                        "
                                    >
                                        <span
                                            className="
                                text-2xl
                                font-bold
                                text-white
                                group-hover:text-blue-950
                                transition-colors duration-300
                            "
                                        >
                                            01
                                        </span>
                                    </div>

                                    <div
                                        className="
                            mt-8
                            p-7
                            rounded-2xl
                            bg-white/10
                            backdrop-blur-md
                            border border-white/10
                            group-hover:bg-white/15
                            group-hover:-translate-y-2
                            transition-all duration-500
                        "
                                    >

                                        <h3 className="text-xl font-bold !text-white mb-3">
                                            Consultation
                                        </h3>

                                        <p className="text-blue-100 text-sm leading-7">
                                            Understand your energy requirements and
                                            objectives through a detailed consultation.
                                        </p>

                                    </div>

                                </div>


                                {/* Step 2 */}
                                <div className="relative group text-center">

                                    <div
                                        className="
                            relative z-10
                            w-24 h-24
                            mx-auto
                            rounded-full
                            bg-blue-900
                            border-4 border-cyan-400
                            flex items-center justify-center
                            shadow-xl shadow-blue-950/40
                            group-hover:bg-cyan-400
                            group-hover:scale-110
                            transition-all duration-500
                        "
                                    >
                                        <span
                                            className="
                                text-2xl
                                font-bold
                                text-white
                                group-hover:text-blue-950
                                transition-colors duration-300
                            "
                                        >
                                            02
                                        </span>
                                    </div>

                                    <div
                                        className="
                            mt-8
                            p-7
                            rounded-2xl
                            bg-white/10
                            backdrop-blur-md
                            border border-white/10
                            group-hover:bg-white/15
                            group-hover:-translate-y-2
                            transition-all duration-500
                        "
                                    >

                                        <h3 className="text-xl font-bold !text-white mb-3">
                                            System Design
                                        </h3>

                                        <p className="text-blue-100 text-sm leading-7">
                                            Design a solar energy system based on your
                                            specific requirements and energy goals.
                                        </p>

                                    </div>

                                </div>


                                {/* Step 3 */}
                                <div className="relative group text-center">

                                    <div
                                        className="
                            relative z-10
                            w-24 h-24
                            mx-auto
                            rounded-full
                            bg-blue-900
                            border-4 border-cyan-400
                            flex items-center justify-center
                            shadow-xl shadow-blue-950/40
                            group-hover:bg-cyan-400
                            group-hover:scale-110
                            transition-all duration-500
                        "
                                    >
                                        <span
                                            className="
                                text-2xl
                                font-bold
                                text-white
                                group-hover:text-blue-950
                                transition-colors duration-300
                            "
                                        >
                                            03
                                        </span>
                                    </div>

                                    <div
                                        className="
                            mt-8
                            p-7
                            rounded-2xl
                            bg-white/10
                            backdrop-blur-md
                            border border-white/10
                            group-hover:bg-white/15
                            group-hover:-translate-y-2
                            transition-all duration-500
                        "
                                    >

                                        <h3 className="text-xl font-bold !text-white mb-3">
                                            Installation
                                        </h3>

                                        <p className="text-blue-100 text-sm leading-7">
                                            Install, configure and test your complete
                                            solar energy system with professional care.
                                        </p>

                                    </div>

                                </div>


                                {/* Step 4 */}
                                <div className="relative group text-center">

                                    <div
                                        className="
                            relative z-10
                            w-24 h-24
                            mx-auto
                            rounded-full
                            bg-blue-900
                            border-4 border-cyan-400
                            flex items-center justify-center
                            shadow-xl shadow-blue-950/40
                            group-hover:bg-cyan-400
                            group-hover:scale-110
                            transition-all duration-500
                        "
                                    >
                                        <span
                                            className="
                                text-2xl
                                font-bold
                                text-white
                                group-hover:text-blue-950
                                transition-colors duration-300
                            "
                                        >
                                            04
                                        </span>
                                    </div>

                                    <div
                                        className="
                            mt-8
                            p-7
                            rounded-2xl
                            bg-white/10
                            backdrop-blur-md
                            border border-white/10
                            group-hover:bg-white/15
                            group-hover:-translate-y-2
                            transition-all duration-500
                        "
                                    >

                                        <h3 className="text-xl font-bold !text-white mb-3">
                                            Start Saving
                                        </h3>

                                        <p className="text-blue-100 text-sm leading-7">
                                            Start generating clean energy while reducing
                                            your electricity costs and carbon footprint.
                                        </p>

                                    </div>

                                </div>

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

export default SolarSolution;