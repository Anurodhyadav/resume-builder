import React, { useState } from "react";
import { resumeUpdater } from "../../utils";
import Delete_Icon from "../../assets/delete-resume.png";

const Education = (...props) => {
  const { resume, setResume } = props[0];
  const [educatonFormCount, seteducatonFormCount] = useState(() => {
    const getEductionFormCount = parseInt(
      localStorage.getItem("educationFormCount")
    );
    if (!getEductionFormCount) return 1;
    return getEductionFormCount;
  });
  const changeResumeInfo = (page, key, value, internal_key) => {
    resumeUpdater(resume, setResume, page, key, value, internal_key);
  };
  const addAnotherForm = () => {
    localStorage.setItem("educationFormCount", educatonFormCount + 1);
    seteducatonFormCount((preVal) => preVal + 1);
  };
  const removeForm = (index) => {
    if (educatonFormCount === 1) return;
    const updated_resume = {
      ...resume,
      education: resume.education.filter((el, i) => i !== index),
    };

    localStorage.setItem("educationFormCount", educatonFormCount - 1);
    seteducatonFormCount((preVal) => preVal - 1);

    setResume(updated_resume);
  };

  return (
    <div className="flex flex-col">
      <h1 className="ml-4 text-[50px]">Education</h1>
      <h2 className="ml-4 text-[14px] text-slate-500 mb-6">
        Give a detailed look into your academic history.
      </h2>
      {Array.from(Array(educatonFormCount).keys()).map((el) => {
        return (
          <div className="relative mb-4">
            <form className="ml-4 bg-[#f8f8f8] rounded-sm">
              <div class="grid  gap-8 mb-6 md:grid-cols-2" {...props}>
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-slate-500  "
                  >
                    School
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    placeholder="Your School"
                    value={resume.education[el] && resume.education[el].school}
                    onChange={(e) =>
                      changeResumeInfo(
                        "education",
                        "school",
                        e.target.value,
                        el
                      )
                    }
                    required
                  ></input>
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-slate-500   "
                  >
                    Degree
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    placeholder="your degree"
                    value={resume.education[el] && resume.education[el].degree}
                    onChange={(e) =>
                      changeResumeInfo(
                        "education",
                        "degree",
                        e.target.value,
                        el
                      )
                    }
                    required
                  ></input>
                </div>
                <div>
                  <label
                    for="company"
                    class="block mb-2 text-sm font-medium text-slate-500   "
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="company"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    placeholder="City"
                    value={
                      resume.education[el] && resume.education[el].school_city
                    }
                    onChange={(e) =>
                      changeResumeInfo(
                        "education",
                        "school_city",
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
                    class="block mb-2 text-sm font-medium text-slate-500   "
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="phone"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    value={
                      resume.education[el] &&
                      resume.education[el].education_start_date
                    }
                    onChange={(e) =>
                      changeResumeInfo(
                        "education",
                        "education_start_date",
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
                    class="block mb-2 text-sm font-medium text-slate-500   "
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="phone"
                    class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                    value={
                      resume.education[el] &&
                      resume.education[el].education_end_date
                    }
                    onChange={(e) =>
                      changeResumeInfo(
                        "education",
                        "education_end_date",
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
                class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
                placeholder=" Talk a little bit about your study."
                value={
                  resume.education[el] &&
                  resume.education[el].education_description
                }
                onChange={(e) =>
                  changeResumeInfo(
                    "education",
                    "education_description",
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

export default Education;
