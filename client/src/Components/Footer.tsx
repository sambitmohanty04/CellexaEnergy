import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
 
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 text-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-2">

        {/* Top Section */}
        <div className="grid grid-cols-1 py-4 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-sky-600">
              Marvel
            </h2>

            <p className="text-sm leading-7 text-gray-600 !mt-3">
              Build modern web applications using React, TypeScript and
              Tailwind CSS.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sky-900 transition-all duration-300 hover:bg-sky-600 hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sky-900 transition-all duration-300 hover:bg-sky-600 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sky-900 transition-all duration-300 hover:bg-sky-600 hover:text-white"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sky-900 transition-all duration-300 hover:bg-sky-600 hover:text-white"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-sky-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-sky-600">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-sky-600">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-sky-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-sky-600">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-sky-600">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-sky-600">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-sky-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <FaLocationDot className="text-xl text-sky-900" />
                <span>Bangalore, India</span>
              </div>

              <div className="flex items-center gap-3">
                <IoIosMail className="text-xl text-sky-900" />
                <span>support@marvel.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneVolume className="text-xl text-sky-900" />
                <span>+91 9876543210</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-300 py-2">
          <div className="flex flex-col items-center text-xs justify-between gap-4 md:flex-row">

            <p className="text-center text-gray-900">
              © {currentYear} Marvel. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="transition hover:text-sky-600"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition hover:text-sky-600"
              >
                Terms
              </a>

              <a
                href="#"
                className="transition hover:text-sky-600"
              >
                Cookies
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer