import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[#55e6a5] text-[20px] font-bold uppercase mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] font-bold text-white mb-[3rem] capitalize">
            Transforming <span className="text-yellow-400">Vision</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-400 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              soluta. Dicta ipsa voluptate minus nostrum praesentium hic illo
              autem officia provident dolores, a blanditiis. Fugit earum
              repellat iusto quaerat facere.
            </p>
          </div>

          <button className="px-[2rem] py-[1rem] hover:bg-yellow-400 transition-all duration-200 text-[18px] text-black font-bold bg-[#55e6a5] uppercase flex items-center space-x-2">
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>

        <div data-aos='fade-left' className="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] md:mx-0 mx-auto lg:mt-0 mt-[2rem] relative">
          <Image
            src="/images/about.jpg"
            alt="about"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />

          <div className="absolute w-[100%] h-[100%] bg-[#55e6a5] top-[-2rem] right-[-2rem] z-[10]">

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
