import React from "react";
import { resumeUpdater } from "../../utils";

const Projects = (...props) => {
  const { resume, setResume } = props[0];
  const changeResumeInfo = (page, key, value) => {
    resumeUpdater(resume, setResume, page, key, value);
  };

  return (
    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-2" {...props}>
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium ">
            Project Title
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Project Title"
            value={resume.project.project_title}
            onChange={(e) =>
              changeResumeInfo("project", "project_title", e.target.value)
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
        rows="4"
        class="block p-2.5 w-full text-sm   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=" Talk a little bit about your projects."
        value={resume.project.project_description}
        onChange={(e) =>
          changeResumeInfo("project", "project_description", e.target.value)
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
          class=" border border-gray-300   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="project.com"
          value={resume.project.project_link}
          onChange={(e) =>
            changeResumeInfo("project", "project_link", e.target.value)
          }
          required
        ></input>
      </div>
    </form>
  );
};

export default Projects;
