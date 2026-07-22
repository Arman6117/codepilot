import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex">
      <Button>
        <Link href={"/practice/setup-profile/calibration"}>Sign Up</Link>
      </Button>
    </div>
  );
};

export default SignUpPage;
