import React from 'react';

function IconWithTooltip({ IconComponent, tooltipText }) {
  return (
    <div className="relative">
      <div className="group py-1">
        <IconComponent className={`transition-colors duration-300 text-white text-3xl cursor-pointer group-hover:text-[#9796F0]`} />
        <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
          {tooltipText}
        </div>
      </div>
    </div>
  );
}

export default IconWithTooltip;
