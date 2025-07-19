import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = `Space Tourism Technology`;
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col overflow-hidden">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat min-h-screen
          bg-[url('/src/assets/home/background-home-mobile.jpg')] 
          md:bg-[url('/src/assets/home/background-home-tablet.jpg')] 
          2xl:bg-[url('/src/assets/home/background-home-desktop.jpg')]"
      />

      <main
        className="flex-1 w-full max-w-[1440px] mx-auto p-6  
              md:px-10 md:py-32 md:gap-[4.125rem]
              2xl:px-[10.313rem] 2xl:py-[8rem] flex flex-col md:flexCenter 
              2xl:flex-row 2xl:items-start 2xl:justify-between "
      >
        <div
          className="text-center  flex-col  gap-4 flex
                 2xl:px-0 2xl:items-start 2xl:justify-start md:px-[5.5rem] md:gap-6 2xl:text-start
                 2xl:w-[540px]"
        >
          <h2 className="text-sm md:text-lg font-barlowC w-full  tracking-[4px]  text-blue-600  ">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="text-4xl md:text-6xl font-bellefair w-full ">
            {" "}
            SPACE{" "}
          </h1>
          <p
            className=" text-xs md:text-18 font-barlow text-blue-600 text-center 2xl:m-0 2xl:text-start
                              line-clamp-3 "
          >
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="flexCenter flex-1 content-start  flex-col  2xl:items-end! 2xl:px-0  md:px-[5.5rem] ">
          <button
            className="font-[bellefairRegular] text-18 md:text-2xl size-[150px] 
                md:size-[242px] lg:size-[272px] bg-white text-blue-900 cursor-pointer exploreBtn
               "
          >
            EXPLORE
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
