import React from "react";
import Image from "next/image";
import { ChatBubbleLeftRightIcon, UserCircleIcon } from "@heroicons/react/16/solid";

const Blog = () => {
  return (
    <div id="blog" className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        MY <span className="text-yellow-400">BLOG</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div data-aos="fade-right">
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/blog1.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              December 10, 2023
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                    <UserCircleIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5]" />
                    <p className="text-white">By Dee</p>
                </div>
                <div className="flex items-center space-x-3">
                    <ChatBubbleLeftRightIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5]" />
                    <p className="text-white">Comments(2)</p>
                </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">NextJS Fullstack Developement</p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/blog2.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              December 11, 2023
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                    <UserCircleIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5]" />
                    <p className="text-white">By Dee</p>
                </div>
                <div className="flex items-center space-x-3">
                    <ChatBubbleLeftRightIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5]" />
                    <p className="text-white">Comments(1)</p>
                </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">Java Fullstack Developement</p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="600">
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/blog3.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              December 12, 2023
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                    <UserCircleIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5]" />
                    <p className="text-white">By Dee</p>
                </div>
                <div className="flex items-center space-x-3">
                    <ChatBubbleLeftRightIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5]" />
                    <p className="text-white">Comments(9)</p>
                </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">MERN Fullstack Developement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
