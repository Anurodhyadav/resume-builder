import React from "react";
import { resumeUpdater } from "../../utils";

const Experience = (...props) => {
  const { resume, setResume } = props[0];
  const changeResumeInfo = (page, key, value) => {
    resumeUpdater(resume, setResume, page, key, value);
  };

  return (
    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-2" {...props}>
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium ">
            Job Title
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Job Title"
            value={resume.experience.job_title}
            onChange={(e) =>
              changeResumeInfo("experience", "job_title", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium  ">
            Employeer
          </label>
          <input
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your employeer"
            value={resume.experience.employeer}
            onChange={(e) =>
              changeResumeInfo("experience", "employeer", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label for="company" class="block mb-2 text-sm font-medium  ">
            Location
          </label>
          <input
            type="text"
            id="company"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Location"
            value={resume.experience.location}
            onChange={(e) =>
              changeResumeInfo("experience", "location", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium  ">
            Start Date
          </label>
          <input
            type="date"
            id="phone"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={resume.experience.experience_start_date}
            onChange={(e) =>
              changeResumeInfo(
                "experience",
                "experience_start_date",
                e.target.value
              )
            }
            required
          ></input>
        </div>
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium  ">
            End Date
          </label>
          <input
            type="date"
            id="phone"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={resume.experience.experience_end_date}
            onChange={(e) =>
              changeResumeInfo(
                "experience",
                "experience_end_date",
                e.target.value
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
        rows="4"
        class="block p-2.5 w-full text-sm   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=" Talk a little bit about your study."
        value={resume.experience.experience_description}
        onChange={(e) =>
          changeResumeInfo(
            "experience",
            "experience_description",
            e.target.value
          )
        }
      ></textarea>
    </form>
  );
};

export default Experience;
