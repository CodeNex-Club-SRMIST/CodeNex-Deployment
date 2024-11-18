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
      className="
        border-remd:rounded-full
        sm:rounded-full
        flex flex-wrap
        items-center
        justify-between
        fixed
        top-0
        left-0
        right-0
        py-2
        md:px-4 py-4
        px-2
        text-lg text-gray-700
        bg-black
        md:m-8
        md:mx-14
        m-4
        mx-4
        border-solid
        border-2
        border-white
        shadow-xl
        max-sm:rounded-3xl
        z-50
        shadow-teal-900
      "
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
          className="
            pt-4
            text-base
            text-gray-950
            sm:flex
            sm:justify-between 
            sm:pt-0"
        >
          <li className="sm:mx-4">
            <Link to="/" className="hover:text-cyan-300 text-white">
              HOME
            </Link>
          </li>
          <li className="sm:mx-4">
            <Link to="/aboutus" className="hover:text-cyan-300 text-white">
              ABOUT
            </Link>
          </li>
          <li className="sm:mx-4">
            <a href="#" className="hover:text-cyan-300 text-white">
              EVENTS
            </a>
          </li>
          <li className="sm:mx-4">
            <Link to="/team" className="hover:text-cyan-300 text-white">
              TEAM
            </Link>
          </li>
          <li className="sm:mx-4">
            <a href="#" className="hover:text-cyan-300 text-white">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
