import React, { useState } from "react";
import { resumeUpdater } from "../../utils";
import Delete_Icon from "../../assets/delete-resume.png";

const Projects = (...props) => {
  const { resume, setResume } = props[0];
  const [projectFormCount, setprojectFormCount] = useState(() => {
    const getprojectFormCount = parseInt(
      localStorage.getItem("projectFormCount")
    );
    if (!getprojectFormCount) return 1;
    return getprojectFormCount;
  });
  const changeResumeInfo = (page, key, value, internal_key) => {
    resumeUpdater(resume, setResume, page, key, value, internal_key);
  };
  const addAnotherForm = () => {
    localStorage.setItem("projectFormCount", projectFormCount + 1);
    setprojectFormCount((preVal) => preVal + 1);
  };
  const removeForm = (index) => {
    if (projectFormCount === 1) return;
    const updated_resume = {
      ...resume,
      project: resume.projects.filter((el, i) => i !== index),
    };

    localStorage.setItem("projectFormCount", projectFormCount - 1);
    setprojectFormCount((preVal) => preVal - 1);

    setResume(updated_resume);
  };

  return (
    <div className="flex flex-col">
      <h1 className="ml-4 text-[50px]">Projects</h1>
      <h2 className="ml-4 text-[14px] text-slate-500 mb-6">
        List your most recent projects..
      </h2>
      {Array.from(Array(projectFormCount).keys()).map((el) => {
        return (
          <div className="relative mb-4">
            <form className="ml-4 bg-[#f8f8f8] rounded-sm ">
              <div class="grid gap-6 mb-6 md:grid-cols-2" {...props}>
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-slate-500 "
                  >
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    placeholder="Project Title"
                    value={
                      resume.projects[el] && resume.projects[el].project_title
                    }
                    onChange={(e) =>
                      changeResumeInfo(
                        "projects",
                        "project_title",
                        e.target.value,
                        el
                      )
                    }
                    required
                  ></input>
                </div>
              </div>

              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="message"
                rows="12"
                class="block p-2.5 w-full text-sm   rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500    "
                placeholder=" Talk a little bit about your projects."
                value={
                  resume.projects[el] && resume.projects[el].project_description
                }
                onChange={(e) =>
                  changeResumeInfo(
                    "projects",
                    "project_description",
                    e.target.value,
                    el
                  )
                }
              ></textarea>
              <div>
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Project URL
                </label>
                <input
                  type="url"
                  id="website"
                  class=" border border-gray-600   text-sm rounded-lg   block w-full p-2.5     focus:ring-blue-500 focus:border-blue-500"
                  placeholder="project.com"
                  value={
                    resume.projects[el] && resume.projects[el].project_link
                  }
                  onChange={(e) =>
                    changeResumeInfo(
                      "projects",
                      "project_link",
                      e.target.value,
                      el
                    )
                  }
                  required
                ></input>
              </div>
            </form>
            <div
              onClick={() => removeForm(el)}
              className="absolute cursor-pointer top-5 right-0"
            >
              <img src={Delete_Icon} alt="education" />
            </div>
          </div>
        );
      })}
      <div
        onClick={addAnotherForm}
        className="rounded-[50%] self-center mt-4 text-[14px] cursor-pointer flex justify-center items-center text-white  bg-[#353535]   w-[34px] h-[34px] text-center  "
      >
        +
      </div>
    </div>
  );
};

export default Projects;
