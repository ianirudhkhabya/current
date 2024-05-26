import React from "react";

const Button = ({ text, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-[12px] border border-[#F2D3FF] bg-[#F5F9FF] flex p-[12px] justify-center items-center gap-[6px]"
    >
      {children}
      <span className="text-[#25073E] font-inter text-[16px] font-normal leading-5">
        {text}
      </span>
    </button>
  );
};

export default Button;
