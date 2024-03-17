import React from 'react'

interface Props {
  title: string;
  year: string;
}
const SkillItem = ({title, year} : Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <div data-aos="flip-up" className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>
        <span>{year}</span>
        <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
          {title}
        </h1>
        <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem libero repellat cum, repellendus beatae doloribus illum quasi earum delectus numquam, iste explicabo veniam aperiam, error vel iure nemo atque?
        </p>
      </div>
    </div>
  )
}

export default SkillItem