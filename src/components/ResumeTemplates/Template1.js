import React, { useRef } from "react";

import DownloadButton from "../DownloadButton";
// import Delete_Icon from "../assets/delete-resume.png";

const Template1 = ({ resume }) => {
  const {
    first_name = "",
    last_name = "",
    phone_number = "",
    address = "",
    designation = "",
    email = "",
    description = "",
  } = resume.basics;

  const templateOneRef = useRef();

  return (
    <div className="w-full h-full flex mt-4 relative">
      <div
        className="flex justify-start w-full h-full items-start shadow-xl border-2"
        ref={templateOneRef}
      >
        <div className="flex bg-[#25265E]  h-screen  text-white flex-col gap-4 p-10 basis-[35%] ">
          {phone_number || email || address ? (
            <div>
              <div className="text-[20px] font-[500] mb-2">CONTACT</div>
              <hr className="border-t-[1px] border-t-[white]" />
              <div>{phone_number}</div>
              <div>{email}</div>
              <span>{address}</span>
            </div>
          ) : (
            ""
          )}

          <div>
            <div className="text-[20px] font-[500] mb-2">EDUCATION</div>
            <hr className="border-t-[1px] border-t-[white]" />
            {resume.education.map((el) => {
              return (
                <div className="mb-6">
                  <div>{el.school}</div>
                  <div>{el.school_city}</div>
                  <div>{el.degree}</div>
                  {el.education_start_date && (
                    <span>{el.education_start_date}</span>
                  )}

                  {el.education_end_date && (
                    <span> to {el.ducation_end_date}</span>
                  )}

                  <div> {el.education_description}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full gap-8 p-10 ">
          <div>
            <div className="text-4xl gap-2 flex">
              <div>{first_name}</div>
              <div>{last_name}</div>
            </div>
            <div>
              <div className="text-2xl text-slate-500  mb-2">{designation}</div>

              <div>{description}</div>
            </div>
          </div>

          <div>
            <div className=" text-[20px] font-[500] mb-2">WORK EXPERIENCE</div>
            <hr className="border-t-[1px] border-t-[#353535]" />
            {resume.work.map((el) => {
              return (
                <div className="mb-6">
                  <div>
                    <div>{el.job_title}</div>

                    <div className="flex gap-1">
                      <div>{el.employeer}</div>
                      <div>{el.location}</div>
                    </div>
                    {el.experience_start_date && (
                      <span>{el.experience_start_date}</span>
                    )}

                    {el.experience_end_date && (
                      <span> to {el.experience_end_date}</span>
                    )}

                    <div>{el.experience_description}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-[20px] font-[500] mb-2">PROJECT</div>
            <hr className="border-t-[1px] border-t-[#353535]" />
            {resume.projects.map((el) => {
              return (
                <div className="mb-6">
                  <div>
                    <div>{el.project_title}</div>
                    <div>{el.project_description}</div>
                    <div className="text-[blue]">{el.project_link}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute -top-20 right-0">
        <DownloadButton buttonRef={templateOneRef} />
      </div>
    </div>
  );
};

export default Template1;
