import React from 'react'

const ContactusComponent: React.FC = () => {
    return (
        <>
            <section className="bg-blue-900 py-10">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold !text-white !mb-3">
                        Let's Build the Future Together
                    </h2>

                    <p className="text-blue-100 text-lg !mb-3">
                        Have a project or requirement? Get in touch with our team and
                        discover how we can help.
                    </p>

                    <a
                        href="/contact-us"
                        className="inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        Contact Us
                    </a>

                </div>

            </section>
        </>
    )
}

export default ContactusComponent