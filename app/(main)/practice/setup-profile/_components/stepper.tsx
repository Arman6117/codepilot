"use client";
import React, { useState } from "react";
import StepsTab from "./steps-tab";
import { usePathname } from "next/navigation";

const steps = [
  {
    id: 1,
    title: "sign up",
    isCompleted: false,
  },
  {
    id: 2,
    title: "calibration",
    isCompleted: false,
  },
  {
    id: 3,
    title: "session",
    isCompleted: false,
  },
];
const Stepper = () => {
  const [stepComplete, setStepComplete] = useState(false);
  const signedIn = true;
  const pathname = usePathname();

  const current = pathname.includes("calibration")
    ? 2
    : pathname.includes("interview")
    ? 3
    : 1;
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="flex w-1/2 gap-30">
      {steps.map((step) => {
        const isActive = current === step.id;
        const completed = current > step.id;
        return (
          <div className="w-full flex items-center gap-10  " key={step.title}>
            <StepsTab completed={completed} step={step} isActive={isActive} />
            {step.id !== steps.length && (
              <div className="h-px ml-10 -mr-10 rounded-full w-10 bg-[#464554]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
