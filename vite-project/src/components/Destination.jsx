import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import desnationBg from "/src/assets/destination/background-destination-desktop.jpg";
import desnationBgTablet from "/src/assets/destination/background-destination-tablet.jpg";
import desnationBgMobile from "/src/assets/destination/background-destination-mobile.jpg";
import jsonData from "/src/datas/data.json";

// Import all images statically
import moonPng from "/src/assets/destination/image-moon.png";
import moonWebp from "/src/assets/destination/image-moon.webp";
import marsPng from "/src/assets/destination/image-mars.png";
import marsWebp from "/src/assets/destination/image-mars.webp";
import europaPng from "/src/assets/destination/image-europa.png";
import europaWebp from "/src/assets/destination/image-europa.webp";
import titanPng from "/src/assets/destination/image-titan.png";
import titanWebp from "/src/assets/destination/image-titan.webp";

function Destination() {
  const [destinations, setDestinations] = useState(null);
  const [selectedDestination, setselectedDestination] = useState(0);

  useEffect(() => {
    setDestinations(jsonData.destinations);
    document.title = `Destination`;
  }, []);
  if (!destinations) {
    return <div className="min-h-screen bg-blue-900">Loading...</div>;
  }

  const IMAGES = {
    moon: {
      png: moonPng,
      webp: moonWebp,
    },
    mars: {
      png: marsPng,
      webp: marsWebp,
    },
    europa: {
      png: europaPng,
      webp: europaWebp,
    },
    titan: {
      png: titanPng,
      webp: titanWebp,
    },
  };

  const destination = destinations[selectedDestination];

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat 
                    bg-[url('src/assets/destination/background-destination-mobile.jpg')]
                    md:bg-[url('/src/assets/destination/background-destination-tablet.jpg')]
                    2xl:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]"
      ></div>
      <main
        className="w-full mx-auto p-6  flex flex-col 2xl:gap-0   md:items-start items-center    text-white
                            gap-4 md:gap-6 md:p-10 2xl:py-12 2xl:px-[10.313rem]"
      >
        <h2 className="font-barlowC tracking-[15%] text-base 2xl:p-0 2xl:mb-12 2xl:text-[1.75rem] md:text-[1.25rem]  pb-6 ">
          <span className="text-white opacity-25 md:text-[20px] tracking-[15%] font-bold  !mr-6 2xl:text-[1.75rem]">
            01
          </span>
          PICK YOUR DESTINATION
        </h2>
        <div
          className="flexCenter flex-col 2xl:flex-row justify-center 2xl:items-center 2xl:justify-items-end w-full 
                                        gap-8  "
        >
          <div className="2xl:box-border flex-1  flexCenter  ">
            <img
              className="2xl:m-0 2xl:p-0 size-[150px] md:size-[300px] md:my-[2.625rem]  md:mx-[12.125rem] 2xl:size-[480px]   xl:size-[480px] 2xl:my-[7.938rem] 2xl:mx-[1.844rem] "
              src={IMAGES[destination.name.toLowerCase()].webp}
              alt={destination.name}
            />
          </div>
          <div className="md:w-[540px] 2xl:items-start flex items-center flex-col  flex-1  2xl:mx-0">
            <ul className="flex text-xxs md:text-sm mb-6 gap-8 2xl:text-base text-blue-600 2xl:mb-10 ">
              {destinations.map((dest, index) => (
                <li
                  key={index}
                  className={` font-barlowC tracking-[15%]   pb-6
                                                                     2xl:pb-10  h-8  cursor-pointer relative 
                                        ${
                                          selectedDestination === index
                                            ? " text-white border-b-3   border-white"
                                            : "hover:border-b-3 border-white hover:text-white "
                                        }`}
                  onClick={() => setselectedDestination(index)}
                >
                  {dest.name.toUpperCase()}
                </li>
              ))}
            </ul>
            <h1 className="text-3xl font-bellefair 2xl:pb-4 md:text-[5rem] 2xl:text-[6rem] font-bellefair pb-4">
              {destination.name.toUpperCase()}
            </h1>
            <p
              className="font-barlow text-center   2xl:text-start
                                 text-blue-600 md:text-sm 2xl:text-18 "
            >
              {destination.description}
            </p>
            <div className="h-[1px] w-[100%] my-[1.5rem]  border-white  opacity-[25%] border-[0.01px] 2xl:my-10 "></div>
            <div
              className="flex md:justify-around 2xl:gap-8 md:w-full 2xl:justify-start flex-col md:flex-row items-center 
                                gap-6 text-center 2xl:text-start "
            >
              <div className="font-bellefair">
                <h3 className="font-barlowC tracking-[2px] text-blue-600  text-[0.875rem]">
                  AVG. DISTANCE
                </h3>
                <h1 className="text-lg  font-extralight">
                  {destination.distance.toUpperCase()}
                </h1>
              </div>
              <div className="font-bellefair">
                <h3 className="font-barlowC tracking-[2px] text-blue-600 text-[0.875rem] ">
                  EST.TRAVEL TIME
                </h3>
                <h1 className="text-lg  font-extralight">
                  {destination.travel.toUpperCase()}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Destination;
