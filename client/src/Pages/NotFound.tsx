import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-lg">

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600 tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800 !mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-500 text-sm md:text-sm leading-relaxed">
          Sorry, the page you are looking for doesn't exist or may have been
          moved to another location.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl
                     bg-blue-600 text-white font-semibold
                     hover:bg-blue-700 transition-all duration-300
                     shadow-lg hover:shadow-xl"
        >
          <i className="fa-solid fa-house"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;