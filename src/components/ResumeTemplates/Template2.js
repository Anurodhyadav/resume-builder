import React, { useRef } from "react";
import DownloadButton from "../DownloadButton";

const Template2 = ({ resume }) => {
  const {
    first_name,
    last_name,
    phone_number,
    address,
    designation,
    email,
    description,
  } = resume.about;
  const {
    school,
    degree,
    school_city,
    education_start_date,
    education_end_date,
    education_description,
  } = resume.education;
  const {
    job_title,
    employeer,
    location,
    experience_start_date,
    experience_end_date,
    experience_description,
  } = resume.experience;
  const { project_title, project_link, project_description } = resume.project;
  const { achievement_title = "", achievement_description = "" } =
    resume.achievement;
  const templateTwoRef = useRef();

  return (
    <div className="w-full flex mt-4">
      <div
        className="flex justify-start w-full  items-start shadow-xl"
        ref={templateTwoRef}
      >
        <div className="flex  h-screen  text-black flex-col gap-4 p-10 basis-[35%] ">
          <div>
            <div className="text-4xl flex">
              <div>{first_name}</div>
              <div>{last_name}</div>
            </div>
            <div>
              <div className="text-2xl text-slate-500 mb-2"> {designation}</div>
            </div>
          </div>
          <div>
            <div className="underline text-xl mb-2">CONTACT</div>
            <div>{phone_number}</div>
            <div>{email}</div>
            <span>{address}</span>
          </div>
          <div>
            <div className="underline text-xl mb-2">ACHIEVEMENT</div>
            <div>{achievement_title}</div>
            <div>{achievement_description}</div>
          </div>
        </div>
        <div className="flex flex-col  gap-8 p-10 ">
          <div>
            <div className="underline text-xl mb-2">SUMMARY</div>

            <div>{description}</div>
          </div>
          <div>
            <div className="underline text-xl mb-2">EDUCATION</div>

            <div>{school}</div>
            <div>{school_city}</div>
            <div>{degree}</div>
            <span>
              {education_start_date}
              {education_end_date}
            </span>
            <div> {education_description}</div>
          </div>
          <div>
            <div className="underline text-xl mb-2">WORK EXPERIENCE</div>
            <div>
              <div>{job_title}</div>
              <div className="flex gap-1">
                <div>{employeer}</div>
                <div>{location}</div>
              </div>
              {experience_start_date && <span>{experience_start_date}</span>}

              {experience_end_date && <span> to {experience_end_date}</span>}
              <div>{experience_description}</div>
            </div>
          </div>
          <div>
            <div className="underline text-xl mb-2">PROJECT</div>
            <div>
              <div>{project_title}</div>
              <div>{project_description}</div>
              <div className="text-[blue]">{project_link}</div>
            </div>
          </div>
        </div>
      </div>
      <DownloadButton buttonRef={templateTwoRef} />
    </div>
  );
};

export default Template2;
