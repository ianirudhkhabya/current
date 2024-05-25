import React from "react";
import SelectedVideo from "./SelectedVideo";
import Button from "./Button";

const UploadVideo = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center h-full bg-white mx-[180px] my-[162px] px-[207px] pt-[72px] pb-[63px] rounded-md gap-[72px]">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-primary font-inter text-4xl font-medium leading-tight">
            Upload Video
          </h1>
          <h3 className="text-primary font-inter text-lg font-light leading-6 opacity-50">
            To generate branded assets. Upload your talking videos
          </h3>
        </div>
        <SelectedVideo />
      </div>
      <Button text="Setup brand Kit" />
    </main>
  );
};

export default UploadVideo;
