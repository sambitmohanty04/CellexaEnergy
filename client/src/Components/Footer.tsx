import { Link } from "react-router-dom";
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
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold italic text-sky-500"
            >
              <img src="/images/celexa_logo.png" alt="Logo" className="h-20 w-auto" />
            </Link>

            <p className="text-sm leading-5 text-gray-600 !mt-3">
              Cellexa Energy is committed to creating a smarter and more sustainable energy future by
              delivering innovative, reliable, and environmentally responsible energy solutions.
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
                <Link
                  to="/"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition duration-300 hover:text-sky-600"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Contact
                </Link>
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
                <Link
                  to="/careers"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/terms_conditions"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy_policy"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-xs">

              <div className="flex items-center gap-3">
                <FaLocationDot className="text-md text-sky-900" />
                <span>Bhubaneswar, India</span>
              </div>

              <div className="flex items-center gap-3">
                <IoIosMail className="text-md text-sky-900" />
                <span>Hr@celexaenergy.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneVolume className="text-md text-sky-900" />
                <span>+91 98536 92955</span>
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