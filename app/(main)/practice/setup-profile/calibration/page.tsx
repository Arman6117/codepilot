import React from "react";
import ResumeUploadAndAnalyze from "./_components/resume-upload-and-analyze";

const CalibrationPage = () => {
  return (
    <div className="mt-10 flex  gap-10 flex-col items-center text-white w-scren text-center">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="font-bold text-5xl">
          Calibrate Your Interview Experience
        </h1>
        <span className="font-light text-gray-500 w-1/2 mx-auto ">
          Upload your resume to help our AI understand your tech stack,
          seniority, and domain expertise. This sets the baseline for your
          adaptive interview session.
        </span>
      </div>
      <div className="w-2/3 px-7 py-7 border border-[#1E293B] rounded-lg bg-[#0F172A] h-full">
       <ResumeUploadAndAnalyze/>
      </div>
    </div>
  );
};

export default CalibrationPage;
