import React from "react";
import ContactusComponent from "../Components/ContactusComponent";
import { BsFillSunFill, BsGraphUpArrow, BsCashStack, BsLeafFill } from "react-icons/bs";
import { MdSolarPower } from "react-icons/md";
import { FaBoltLightning, FaSun } from "react-icons/fa6";

const SolarSolution: React.FC = () => {
    const solutions = [
        {
            title: "Residential Solar Solutions",
            icon: "☀️",
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
            icon: "🏢",
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
            icon: "🏭",
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

                    {/* Hero Content */}
                    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                        <p className="text-blue-300 uppercase tracking-widest font-bold mb-4">
                            Solar Solutions
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold !text-white mb-6">
                            Powering a Brighter Future
                        </h1>

                        <p className="text-blue-100 text-sm md:text-sm mx-auto leading-8">
                            Harness the power of the sun with innovative, reliable and
                            sustainable solar energy solutions designed for homes,
                            businesses and industries.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">

                            <button className="px-7 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition">
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

                                <p className="text-blue-600 text-sm font-bold uppercase tracking-widest !mb-3">
                                    Sustainable Energy
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Clean Energy From the Power of the Sun
                                </h2>

                                <p className="text-slate-600 leading-8 mb-5">
                                    Solar energy provides a clean, renewable and reliable
                                    source of electricity. Our solar solutions are designed
                                    to help customers make the transition towards cleaner
                                    and more efficient energy.
                                </p>

                                <p className="text-slate-600 leading-8">
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

                            <p className="text-blue-700 text-sm font-bold uppercase tracking-widest !mb-3">
                                Our Solutions
                            </p>

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

                            {solutions.map((solution) => (

                                <div
                                    key={solution.title}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-2"
                                >

                                    {/* Card Header */}
                                    <div className="relative h-32 bg-gradient-to-r from-blue-700 to-blue-950">

                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.35),transparent_45%)]" />

                                        <div className="relative z-10 p-7">

                                            <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center text-3xl">
                                                {solution.icon}
                                            </div>

                                        </div>

                                    </div>


                                    {/* Card Content */}
                                    <div className="p-7">

                                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                                            {solution.title}
                                        </h3>

                                        <p className="text-slate-600 leading-7 mb-5">
                                            {solution.description}
                                        </p>

                                        <div className="space-y-3">

                                            {solution.features.map((feature) => (

                                                <div
                                                    key={feature}
                                                    className="flex items-center gap-3"
                                                >

                                                    <i className="bi bi-check-circle-fill text-green-500"></i>

                                                    <span className="text-slate-700 text-sm">
                                                        {feature}
                                                    </span>

                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    BENEFITS SECTION
                ===================================================== */}
                <section className="py-20 bg-white">

                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center mb-14">

                            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest !mb-3">
                                Why Solar Energy
                            </p>

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

                                        {/* Icon */}
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

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                                            {benefit.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-600 leading-7">
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
                <section className="py-20 bg-blue-700">

                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center mb-14">

                            <p className="text-blue-500 uppercase tracking-widest text-sm font-bold !mb-3">
                                Our Process
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold !text-white">
                                Simple Steps Towards Solar
                            </h2>

                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold mb-5">
                                    01
                                </div>

                                <h3 className="text-lg font-bold !text-white mb-3">
                                    Consultation
                                </h3>

                                <p className="text-blue-100 leading-7 text-sm">
                                    Understand your energy requirements and objectives.
                                </p>
                            </div>


                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold mb-5">
                                    02
                                </div>

                                <h3 className="text-lg font-bold !text-white mb-3">
                                    System Design
                                </h3>

                                <p className="text-blue-100 leading-7">
                                    Design a solar system based on your specific requirements.
                                </p>
                            </div>


                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold mb-3">
                                    03
                                </div>

                                <h3 className="text-lg font-bold !text-white mb-3">
                                    Installation
                                </h3>

                                <p className="text-blue-100 leading-7">
                                    Install and configure your solar energy system.
                                </p>
                            </div>


                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold mb-5">
                                    04
                                </div>

                                <h3 className="text-lg font-bold !text-white mb-3">
                                    Start Saving
                                </h3>

                                <p className="text-blue-100 leading-7">
                                    Start generating clean energy and reducing energy costs.
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

export default SolarSolution;