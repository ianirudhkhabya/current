import React, { useState, useEffect, useRef } from "react";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";

const DropdownList = ({ options, onSelect }) => {
  return (
    <div className="absolute top-[43px] w-full bg-blue-100 text-primary font-inter text-lg font-normal leading-6 rounded-md">
      {options.map((option) => (
        <p
          key={option}
          className="py-2 pl-4 hover:bg-blue-300 hover:rounded-md cursor-pointer"
          onClick={() => onSelect(option)}
        >
          {option}
        </p>
      ))}
    </div>
  );
};

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select genre");
  const options = ["Item 1", "Item 2", "Item 3"];
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative flex flex-col w-[237px] py-2.5 px-3 justify-between items-center rounded-lg border border-purple-200 bg-blue-100"
    >
      <div
        className="flex items-center justify-between w-full text-primary font-inter text-lg font-normal leading-6 rounded-md"
        onClick={toggleDropdown}
      >
        <p className="text-primary font-inter text-base font-normal leading-30">
          {selectedItem}
        </p>
        {isOpen ? (
          <RiArrowUpWideFill
            size={24}
            className="text-primary cursor-pointer"
          />
        ) : (
          <RiArrowDownWideFill
            size={24}
            className="text-primary cursor-pointer"
          />
        )}
      </div>
      {isOpen && <DropdownList options={options} onSelect={handleSelect} />}
    </div>
  );
};

export default Dropdown;
