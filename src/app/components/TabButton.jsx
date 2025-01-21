import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-[#002347] border-b-2 border-[#002347]'
    : 'text-[#687771] hover:border-b-2 hover:border-[#002347]';

  return (
    <button onClick={selectTab} className="px-3 py-2">
      <p className={`font-semibold ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
