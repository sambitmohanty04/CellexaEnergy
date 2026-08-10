import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import API_URL from "../service/api";

interface Menu {
  id: number;
  name: string;
  link: string;
}

interface SubMenu {
  id: number;
  menu_id: number;
  smenu_name: string;
  smenu_link: string;
}

const Header: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [subMenus, setSubMenus] = useState<SubMenu[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    loadMenus();
    loadSubMenus();
  }, []);

  const loadMenus = async () => {
    try {
      const response = await API_URL.get("/menu");
      setMenus(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadSubMenus = async () => {
    try {
      const response = await API_URL.get("/submenu");
      setSubMenus(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold italic text-sky-500"
        >
          CELLEXA ENERGY
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-4 lg:flex">

          {menus.map((menu) => {

            const childs = subMenus.filter(
              (item) => item.menu_id === menu.id
            );

            return (
              <div
                key={menu.id}
                className="group relative"
              >

                {childs.length > 0 ? (
                  <>
                    <button className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-sky-600">
                      {menu.name}
                      <FiChevronDown />
                    </button>

                    <div
                      className="
                        font-semibold
                        invisible
                        absolute
                        left-0
                        top-full
                        mt-2
                        w-54
                        rounded-lg
                        bg-white
                        text-sm
                        shadow-xl
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:visible
                        group-hover:opacity-100
                      "
                    >
                      {childs.map((sub) => (
                        <Link
                          key={sub.id}
                          to={sub.smenu_link}
                          className="block px-5 py-3 font-semibold text-gray-500 hover:bg-sky-50 hover:text-sky-600"
                        >
                          {sub.smenu_name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={menu.link}
                    className="text-sm text-gray-500 font-semibold hover:text-sky-600"
                  >
                    {menu.name}
                  </Link>
                )}

              </div>
            );
          })}

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FiX size={28} />
          ) : (
            <FiMenu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (

        <div className="bg-white lg:hidden">

          {menus.map((menu) => {

            const childs = subMenus.filter(
              (item) => item.menu_id === menu.id
            );

            return (

              <div key={menu.id} className="">

                {childs.length > 0 ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === menu.id ? null : menu.id
                        )
                      }
                      className="flex w-full items-center justify-between px-6 py-4 text-left text-sm text-gray-600"
                    >
                      {menu.name}

                      <FiChevronDown
                        className={`transition-transform ${openDropdown === menu.id
                            ? "rotate-180"
                            : ""
                          }`}
                      />
                    </button>

                    {openDropdown === menu.id && (

                      <div className="bg-gray-50">

                        {childs.map((sub) => (
                          <Link
                            key={sub.id}
                            to={sub.smenu_link}
                            className="block px-10 py-3 text-sm text-gray-600 hover:bg-sky-100 hover:text-sky-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.smenu_name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (

                  <Link
                    to={menu.link}
                    className="block px-6 py-4 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {menu.name}
                  </Link>

                )}

              </div>

            );

          })}

        </div>

      )}

    </header>
  );
};

export default Header;