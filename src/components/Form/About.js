import React from "react";
import { resumeUpdater } from "../../utils";

const About = (...props) => {
  const { resume, setResume } = props[0];

  const changeResumeInfo = (page, key, value) => {
    resumeUpdater(resume, setResume, page, key, value);
  };

  return (
    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-2" {...props}>
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium ">
            First name
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            value={resume.about.first_name}
            onChange={(e) =>
              changeResumeInfo("about", "first_name", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium  ">
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            value={resume.about.last_name}
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
            onChange={(e) =>
              changeResumeInfo("about", "last_name", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label for="company" class="block mb-2 text-sm font-medium  ">
            Designation
          </label>
          <input
            type="text"
            id="company"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your designation"
            value={resume.about.designation}
            onChange={(e) =>
              changeResumeInfo("about", "designation", e.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium  ">
            Address
          </label>
          <input
            type="tel"
            id="phone"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Kathamandu"
            value={resume.about.address}
            onChange={(e) =>
              changeResumeInfo("about", "address", e.target.value)
            }
            required
          ></input>
        </div>
      </div>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium  ">
          Email address
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="abc@gmail.com"
          value={resume.about.email}
          onChange={(e) => changeResumeInfo("about", "email", e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label for="phone" class="block mb-2 text-sm font-medium">
          Phone number
        </label>
        <input
          type="number"
          id="phone"
          class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={resume.about.phone_number}
          onChange={(e) =>
            changeResumeInfo("about", "phone_number", e.target.value)
          }
          required
        ></input>
      </div>

      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        How would you describe yourself?
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=" How would you describe yourself?"
        value={resume.about.description}
        onChange={(e) =>
          changeResumeInfo("about", "description", e.target.value)
        }
      ></textarea>
    </form>
  );
};

export default About;
