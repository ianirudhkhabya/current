import VideoTitle from "./VideoTitle";
import VideoThumbnail from "./VideoThumbnail";
import VideoDuration from "./VideoDuration";
import SelectGenre from "./SelectGenre";

const SelectedVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[666px] h-[203px] gap-8">
      <VideoTitle />
      <div className="flex items-center justify-center gap-6">
        <VideoThumbnail />
        <div className="flex flex-col gap-12">
          <VideoDuration />
          <SelectGenre />
        </div>
      </div>
    </div>
  );
};

export default SelectedVideo;
