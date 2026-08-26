import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

interface SubMenu {
  id: number;
  name: string;
  link: string;
}

interface Menu {
  id: number;
  name: string;
  link?: string;
  subMenus?: SubMenu[];
}

const Header: React.FC = () => {
  // =========================
  // STATIC MENU + SUBMENU
  // =========================
  const menus: Menu[] = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },

    {
      id: 2,
      name: "About",
      link: "/about",
    },

    {
      id: 3,
      name: "What We Do",
      subMenus: [
        {
          id: 31,
          name: "Telecom Services",
          link: "/telecom-services",
        },
        {
          id: 32,
          name: "Solar Solutions",
          link: "/solar-solutions",
        },
        {
          id: 33,
          name: "Safety Products",
          link: "/safety-products",
        },
      ],
    },

    {
      id: 4,
      name: "Who We Are",
      subMenus: [
        {
          id: 34,
          name: "Our Company",
          link: "/our_company",
        },
        {
          id: 35,
          name: "Leadership",
          link: "/leadership",
        },
        {
          id: 36,
          name: "Careers",
          link: "/careers",
        },
        {
          id: 37,
          name: "Vision & Mission",
          link: "/vision_mission",
        },
        {
          id: 38,
          name: "Manpower Services",
          link: "/manpower_services",
        },
      ],
    },

    {
      id: 5,
      name: "Our Blogs",
      link: "/blogs",
    },

    {
      id: 6,
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // =========================
  // CLOSE MOBILE MENU
  // =========================
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">

      {/* =========================
          HEADER
      ========================== */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* =========================
            LOGO
        ========================== */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center"
        >
          <img
            src="/images/celexa_logo.png"
            alt="Cellexa Energy Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* =========================
            DESKTOP MENU
        ========================== */}
        <nav className="hidden items-center gap-6 lg:flex">

          {menus.map((menu) => (

            <div
              key={menu.id}
              className="group relative"
            >

              {/* =========================
                  MENU WITH SUBMENU
              ========================== */}
              {menu.subMenus && menu.subMenus.length > 0 ? (
                <>
                  <button
                    type="button"
                    className="
                      flex
                      items-center
                      gap-1
                      text-sm
                      font-semibold
                      text-gray-900
                      transition-colors
                      hover:text-sky-600
                    "
                  >
                    {menu.name}

                    <FiChevronDown
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:rotate-180
                      "
                    />
                  </button>

                  {/* =========================
                      DESKTOP DROPDOWN
                  ========================== */}
                  <div
                    className="
                      invisible
                      absolute
                      left-0
                      top-full
                      mt-2
                      w-60
                      rounded-lg
                      bg-white
                      py-2
                      text-sm
                      shadow-xl
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:visible
                      group-hover:opacity-100
                    "
                  >

                    {menu.subMenus.map((subMenu) => (

                      <Link
                        key={subMenu.id}
                        to={subMenu.link}
                        className="
                          block
                          px-5
                          py-3
                          font-semibold
                          text-gray-900
                          transition-colors
                          hover:bg-sky-50
                          hover:text-sky-600
                        "
                      >
                        {subMenu.name}
                      </Link>

                    ))}

                  </div>
                </>
              ) : (

                /* =========================
                   NORMAL MENU
                ========================== */
                <Link
                  to={menu.link || "#"}
                  className="
                    text-sm
                    font-semibold
                    text-gray-900
                    transition-colors
                    hover:text-sky-600
                  "
                >
                  {menu.name}
                </Link>

              )}

            </div>

          ))}

        </nav>

        {/* =========================
            MOBILE BUTTON
        ========================== */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FiX size={28} />
          ) : (
            <FiMenu size={28} />
          )}
        </button>

      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      {mobileMenuOpen && (

        <div className="bg-white lg:hidden">

          {menus.map((menu) => (

            <div
              key={menu.id}
              className="border-t border-gray-100"
            >

              {/* =========================
                  MOBILE SUBMENU
              ========================== */}
              {menu.subMenus && menu.subMenus.length > 0 ? (

                <>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === menu.id
                          ? null
                          : menu.id
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-6
                      py-4
                      text-left
                      text-sm
                      font-semibold
                      text-gray-700
                      hover:bg-gray-50
                    "
                  >
                    {menu.name}

                    <FiChevronDown
                      size={18}
                      className={`
                        transition-transform
                        duration-300
                        ${
                          openDropdown === menu.id
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {openDropdown === menu.id && (

                    <div className="bg-gray-50">

                      {menu.subMenus.map((subMenu) => (

                        <Link
                          key={subMenu.id}
                          to={subMenu.link}
                          className="
                            block
                            px-10
                            py-3
                            text-sm
                            font-medium
                            text-gray-600
                            hover:bg-sky-100
                            hover:text-sky-600
                          "
                          onClick={closeMobileMenu}
                        >
                          {subMenu.name}
                        </Link>

                      ))}

                    </div>

                  )}

                </>

              ) : (

                /* =========================
                   MOBILE NORMAL MENU
                ========================== */
                <Link
                  to={menu.link || "#"}
                  className="
                    block
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-gray-700
                    hover:bg-gray-100
                    hover:text-sky-600
                  "
                  onClick={closeMobileMenu}
                >
                  {menu.name}
                </Link>

              )}

            </div>

          ))}

        </div>

      )}

    </header>
  );
};

export default Header;