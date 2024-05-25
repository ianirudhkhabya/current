import Heading from "./Heading";
import SelectedVideo from "./SelectedVideo";
import Button from "./Button";

const UploadVideo = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center h-full bg-white mx-[180px] my-[162px] px-[207px] pt-[72px] pb-[63px] rounded-md gap-[72px]">
      <div className="flex flex-col gap-12">
        <Heading />
        <SelectedVideo />
      </div>
      <Button text="Setup brand Kit" />
    </main>
  );
};

export default UploadVideo;
