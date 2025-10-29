import React from "react";
import ProfileImage from "../assets/images/profil.png";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 sm:px-8 md:px-20 py-8 md:py-12 bg-gradient-to-r from-[#E0EAFE] to-[#F9E5FF] font-poppins pt-24 md:pt-28"
    >
      <div className="max-w-lg text-center md:text-left mt-8 md:mt-0 md:mr-10">
        <p className="text-sm text-purple-600 font-semibold">
          Hello, I'm Reny Ananda
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#232946] leading-tight mt-2">
          Creative Designer & <br /> Frontend Developer
        </h1>
        <p className="text-gray-700 text-[15px] leading-relaxed mt-4">
          Passionate in creating beautiful and functional digital experiences.
          I love blending creativity with technology to make impactful solutions
          for users and brands.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="px-6 py-3 bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white font-semibold rounded-[12px] shadow-md hover:opacity-90 transition"
          >
            See My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 border-2 border-[#7755FF] text-[#7755FF] font-semibold rounded-[12px] hover:bg-[#7755FF] hover:text-white transition"
          >
            Contact Me
          </button>
        </div>

        <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-700 mt-6">
          <a
            href="https://instagram.com/renyndkd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E4405F] transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/renyananda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/reny-ananda-kusuma-deni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:renyananda@gmail.com"
            className="hover:text-[#7755FF] transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="relative flex justify-center md:justify-end mb-6 md:mb-0">
        <div className="absolute -top-4 -left-4 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full opacity-20 bg-[linear-gradient(90deg,#FF54B0_0%,#7755FF_50%,#FFE978_100%)]"></div>
        <div className="w-40 sm:w-52 md:w-64 lg:w-72 aspect-square">
          <img
            src={ProfileImage}
            alt="Profile"
            className="relative w-full h-full object-cover object-center rounded-full border-[4px] border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;