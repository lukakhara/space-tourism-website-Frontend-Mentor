import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import icon from "/src/assets/shared/logo.svg";
import iconHamburger from "/src/assets/shared/icon-hamburger.svg";
import iconClose from "/src/assets/shared/icon-close.svg";
import NavigationItems from "./NavigationItems";

function Navigation() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside menu and not on the hamburger button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setisMenuOpen(false);
      }
    };

    // Only add listener if menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="h-full py-6 sm:pt-[2.5rem] gap-8 w-full flex text-white md:justify-around md:py-0 2xl:pt-[2.5rem] bg-inherit">
        <div className="w-1/2 2xl:w-1/2 md:w-[13%] flex md:items-center">
          <img
            className="size-[40px] md:size-[48px] ml-6 2xl:ml-16"
            src={icon}
            alt="logo"
          />
          <div className="hidden 2xl:flex 2xl:w-full 2xl:ml-16 2xl:z-14 2xl:left-[50px] 2xl:relative h-[1px] sm:w-[30%] relative border-white opacity-[25%] border-[0.01px] z-11"></div>
        </div>

        <button
          ref={buttonRef}
          className="z-20 w-1/2 md:w-[17%] flex justify-end items-center md:hidden"
          onClick={() => setisMenuOpen(!isMenuOpen)}
        >
          <img
            className="mr-6 cursor-pointer p-8"
            src={isMenuOpen ? iconClose : iconHamburger}
            alt={isMenuOpen ? "iconHamburger" : "iconClose"}
          />
        </button>

        <ul
          ref={menuRef}
          className={`gap-3rem pt-32 text-[1rem] gap-8 tracking-wider md:bg-white/10 backdrop-blur-sm pl-16  
            fixed h-screen bg-[rgb(11,13,12,15%)] w-2/3 top-0 right-0 flex z-10 flex-col  
            text-nowrap transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }
            md:h-[96px] md:w-[83%] md:relative md:flex-row md:justify-around md:items-center md:translate-x-0 
            md:gap-12 md:bg-transparent md:py-[2.406rem] 2xl:w-1/2 2xl:z-13 2xl:relative 2xl:px-16 2xl:gap-[3rem]`}
        >
          <NavigationItems
            to={"/"}
            activePage={activePage}
            number={"00"}
            title={"HOME"}
            className={`2xl:ml-[6rem]`}
            setActivePage={setActivePage}
            onClick={() => setisMenuOpen(false)}
          />
          <NavigationItems
            to={"/destination"}
            activePage={activePage}
            number={"01"}
            title={"DESTINATION"}
            setActivePage={setActivePage}
            onClick={() => setisMenuOpen(false)}
          />
          <NavigationItems
            to={"/crew"}
            activePage={activePage}
            number={"02"}
            title={"CREW"}
            setActivePage={setActivePage}
            onClick={() => setisMenuOpen(false)}
          />
          <NavigationItems
            to={"/technology"}
            activePage={activePage}
            number={"03"}
            title={"TECHNOLOGY"}
            className={`2xl:mr-16`}
            setActivePage={setActivePage}
            onClick={() => setisMenuOpen(false)}
          />
        </ul>
      </header>
      <Outlet />
    </>
  );
}

export default Navigation;
