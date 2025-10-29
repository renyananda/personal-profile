import React from "react";
import UiUxIcon from "../assets/images/uiux.png";
import FrontendIcon from "../assets/images/frontend.png";
import BrandingIcon from "../assets/images/branding.png";
import MotionIcon from "../assets/images/motion.png";

const SkillsSection = () => {
  const skills = [
    {
      title: "UI/UX Design",
      desc: "Figma, Adobe XD, Sketch",
      img: UiUxIcon,
      color: "bg-pink-100",
    },
    {
      title: "Frontend Development",
      desc: "React, Tailwind",
      img: FrontendIcon,
      color: "bg-blue-100",
    },
    {
      title: "Branding",
      desc: "Logo, Identity, Print",
      img: BrandingIcon,
      color: "bg-yellow-100",
    },
    {
      title: "Motion Graphic",
      desc: "After Effects, Lottie",
      img: MotionIcon,
      color: "bg-purple-100",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white text-center font-poppins"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#232946] mb-10">
        My Skills
      </h2>

      <div className="w-1440px h-476px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`${skill.color} w-220px h-192px rounded-[16px] p-6 shadow-sm hover:shadow-lg transition`}
          >
            <img
              src={skill.img}
              alt={skill.title}
              className="w-40px h-40px mx-auto mb-4 object-contain"
            />
            <h3 className="font-semibold text-lg mb-2 text-[#232946]">
              {skill.title}
            </h3>
            <p className="text-gray-600 text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;