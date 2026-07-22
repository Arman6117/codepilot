import React from "react";
import Stepper from "./_components/stepper";

const CalibrationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full flex justify-center">
      <div className="h-full items-center flex-col mt-5  w- flex bg-rd-500 ">
        <Stepper />
        {children}
      </div>
    </main>
  );
};

export default CalibrationLayout;
