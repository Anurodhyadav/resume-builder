import { useEffect, useState } from "react";
import About from "./components/Form/About";
import Experience from "./components/Form/Experience";
import Education from "./components/Form/Education";
import Achivement from "./components/Form/Achivements";
import Projects from "./components/Form/Projects";

import SideNavbar from "./components/SideNavbar";
import UserResume from "./components/UserResume";

const FormComponent = ({ component, ...props }) => {
  switch (component) {
    case "about":
      return <About {...props} />;
    case "experience":
      return <Experience {...props} />;
    case "education":
      return <Education {...props} />;
    case "projects":
      return <Projects {...props} />;
    default:
      return <About {...props} />;
  }
};
function NormalFLow({ linkedinInfo = null }) {
  const [inputType, setInputType] = useState("about");
  const [resume, setResume] = useState(() => {
    if (linkedinInfo) {
      const localData = JSON.parse(localStorage.getItem("resumeInfo"));
      const first_name = linkedinInfo.localizedFirstName;
      const last_name = linkedinInfo.localizedLastName;
      return {
        basics: {
          ...(localData && localData.basics),
          first_name: first_name,
          last_name: last_name,
        },
        work: (localData && localData.work) || [{}],
        education: (localData && localData.education) || [{}],
        projects: (localData && localData.projects) || [{}],
      };
    } else {
      const savedData = localStorage.getItem("resumeInfo");
      if (!savedData) {
        return {
          basics: {},
          work: [{}],
          education: [{}],
          projects: [{}],
        };
      }

      const resumeInfo = JSON.parse(savedData);
      return resumeInfo;
    }
  });

  useEffect(() => {
    localStorage.setItem("resumeInfo", JSON.stringify(resume));
  }, [resume]);

  return (
    <div className="flex flex-col h-full bg-[#F9FAFC]   md:flex-row w-full gap-2  justify-start items-start">
      <div className="flex min-w-[40%]">
        <SideNavbar inputType={inputType} setInputType={setInputType} />
        <FormComponent
          component={inputType}
          resume={resume}
          setResume={setResume}
        />
      </div>

      <UserResume className="w-[60%]" resume={resume} />
    </div>
  );
}

export default NormalFLow;
