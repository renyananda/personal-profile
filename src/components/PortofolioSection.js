import React from "react";
import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/project3.png";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Website VolunteerVerse",
      category: "Frontend Dev",
      subtitle: "UI/UX, Front-end",
      img: Project1,
    },
    {
      title: "Website Glowify",
      category: "Frontend Dev",
      subtitle: "Front-end, Back-end",
      img: Project2,
    },
    {
      title: "Website PT PAL",
      category: "UI/UX Design",
      subtitle: "UI/UX",
      img: Project3,
    },
  ];
  
  const categoryColors = {
    "UI/UX Design": "bg-purple-100 text-purple-600",
    "Frontend Dev": "bg-blue-100 text-blue-600",
    "Branding": "bg-yellow-100 text-yellow-600",
    "Motion Graphic": "bg-pink-100 text-pink-600",
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 text-center font-poppins">
      <h2 className="text-2xl md:text-3xl font-bold text-[#232946] mb-10">
        Portfolio
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative rounded-[16px] overflow-hidden shadow-md bg-white hover:shadow-xl transition flex flex-col"
          >
            <span
              className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                categoryColors[p.category] || "bg-gray-200 text-gray-700"
              }`}
            >
              {p.category}
            </span>
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg text-[#232946]">{p.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{p.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 px-6 py-3 bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white font-medium rounded-[12px] shadow-md hover:opacity-90 transition">
        More on Dribbble
      </button>
    </section>
  );
};

export default PortfolioSection;
