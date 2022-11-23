import React, { useState } from "react";

import Template1 from "./ResumeTemplates/Template1";
import Template2 from "./ResumeTemplates/Template2";

const UserResume = ({ resume }) => {
  const TemplateComponent = ({ template }) => {
    switch (template) {
      case "Template1":
        return <Template1 resume={resume} />;
      case "Template2":
        return <Template2 resume={resume} />;
      default:
        return <Template1 resume={resume} />;
    }
  };

  const [templateSelected, setTemplateSelected] = useState("Template1");

  const selectTemplate = (value) => {
    setTemplateSelected(value);
  };
  return (
    <div className="flex flex-col p-5  w-full">
      <div>
        <div>Select Templates</div>
        <div className="relative w-full lg:max-w-sm">
          <select
            onChange={(e) => selectTemplate(e.target.value)}
            className="w-full p-2.5 text-black  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            <option>Template1</option>
            <option>Template2</option>
          </select>
        </div>
      </div>

      <TemplateComponent template={templateSelected} />
    </div>
  );
};

export default UserResume;
