import React from "react";

const TalksTag = ({ tag, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(tag)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isSelected
          ? "bg-[#002347] text-white"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      {tag}
    </button>
  );
};

export default TalksTag;
