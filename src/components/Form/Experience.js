import React, { useState } from "react";
import { resumeUpdater } from "../../utils";
import Delete_Icon from "../../assets/delete-resume.png";

const Experience = (...props) => {
  const { resume, setResume } = props[0];
  const [experienceFormCount, setexperienceFormCount] = useState(() => {
    const getExperinceFormCount = parseInt(
      localStorage.getItem("experineceFormCount")
    );
    if (!getExperinceFormCount) return 1;
    return getExperinceFormCount;
  });
  const changeResumeInfo = (page, key, value, internal_key) => {
    resumeUpdater(resume, setResume, page, key, value, internal_key);
  };
  const addAnotherForm = () => {
    localStorage.setItem("experineceFormCount", experienceFormCount + 1);
    setexperienceFormCount((preVal) => preVal + 1);
  };
  const removeForm = (index) => {
    if (experienceFormCount === 1) return;
    const updated_resume = {
      ...resume,
      experience: resume.work.filter((el, i) => i !== index),
    };

    localStorage.setItem("experienceFormCount", experienceFormCount - 1);
    setexperienceFormCount((preVal) => preVal - 1);

    setResume(updated_resume);
  };

  return (
    <div className="flex flex-col">
      <h1 className="ml-4 text-[50px]">Work Experience</h1>
      <h2 className="ml-4 text-[14px] text-slate-500 mb-6">
        Include your career history. Give a brief insight into the role you
        played and mention at least 3 to 5 responsibilities you carried out at
        each workplace.
      </h2>
      {Array.from(Array(experienceFormCount).keys()).map((el) => {
        return (
          <div className="relative mb-4">
            <form className="ml-4 bg-[#f8f8f8] rounded-sm">
              <div class="grid gap-6 mb-8 md:grid-cols-2" {...props}>
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-slate-500 "
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    placeholder="Job Title"
                    value={resume.work[el] && resume.work[el].job_title}
                    onChange={(e) =>
                      changeResumeInfo("work", "job_title", e.target.value, el)
                    }
                    required
                  ></input>
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-slate-500  "
                  >
                    Employeer
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    placeholder="Your employeer"
                    value={resume.work[el] && resume.work[el].employeer}
                    onChange={(e) =>
                      changeResumeInfo("work", "employeer", e.target.value, el)
                    }
                    required
                  ></input>
                </div>
                <div>
                  <label
                    for="company"
                    class="block mb-2 text-sm font-medium text-slate-500  "
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="company"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    placeholder="Location"
                    value={resume.work[el] && resume.work[el].location}
                    onChange={(e) =>
                      changeResumeInfo("work", "location", e.target.value, el)
                    }
                    required
                  ></input>
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-slate-500  "
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="phone"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    value={
                      resume.work[el] && resume.work[el].experience_start_date
                    }
                    onChange={(e) =>
                      changeResumeInfo(
                        "work",
                        "experience_start_date",
                        e.target.value,
                        el
                      )
                    }
                    required
                  ></input>
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium  text-slate-500 "
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="phone"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    value={
                      resume.work[el] && resume.work[el].experience_end_date
                    }
                    onChange={(e) =>
                      changeResumeInfo(
                        "work",
                        "experience_end_date",
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
                class="block p-2.5 w-full text-sm   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" Talk a little bit about your study."
                value={
                  resume.work[el] && resume.work[el].experience_description
                }
                onChange={(e) =>
                  changeResumeInfo(
                    "work",
                    "experience_description",
                    e.target.value,
                    el
                  )
                }
              ></textarea>
            </form>
            <div
              onClick={() => removeForm(el)}
              className="absolute cursor-pointer top-0 right-0"
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

export default Experience;
