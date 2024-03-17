import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <div id="project" className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">jects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up" className="transform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/project1.png"
            alt="project1"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="transform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/project2.png"
            alt="project1"
            layout="fill"
            className="object-contain "
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="600" className="transform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/project3.png"
            alt="project1"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="900" className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/project4.png"
            alt="project4"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="1200" className="transform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/project5.png"
            alt="project5"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="1500" className="transform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
          <Image
            src="/images/project6.png"
            alt="project6"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
