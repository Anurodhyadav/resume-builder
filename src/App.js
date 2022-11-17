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
    case "achivement":
      return <Achivement {...props} />;
    default:
      return <About {...props} />;
  }
};
function App() {
  const [inputType, setInputType] = useState("about");
  const [resume, setResume] = useState(() => {
    const savedData = localStorage.getItem("resumeInfo");
    if (!savedData) {
      return {
        about: {},
        experience: {},
        education: {},
        project: {},
        skills: {},
        achievement: {},
      };
    }

    const resumeInfo = JSON.parse(savedData);
    return resumeInfo;
  });

  useEffect(() => {
    localStorage.setItem("resumeInfo", JSON.stringify(resume));
  }, [resume]);

  return (
    <div className="flex flex-col h-full  md:flex-row w-full gap-2  justify-start items-start">
      <div className="flex min-w-[40%] gap-2 p-5">
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

export default App;
