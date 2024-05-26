import React from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

import Heading from "./Heading";
import BrandConfigure from "./BrandConfigure";
import Button from "./Button";

const BrandSetup = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center h-full bg-white mx-[180px] mt-[160px] mb-[164px] px-[174px] pt-[72px] pb-[50px] rounded-md gap-[72px]">
      <div className="flex flex-col items-center gap-12">
        <Heading />
        <BrandConfigure />
      </div>
      <div className="flex gap-6">
        <Button text="Back to video" onClick={handleClick}>
          <HiOutlineArrowLeft className="w-6 h-6 flex justify-center items-center" />
        </Button>
        <Button text="Design your template" onClick={handleClick}>
          <HiOutlineArrowRight className="w-6 h-6 flex justify-center items-center" />
        </Button>
      </div>
    </main>
  );
};

export default BrandSetup;
