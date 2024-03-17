import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import { PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center mt-[10vh]">
      <Particle />

      <div className="w-[80%] lg:grid-cols-2 grid-cols-1 mx-auto grid gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="md:text-[50px] text-[35px] text-white font-bold">
            Hi, I'm <span className="text-yellow-400">De Dee!</span>
          </h1>

          {/*Typing text effect*/}
          <TextEffect />

          <p className="mt-[2rem] text-[18px] text-[#ffffff92]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            optio distinctio dolor sunt sapiente laboriosam iure quis impedit
            sint officiis. Ducimus perspiciatis cum rem praesentium commodi
            ratione impedit optio aperiam?
          </p>

          {/*Buttons*/}
          <div className="mt-[2rem] sm:flex sm:flex-row sm:space-y-0 sm:space-x-6 flex-col space-y-6 items-center">
            <button className="px-[2rem] py-[1rem] hover:bg-yellow-400 transition-all duration-200 text-[18px] text-black font-bold bg-[#55e6a5] uppercase flex items-center space-x-2">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>

            <button className="flex items-center space-x-2">
                <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
                <p className="text-[20px] font-semibold text-white">Watch The Video</p>
            </button>
          </div>
        </div>

        <div className="w-[500px] lg:flex hidden bg-[#55e6a5] items-center relative h-[500px] rounded-full">
          <Image
            src="/images/u1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
