import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12
        rounded-full
        bg-blue-900
        text-white
        flex items-center justify-center
        shadow-lg
        border border-blue-700

        transition-all duration-500 ease-out

        hover:bg-blue-700
        hover:-translate-y-1
        hover:shadow-xl
        hover:scale-110

        ${
          showButton
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-5 invisible"
        }
      `}
    >
      <span className="text-xl font-bold">
        <MdKeyboardDoubleArrowUp />
      </span>
    </button>
  );
};

export default ScrollToTop;