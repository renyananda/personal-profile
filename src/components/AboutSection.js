import React from "react";
import Profile from "../assets/images/profil.png";
import HireIcon from '../assets/images/hire-icon.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 px-6 md:px-20 flex flex-col md:flex-row items-center gap-8">
      <img
        src={Profile}
        alt="About"
        className="w-[200px] h-[200px] md:w-[288px] md:h-[288px] border-[4px] border-white radius-[16px] object-cover rounded-lg shadow-md mx-auto"
      />

      <div className="max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#232946] mb-4">About Me</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Hi! I'm Reny Ananda, a passionate designer and frontend developer based in Surabaya.
          With a background in visual design and a love for coding, I specialize in building websites and apps that are not only stunning but also user-friendly.
        </p>
        <div className="flex flex-wrap gap-3">
          {["✓ UI/UX Design", "✓ Web Development", "✓ Branding", "✓ Motion Graphics"].map((tag) => (
            <span key={tag} className="bg-purple-100 text-[#7755FF] px-3 py-1 rounded-[8px] text-sm font-medium">{tag}</span>
          ))}
        </div>
        <a
          href="https://linkedin.com/in/reny-ananda-kusuma-deni"
          className="flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white font-semibold rounded-[12px] shadow-md hover:opacity-90 transition"
        >
          <img src={HireIcon} alt="Hire" className="w-4 h-4" /> Lets Connect
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
