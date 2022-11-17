import React from "react";
import { useState } from "react";

const SideNavbar = ({ setInputType }) => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="cursor-pointer" onClick={() => setInputType("about")}>
        About
      </div>
      <div className="cursor-pointer" onClick={() => setInputType("education")}>
        Education
      </div>
      <div
        className="cursor-pointer"
        onClick={() => setInputType("experience")}
      >
        Experience
      </div>
      <div className="cursor-pointer" onClick={() => setInputType("projects")}>
        Projects
      </div>
      <div
        className="cursor-pointer"
        onClick={() => setInputType("achivement")}
      >
        Achivement
      </div>
    </div>
  );
};

export default SideNavbar;
