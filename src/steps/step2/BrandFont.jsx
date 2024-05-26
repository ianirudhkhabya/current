import React from "react";
import Dropdown from "./Dropdown";

const BrandFont = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-primary font-inter text-lg font-normal leading-6 opacity-50">
        Define your brand font
      </h3>
      <Dropdown />
    </div>
  );
};

export default BrandFont;
