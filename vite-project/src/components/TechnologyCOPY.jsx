import TechnolohyBgDesktop from "/src/assets/technology/background-technology-desktop.jpg";
import TechnolohyBgMobile from "/src/assets/technology/background-technology-mobile.jpg";
import TechnolohyBgTablet from "/src/assets/technology/background-technology-tablet.jpg";

import Navigation from "./Navigation";
import launchVehiclePort from  "/src/assets/technology/image-launch-vehicle-portrait.jpg";
import launchVehicleLand from "/src/assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportPort from "/src/assets/technology/image-spaceport-portrait.jpg";
import spaceportLand from "/src/assets/technology/image-spaceport-landscape.jpg";
import spaceCapsulePort from"/src/assets/technology/image-space-capsule-portrait.jpg";
import spaceCapsuleLand from "/src/assets/technology/image-space-capsule-landscape.jpg";
import jsonData from "/src/datas/data.json";
import { useEffect, useState } from "react";

function Technology(){
    const [technologies,setTechnologies] = useState(null);
    const [selectedTechnology,setSelectedTechnology] = useState(0);

    useEffect(() => {
        setTechnologies(jsonData.technology);
        document.title = `Space Tourism Technology`;
    },[])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
    }, []);

    const images = {
        "Launch vehicle": {
            portrait: launchVehiclePort,
            landscape: launchVehicleLand
        },
        "Spaceport": {
            portrait: spaceportPort,
            landscape: spaceportLand
        },
        "Space capsule": {
            portrait: spaceCapsulePort,
            landscape: spaceCapsuleLand
        }
    }

    if(!technologies){
        return <div className="min-h-screen bg-blue-900 flexCenter text-[2rem] text-white">Loading...</div>;
    }
    
    const technology = technologies[selectedTechnology];
    console.log(images[technology.name].landscape);

    return (
    <div className="relative min-h-screen">
        <div 
          className="fixed inset-0 bg-cover bg-center  -z-10 bg-no-repeat  min-h-screen
          bg-[url('./src/assets/technology/background-technology-mobile.jpg')]
          md:bg-[url('./src/assets/technology/background-technology-tablet.jpg')]
          2xl:bg-[url('./src/assets/technology/background-technology-desktop.jpg')]" >
        </div>
        <div className= "relative flex-1 flex flex-col  " >
            <Navigation/>
            <main className="border-red-400 border-2
            text-white  mx-6 mt-6 mb-12">
                 <h2 className=" w-full font-barlowC tracking-[15%]    md:text-[1.25rem]  2xl:text-[1.75rem]  
                 md:text-start  text-[1rem] text-center  text-sm  mb-6">
                    <span className="text-white opacity-25 md:text-[20px] tracking-[15%] font-bold  !mr-6 2xl:text-[1.75rem]">03</span> SPACE LAUNCH 101
                </h2>
                <div className="w-full flex 2xl:flex-row flex-col  gap-[2rem]  2xl:gap-[2rem]">
                    <div className="flex-1 gap-[2.5rem]   2xl:gap-[4rem] 2xl:p-0 2xl:flex-row 2xl:w-1/2 order-2 pt-[20rem]
                                    flex flex-col text-center items-center  ">
                        <div className="border-3 font-bellefair 2xl:m-0 md:mt-[4rem]  flexCenter flex-row 2xl:flex-col gap-8  text-center text-white">
                            {technologies.map((item,index) => (
                                    <div key={index}
                                        className={`flexCenter cursor-pointer border-[0.1px] border-[hsl(0, 0%, 25%))]  
                                            2xl:size-[80px] rounded-[50%] size-[40px] md:size-[56px]  text-[1.125rem] 2xl:text-[2rem] 
                                        ${selectedTechnology === index ? 'text-black bg-white ':'' }`}
                                        onClick={() => setSelectedTechnology(index)}>
                                        {index+1}</div>
                            ))}
                        </div>
                        <div className="border-4 max-w-md flex flex-col gap-8 font-bellefair">
                            <h2 className="text-18  md:text-md  2xl:text-xl opacity-[50.42%] ">THE TERMINOLOGY...</h2>
                            <h1 className="text-md    md:text-[2.5rem]  2xl:text-[3.5rem]">{technology.name.toUpperCase()}</h1>
                            <p  className="text-xs  md:text-sm   2xl:text-18 text-blue-600 leading-[180%]">{technology.description}</p>
                        </div>
                        {windowWidth >= 768 && <img
                        className="flex-1 min-w-full  mt-16  object-cover   bg-center bg-no-repeat mb-8    
                                   2xl:translate-none  2xl:h-auto 2xl:min-w-full
                                2xl:object-cover  overflow-hidden
                                md:h-[357px] 2xl:static "
                        src={images[technology.name].portrait}
                        alt={technology.name}
                        />}
                    </div>
                        {/* <img className="md:h-[357px]  object-cover order-1  bg-center bg-no-repeat mb-[2rem]  absolute min-w-[100%]  
                           h-[258px] left-0 2xl:order-none 2xl:static 2xl:translate-none  2xl:h-[100%] 2xl:min-w-[635px]
                          2xl:w-[635px]  2xl:max-h-[736px] 2xl:object-contain 2xl:mx-auto 2xl:my-[4.188rem] overflow-hidden
                          mt-16 "
                        src={images[technology.name].landscape} // fallback
                        srcSet={`${images[technology.name].landscape} 1023w, ${images[technology.name].portrait} 1440w`}
                        sizes="(max-width: 1439px) 100vw, 635px"
                        alt={technology.name}

                        src={window.innerWidth >= 1440  ?
                        images[technology.name].portrait : 
                        images[technology.name].landscape}
                        src={images[technology.name].landscape}
                        /> */}
                     <img
                        className="h-auto min-w-full    object-cover order-1  bg-center bg-no-repeat   absolute  
                                left-0  overflow-hidden md:hidden "
                        src={windowWidth >= 1440 ? images[technology.name].portrait : images[technology.name].landscape}
                        alt={technology.name}
                    />

                         
                </div>
            </main>
        </div>
    </div>
        )
}

export default Technology


