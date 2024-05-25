import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const Button = ({ text }) => {
  return (
    <button className="rounded-2xl bg-custom-gradient flex justify-center items-center gap-1 py-3 px-4">
      <HiOutlineArrowRight className="w-6 h-6 text-yellow-1" />
      <span className="text-white font-inter text-base font-bold leading-5">
        {text}
      </span>
    </button>
  );
};

export default Button;
