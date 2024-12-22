import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import Button from "../Buttons/HeaderBtn";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = ''; // Enable scroll
    }
  };

  return (
    <div>
      <div className="header  pt-20  md:pt-50 pb-20 md:pb-56 ">
        <div className="container m-auto">
          <div className="header-section flex justify-between items-center bg-secondary p-[10px] md:p-0 md:!px-6 rounded-[50px]">
            <div className="logo">
              <Link to="#hero" rel="noopener noreferrer">
                <img src={logo} alt="Logo" className="max-w-[65%] sm:max-w-[100%]" />
              </Link>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center space-x-2"
            >
              <span className="text-xl">&#9776;</span> {/* Hamburger Icon */}
            </button>
            <nav className="hidden md:flex  space-x-2 lg:space-x-8 mt-19 mb-19">
              <Link
                to="#hero"
                rel="noopener noreferrer"
                onClick={() => handleMenuClick("home")}
                className={`lg-tab:ml-[12px] lg:text-sm font-medium font-body transition ${
                  activeMenu === "home"
                    ? "text-[#001242] font-bold"
                    : "hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                to="#about"
                rel="noopener noreferrer"
                onClick={() => handleMenuClick("about")}
                className={`lg:mr-[12px] text-sm font-medium hover:text-primary transition ${
                  activeMenu === "about"
                    ? "text-[#001242]"
                    : "hover:text-primary"
                }`}
              >
                About Us
              </Link>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition"
              >
                SIS
              </Link>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition"
              >
                Digital Services
              </Link>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition"
              >
                Portfolio
              </Link>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition"
              >
                Contact Us
              </Link>
            </nav>
            <div className="request-btn hidden md:flex">
              <Button
                icon={<FaPhoneAlt />}
                text="Request a Demo"
                className="bg-primary border border-black rounded-[30px] font-body font-normal text-secondary text-base leading-5"
              />
            </div>
          </div>
          {/* Mobile Menu (Visible when menuOpen is true) */}
          {menuOpen && (
            <div
              className={`md:hidden absolute rounded-lg z-20 w-[90%] h-[100%] transition-all duration-500 ease-in-out overflow-hidden flex flex-col items-center space-y-6 bg-secondary py-6 mt-4 ${
                menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-lg font-medium text-white hover:text-primary"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-lg font-medium text-white hover:text-primary"
              >
                About Us
              </Link>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-lg font-medium text-white hover:text-primary"
                onClick={toggleMenu}
              >
                SIS
              </Link>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-lg font-medium text-white hover:text-primary"
                onClick={toggleMenu}
              >
                Digital Services
              </Link>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-lg font-medium text-white hover:text-primary"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="text-lg font-medium text-white hover:text-primary"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
