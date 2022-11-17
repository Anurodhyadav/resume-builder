import React from "react";
import { resumeUpdater } from "../../utils";

const Education = (...props) => {
  const { resume, setResume } = props[0];
  const changeResumeInfo = (page, key, value) => {
    resumeUpdater(resume, setResume, page, key, value);
  };

  return (
    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-2" {...props}>
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium ">
            School
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your School"
            value={resume.education.school}
            onChange={(e) =>
              changeResumeInfo("education", "school", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium  ">
            Degree
          </label>
          <input
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your degree"
            value={resume.education.degree}
            onChange={(e) =>
              changeResumeInfo("education", "degree", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label for="company" class="block mb-2 text-sm font-medium  ">
            City
          </label>
          <input
            type="text"
            id="company"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="City"
            value={resume.education.school_city}
            onChange={(e) =>
              changeResumeInfo("education", "school_city", e.target.value)
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
            value={resume.education.education_start_date}
            onChange={(e) =>
              changeResumeInfo(
                "education",
                "education_start_date",
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
            value={resume.education.education_end_date}
            onChange={(e) =>
              changeResumeInfo(
                "education",
                "education_end_date",
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
        value={resume.education.education_description}
        onChange={(e) =>
          changeResumeInfo("education", "education_description", e.target.value)
        }
      ></textarea>
    </form>
  );
};

export default Education;
