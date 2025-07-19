import { useEffect, useState } from "react";
import jsonData from "/src/datas/data.json";
import firstMemberPng from "/src/assets/crew/image-douglas-hurley.png";
import secondMemberPng from "/src/assets/crew/image-mark-shuttleworth.png";
import thirdMemberPng from "/src/assets/crew/image-victor-glover.png";
import fourthMemberPng from "/src/assets/crew/image-anousheh-ansari.png";
import firstMemberWebp from "/src/assets/crew/image-douglas-hurley.webp";
import secondMemberWebp from "/src/assets/crew/image-mark-shuttleworth.webp";
import thirdMemberWebp from "/src/assets/crew/image-victor-glover.webp";
import fourthMemberWebp from "/src/assets/crew/image-anousheh-ansari.webp";

function Crew() {
  const [crewMembers, setCrewMembers] = useState(null);
  const [selectedCrewMembers, setSelectedCrewMembers] = useState(0);

  useEffect(() => {
    setCrewMembers(jsonData.crew);
    document.title = `Crew`;
  }, []);

  if (!crewMembers) {
    return <div className="min-h-screen bg-blue-900">Loading...</div>;
  }

  const crewmember = crewMembers[selectedCrewMembers];

  const images = {
    commander: {
      png: firstMemberPng,
      webp: firstMemberWebp,
    },
    missionspecialist: {
      png: secondMemberPng,
      webp: secondMemberWebp,
    },
    pilot: {
      png: thirdMemberPng,
      webp: thirdMemberWebp,
    },
    flightengineer: {
      png: fourthMemberPng,
      webp: fourthMemberWebp,
    },
  };

  return (
    <div
      className="min-h-screen text-white flex flex-col overflow-hidden 
"
    >
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center
        bg-[url('/src/assets/crew/background-crew-mobile.jpg')]
        md:bg-[url('/src/assets/crew/background-crew-tablet.jpg')]
        2xl:bg-[url('/src/assets/crew/background-crew-desktop.jpg')]"
      />

      <div className="min-h-screen ">
        <main
          className="text-white flexCenter  flex-col 
                m-[1.5rem] pt-0 gap-6 md:m-[2.5rem] 2xl:my-12 2xl:mx-[10.313rem]"
        >
          <h2 className="text-start w-full font-barlowC tracking-[15%]    md:text-[1.25rem]  2xl:text-[1.75rem]  text-sm ">
            <span className="text-white opacity-25 md:text-[20px] tracking-[15%] font-bold  !mr-6 2xl:text-[1.75rem]">
              02
            </span>
            MEET YOUR CREW
          </h2>
          <div
            className="  2xl:flex-row gap-[2rem] flex-col  h-full  flexCenter text-center
                                       2xl:text-start 2xl:mx-0 2xl:gap-8"
          >
            <div
              className=" md:px-[88px] 2xl:px-0 flex flex-1  flex-col 2xl:justify-center 
                                2xl:min-h-screen 2xl:gap-10"
            >
              <div
                className="font-bellefair mb-6  2xl:flex-8 2xl:flex 2xl:flex-col 2xl:justify-center
                                                2xl:mb-0"
              >
                <h2
                  className="md:text-[1.5rem] 2xl:text-[2rem] opacity-[50.42%] 
                                    2xl:mt-0  2xl:p-0 2xl:mb-[1rem] text-18 pb-2 md:pb-4 md:pt-10"
                >
                  {crewmember.role.toUpperCase()}
                </h2>
                <h1 className="text-md md:text-[2.5rem]  2xl:text-[3.5rem] mb-[1.5rem]">
                  {crewmember.name.toUpperCase()}
                </h1>
                <p
                  className="leading-[190%] text-xs md:text-sm md:text-[1rem]  font-barlow text-blue-600 2xl:text-[1.125rem]
                                                    md:line-clamp-3 "
                >
                  {crewmember.bio}
                </p>
              </div>
              <ul
                className="flex justify-center gap-[1rem] pt-[1.5rem] pb-[2rem] 2xl:flex-1
                                                2xl:text-end   2xl:m-0 2xl:p-0 2xl:justify-start"
              >
                {crewMembers.map((member, index) => (
                  <li
                    key={index}
                    className={`bg-white opacity-[17.44%] 2xl:size-[15px] size-[10px] rounded-[50%] cursor-pointer
                                                ${
                                                  selectedCrewMembers === index
                                                    ? `!bg-white !opacity-100`
                                                    : `hover:!opacity-50`
                                                }`}
                    onClick={() => setSelectedCrewMembers(index)}
                  ></li>
                ))}
              </ul>
            </div>

            <div className="w-[100%] flex items-end justify-center 2xl:flex-1 ">
              <img
                src={
                  images[crewmember.role.toLowerCase().replace(" ", "")].webp
                }
                alt={"Douglas Hurley"}
                className="w-[271px] h-[340px] md:w-[446px] md:h-[560px]  2xl:w-[539px] 2xl:h-[676px] object-contain object-bottom"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Crew;
