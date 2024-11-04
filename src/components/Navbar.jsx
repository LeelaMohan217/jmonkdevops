import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { navItems } from "../constants";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1) {
        // Change the navbar as soon as you start scrolling
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-gradient-to-b from-neutral-50 to-neutral-200"
        }`}
      >
        <div className="flex justify-between items-center px-8 lg:px-8 xl:px-20 py-2">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center flex-shrink-0">
              <LazyLoadImage
                className="w-20 h-20"
                alt="Logo"
                src={Logo}
                effect="blur"
              />
              <span className="px-3 text-xl hidden sm:block tracking-tight text-black font-semibold">
                J-Monk Devops
              </span>
            </Link>
          </div>

          <ul className="hidden lg:flex ml-12 space-x-10">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`relative group mx-0 text-base hover:text-red-600 ease-in-out duration-500 ${
                  location.pathname === item.href
                    ? "text-red-600"
                    : "text-black"
                }`}
              >
                <Link
                  to={item.href}
                  onClick={() => {
                    closeNavbar();
                    scrollToTop();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <Link
              to="/contact"
              className="hidden lg:block bg-red-600 text-white font-normal text-base lg:text-base px-4 md:px-6 py-3 hover:bg-red-700 transition-all duration-500"
            >
              <span>Get started</span>
            </Link>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className="text-black" />
              ) : (
                <Menu className="text-black" />
              )}
            </button>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed top-0 left-0 z-40 h-screen p-6 bg-white w-[75%] lg:hidden border-r border-gray-300 backdrop-blur-lg transition-all ease-in-out duration-500">
              <h5
                id="drawer-navigation-label"
                className="text-base font-semibold text-black uppercase border-b border-gray-300"
              >
                Menu
              </h5>
              <ul className="mt-6">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="py-4 text-sm md:text-lg text-black hover:text-red-600 transition-colors duration-300"
                  >
                    <Link to={item.href} onClick={closeNavbar}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
