import React, { useState, useCallback } from "react";

const Palette = ({ placeholder, name }) => {
  const [color, setColor] = useState("#F5F9FF");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [textColor, setTextColor] = useState("#000000");

  const handleInputChange = (event) => {
    const newColor = event.target.value;
    setInputValue(newColor);

    const validHex = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(newColor);

    if (newColor === "" || validHex) {
      setError(false);

      if (newColor.length === 4 || newColor.length === 7) {
        const expandedColor =
          newColor.length === 4 ? expandHex(newColor) : newColor;
        setColor(expandedColor);
        setTextColor(getTextColor(expandedColor));
      } else {
        setColor("#F5F9FF");
        setTextColor("#000000");
      }
    } else {
      setError(true);
    }
  };

  const expandHex = useCallback((shortHex) => {
    return (
      "#" +
      shortHex[1] +
      shortHex[1] +
      shortHex[2] +
      shortHex[2] +
      shortHex[3] +
      shortHex[3]
    );
  }, []);

  const getTextColor = useCallback((bgColor) => {
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  }, []);

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`flex w-28 h-[44px] justify-center items-center gap-[10px] rounded-[11px] border ${
          error ? "border-red-500" : "border-[#D9E4FF]"
        }`}
        style={{
          backgroundColor:
            (inputValue.length === 4 || inputValue.length === 7) && !error
              ? color
              : "#F5F9FF",
        }}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          maxLength={7}
          className="w-full h-full text-center text-[14px] font-open-sans font-normal leading-[20px] bg-transparent border-none outline-none rounded-[11px]"
          style={{ color: textColor }}
        />
      </div>
      {error && (
        <span className="text-[12px] text-red-500 font-inter font-medium leading-[20px]">
          Invalid hex code
        </span>
      )}
      <span
        className="text-[14px] font-inter font-medium leading-[22px] opacity-50"
        style={{ color: textColor }}
      >
        {name}
      </span>
    </div>
  );
};

export default Palette;
