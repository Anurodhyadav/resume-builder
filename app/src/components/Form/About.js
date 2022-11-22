import React from "react";
import { resumeUpdater } from "../../utils";

const About = (...props) => {
  const { resume, setResume } = props[0];

  const changeResumeInfo = (page, key, value) => {
    resumeUpdater(resume, setResume, page, key, value);
  };

  return (
    <form className="ml-4 rounded-sm">
      <h1 className="text-[50px]">About Yourself</h1>
      <h2 className="text-[14px] text-slate-500 mb-6">
        Fill out your personal information.
      </h2>
      <div class="grid gap-8 mb-6 md:grid-cols-2" {...props}>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-slate-500 "
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
            placeholder="Name"
            value={resume?.basics?.first_name}
            onChange={(e) =>
              changeResumeInfo("basics", "first_name", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-slate-500  "
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            value={resume?.basics?.last_name}
            class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
            placeholder="Last Name"
            onChange={(e) =>
              changeResumeInfo("basics", "last_name", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label for="company" className="text-slate-500">
            Designation
          </label>
          <input
            type="text"
            id="company"
            class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 "
            placeholder="Your designation"
            value={resume?.basics?.designation}
            onChange={(e) =>
              changeResumeInfo("basics", "designation", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-slate-500  "
          >
            Address
          </label>
          <input
            type="tel"
            id="phone"
            class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500"
            placeholder="Kathamandu"
            value={resume?.basics?.address}
            onChange={(e) =>
              changeResumeInfo("basics", "address", e.target.value)
            }
            required
          ></input>
        </div>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-slate-500  "
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500   "
          placeholder="abc@gmail.com"
          value={resume?.basics?.email}
          onChange={(e) => changeResumeInfo("basics", "email", e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label
          for="phone"
          class="block mb-2 text-sm font-medium text-slate-500"
        >
          Phone number
        </label>
        <input
          type="number"
          id="phone"
          class="bg-gray-50 border  text-sm rounded-lg focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 "
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={resume?.basics?.phone_number}
          onChange={(e) =>
            changeResumeInfo("basics", "phone_number", e.target.value)
          }
          required
        ></input>
      </div>

      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        How would you describe yourself?
      </label>
      <textarea
        id="message"
        rows="12"
        class="block p-2.5 w-full text-sm   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=" How would you describe yourself?"
        value={resume?.basics?.description}
        onChange={(e) =>
          changeResumeInfo("basics", "description", e.target.value)
        }
      ></textarea>
    </form>
  );
};

export default About;
