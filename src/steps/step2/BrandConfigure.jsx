import React from "react";
import UploadLogo from "./UploadLogo";
import BrandPalette from "./BrandPalette";
import BrandFont from "./BrandFont";

const BrandConfigure = () => {
  return (
    <div className="flex justify-center items-center font-inter gap-12">
      <UploadLogo />
      <div className="w-[1px] h-[196px] bg-line-gradient"></div>
      <div className="flex flex-col items-start gap-6">
        <BrandPalette />
        <BrandFont />
      </div>
    </div>
  );
};

export default BrandConfigure;
