import React, { useState } from "react";
import HireIcon from "../assets/images/hire-icon.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-4 bg-white shadow-md z-50">
      <h1
        className="text-[#232946] text-xl md:text-2xl font-bold cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        My Profil
      </h1>
      <ul className="hidden md:flex gap-8 text-[16px] font-semibold text-gray-800">
        <li
          onClick={() => scrollToSection("about")}
          className="hover:text-purple-600 cursor-pointer transition"
        >
          About
        </li>
        <li
          onClick={() => scrollToSection("skills")}
          className="hover:text-purple-600 cursor-pointer transition"
        >
          Skills
        </li>
        <li
          onClick={() => scrollToSection("portfolio")}
          className="hover:text-purple-600 cursor-pointer transition"
        >
          Portfolio
        </li>
        <li
          onClick={() => scrollToSection("contact")}
          className="hover:text-purple-600 cursor-pointer transition"
        >
          Contact
        </li>
      </ul>
      <button
        onClick={() => scrollToSection("contact")}
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#7755FF] to-[#FF54B0] shadow-md hover:opacity-90 transition"
      >
        <img src={HireIcon} alt="Hire" className="w-4 h-4" />
        Hire Me
      </button>
      <div
        className="md:hidden text-2xl text-[#232946] cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-6 md:hidden z-40">
          <li
            onClick={() => scrollToSection("about")}
            className="text-gray-800 font-semibold hover:text-purple-600 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="text-gray-800 font-semibold hover:text-purple-600 cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("portfolio")}
            className="text-gray-800 font-semibold hover:text-purple-600 cursor-pointer"
          >
            Portfolio
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="text-gray-800 font-semibold hover:text-purple-600 cursor-pointer"
          >
            Contact
          </li>
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 px-5 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#7755FF] to-[#FF54B0] shadow-md hover:opacity-90 transition"
          >
            <img src={HireIcon} alt="Hire" className="w-4 h-4" />
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;