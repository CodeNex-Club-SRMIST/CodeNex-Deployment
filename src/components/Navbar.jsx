import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between px-2 py-2 py-4 m-4 mx-4 text-lg text-gray-700 bg-black border-2 border-white border-solid shadow-xl border-remd:rounded-full sm:rounded-full md:px-4 md:m-8 md:mx-14 max-sm:rounded-3xl shadow-teal-900"
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-12" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white">
          ☰
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        id="menu"
        className={`menu ${
          isMenuVisible ? "" : "hidden"
        } w-full sm:flex sm:items-center sm:w-auto`}
      >
        <ul
          className="pt-4 text-base text-gray-950 sm:flex sm:justify-between sm:pt-0"
        >
          <li className="sm:mx-4">
            <Link to="/" className="text-white hover:text-cyan-300">
              HOME
            </Link>
          </li>
          <li className="sm:mx-4">
            <Link to="/aboutus" className="text-white hover:text-cyan-300">
              ABOUT
            </Link>
          </li>
          <li className="sm:mx-4">
            <a href="#" className="text-white hover:text-cyan-300">
              EVENTS
            </a>
          </li>
          <li className="sm:mx-4">
            <Link to="/team" className="text-white hover:text-cyan-300">
              TEAM
            </Link>
          </li>
          <li className="sm:mx-4">
            <a href="#" className="text-white hover:text-cyan-300">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
