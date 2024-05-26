import React from "react";
import Palette from "./Palette";

const BrandPalette = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-[20px] text-primary font-inter font-normal leading-6 opacity-50">
        Define your brand palette
      </h2>
      <div className="flex items-start gap-4">
        <Palette placeholder="#Primary" name="Primary" />
        <Palette placeholder="#Secondary" name="Secondary" />
        <Palette placeholder="#Accent" name="Accent" />
      </div>
    </div>
  );
};

export default BrandPalette;
