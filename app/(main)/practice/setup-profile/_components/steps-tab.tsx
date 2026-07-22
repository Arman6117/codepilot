import React from "react";

type StepsTabProps = {
  step: {
    id: number;
    title: string;
    isCompleted: boolean;
  };

  isActive: boolean;
  completed: boolean;
};
const StepsTab = ({ isActive, step, completed }: StepsTabProps) => {
  return (
    <div className="flex  w-full  items-center  flex-col ">
      <div
        className={`rounded-full border relative p-4 flex items-center justify-center size-5 ${
          completed
            ? "border-[#004D44] bg-[#03C6B2]"
            : isActive
            ? "border-[#1000A9] bg-[#C0C1FF]"
            : "border-[#908FA0] bg-transparent"
        }`}
      >
        <span
          className={`absolute bottom-2 font-bold ${
            completed
              ? "text-[#004D44]"
              : isActive
              ? "text-[#1000A9]"
              : "text-[#DAE2FD]"
          }`}
        >
          {completed ? "✓" : step.id}

          {/* {step.id} */}
        </span>
      </div>
      <span className="mt-3 mx-auto text-center font-light font-serif text-[#DAE2FD] whitespace-nowrap">
  {step.title}
</span>
    </div>
  );
};

export default StepsTab;
