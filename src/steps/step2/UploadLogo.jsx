import React from "react";

const UploadLogo = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-primary text-[20px] font-inter font-normal leading-6 opacity-50">
        Upload your official logo
      </h3>
      <div className="rounded-lg border-2 border-dashed border-[#F2D3FF] bg-[#F9F9FF] flex py-[70px] px-[84px] justify-center items-center gap-1">
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          className="hidden"
          id="upload-logo"
        />
        <label
          htmlFor="upload-logo"
          className="text-center font-inter text-[16px] leading-5 cursor-pointer"
        >
          <h3 className="bg-custom-gradient font-bold bg-clip-text text-transparent">
            Upload your logo
          </h3>
          <h3 className="bg-custom-gradient font-light bg-clip-text text-transparent">
            (jpeg, png or jpg)
          </h3>
        </label>
      </div>
    </div>
  );
};

export default UploadLogo;
