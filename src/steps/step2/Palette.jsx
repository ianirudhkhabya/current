import React from "react";

const Palette = ({ placeholder, name }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex w-28 h-[44px] justify-center items-center gap-[10px] rounded-[11px] border border-[#D9E4FF] bg-[#F5F9FF]">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-full text-center text-[14px] text-primary font-open-sans font-normal leading-[20px] bg-[#F5F9FF] border-none outline-none rounded-[11px]"
        />
      </div>
      <span className="text-[14px] text-primary font-inter font-medium leading-[22px] opacity-50">
        {name}
      </span>
    </div>
  );
};

export default Palette;
