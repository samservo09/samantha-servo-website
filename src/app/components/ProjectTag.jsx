import React from 'react';

const ProjectTag = ({ tag, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(tag)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isSelected
          ? 'bg-[#002347] text-white' // Active button styling
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300' // Inactive button styling
      }`}
    >
      {tag}
    </button>
  );
};

export default ProjectTag;
