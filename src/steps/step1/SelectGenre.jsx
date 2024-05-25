import Dropdown from "./Dropdown";

const SelectGenre = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-primary font-inter text-lg font-normal leading-6 opacity-50">
        Select genre of the video
      </h3>
      <Dropdown />
    </div>
  );
};

export default SelectGenre;
