import React, { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState("Select genre");
  const options = ["Item 1", "Item 2", "Item 3"];

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="relative w-[237px]">
      <select
        className="appearance-none w-full py-2.5 px-3 rounded-lg border border-purple-200 text-primary font-inter text-lg font-normal leading-6 bg-blue-100 cursor-pointer focus:outline-none"
        value={selectedItem}
        onChange={handleChange}
      >
        <option value="Select genre" disabled>
          Select genre
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <RiArrowDownWideFill size={24} className="text-primary" />
      </div>
    </div>
  );
};

export default Dropdown;
