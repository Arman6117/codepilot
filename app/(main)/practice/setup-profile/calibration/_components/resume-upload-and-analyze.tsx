"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FileInput } from "lucide-react";
import React, { useRef, useState } from "react";

const ResumeUploadAndAnalyze = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    setFile(selectedFile);
  };
  return (
    <div className="flex flex-col ">
      <input
        type="file"
        accept=".pdf, .docx, .doc"
        className="hidden"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <div className="w-full border-2 border-dashed rounded-lg border-[#464554] bg-transparent flex flex-col gap-7 p-10 items-center justify-center ">
        {file && (
          <div className="flex flex-col gap-2 items-center">
            <span className="font-medium text-lg">{file.name}</span>
            <span className="text-gray-500 text-sm">
              {Math.round(file.size / 1024)} KB
            </span>
          </div>
        )}
        <div className="flex justify-center items-center rounded-lg bg-[#222A3D] p-4">
          <FileInput className="text-[#C0C1FF] size-9" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-lg">Drop your resume here</span>
          <span className="text-gray-500 text-sm">PDF or DOCX (Max 5MB)</span>
        </div>
        <Button
          onClick={() => inputRef.current?.click()}
          className="font-light bg-[#2D3449] border border-[#464554] rounded-sm"
        >
          Browse Files
        </Button>
      </div>
      <Separator className="bg-[#464554] mt-10" />
      <div className="flex text-start flex-col gap-2  mt-4">
        <span className="font-semibold text-sm text-[#C7C4D7]">
          SENIORITY LEVEL
        </span>
        <div className="">
          <ToggleGroup
            type="single"
            defaultValue="Senior"
            className="flex w-full gap-2 flex-wrap"
          >
            {["Junior", "Mid-Level", "Senior", "Staff+"].map((level) => (
              <ToggleGroupItem
                key={level}
                value={level}
                className="
        flex-1
        h-12

        rounded-lg
        border
        border-[#464554]

        bg-[#060E20]

        text-[#DAE2FD]
        text-sm
        font-medium

        hover:bg-[#11192F]
        hover:text-white

        data-[state=on]:bg-[#222A3D]
        data-[state=on]:border-[#6B7BFF]
        data-[state=on]:text-white
        data-[state=on]:shadow-none

        transition-all
      "
              >
                {level}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadAndAnalyze;
