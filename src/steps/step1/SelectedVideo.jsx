import VideoDetail from "./VideoDetail";
import Genre from "./Genre";

const SelectedVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[666px] h-[203px] gap-8">
      <VideoDetail />
      <div className="flex items-center justify-center gap-6">
        <div className="bg-gray-300 w-[247px] h-[143px] flex-shrink-0 rounded-md">
          Video thumbnail
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-primary font-inter text-lg font-normal leading-6">
            <span className="opacity-50">Video duration &nbsp;</span>
            <span className="text-purple-1 font-inter text-lg font-bold leading-6">
              19m 3s
            </span>
          </p>
          <Genre />
        </div>
      </div>
    </div>
  );
};

export default SelectedVideo;
