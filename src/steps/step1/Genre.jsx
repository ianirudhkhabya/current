import Dropdown from "./Dropdown";

const Genre = () => {
  return (
    <div className="flex flex-col">
      <p className="text-primary font-inter text-lg font-normal leading-6 opacity-50">
        Select genre of the video
      </p>
      <Dropdown />
    </div>
  );
};

export default Genre;
