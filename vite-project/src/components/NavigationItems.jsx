import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavigationItems = ({ to, number, title, className = "" ,setActivePage,onClick }) => {
  return (
    <li className={`${className}`} onClick={() => setActivePage(title)}>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `relative tracking-[2px] font-barlowC
                  ${
                    isActive
                      ? "border-r-4 border-r-white md:border-r-0 md:border-b-4 md:border-b-white"
                      : "hover:border-r-4 hover:border-r-gray-400 md:hover:border-r-0 md:hover:border-b-4 md:hover:border-b-gray-400"
                  }
                  w-[99%] md:w-auto h-full md:h-[96px] flex items-center`
        }
      >
        <span className="tracking-[2.7px] font-bold pr-3">{number}</span>
        {title}
      </NavLink>
    </li>
  );
};

export default NavigationItems;
