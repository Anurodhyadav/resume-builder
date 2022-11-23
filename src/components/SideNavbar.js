import React from "react";
import About_Icon from "../assets/about-resume.png";
import Education_Icon from "../assets/education-resume.png";
import Experinece_Icon from "../assets/experience-resume.png";
import Project_Icon from "../assets/project-resume.png";

const SideNavbar = ({ setInputType }) => {
  return (
    <div className="flex flex-col gap-16 h-screen shadow-md  bg-[#ffffff]">
      <div
        className="cursor-pointer p-3 items-center justify-center flex flex-col bg-[#ffffff] rounded-md"
        onClick={() => setInputType("basics")}
      >
        <img src={About_Icon} alt="about" />
        <div>About</div>
      </div>
      <div
        className="cursor-pointer p-3 items-center justify-center flex flex-col bg-[#ffffff] rounded-md"
        onClick={() => setInputType("education")}
      >
        <img src={Education_Icon} alt="education" />
        <div>Education</div>
      </div>
      <div
        className="cursor-pointer p-3 items-center justify-center flex flex-col bg-[#ffffff] rounded-md"
        onClick={() => setInputType("work")}
      >
        <img src={Experinece_Icon} alt="experience" />
        <div>Experience</div>
      </div>
      <div
        className="cursor-pointer p-3 items-center justify-center flex flex-col bg-[#ffffff]] rounded-md"
        onClick={() => setInputType("projects")}
      >
        <img src={Project_Icon} alt="project" />
        <div>Projects</div>
      </div>
    </div>
  );
};

export default SideNavbar;
