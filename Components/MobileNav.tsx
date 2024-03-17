import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
  nav:boolean;
  closeNav: () => void;
}

const MobileNav = ({nav, closeNav}: Props) => {

  const navAnimation = nav?"translate-x-0" : "translate-x-[-100%]"
  return (
    <div className={`fixed ${navAnimation}  transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
            <div onClick={closeNav} className='nav-link-mobile'><a href="#top">HOME</a></div>
            <div onClick={closeNav} className='nav-link-mobile'><a href="#service">SERVICES</a></div>
            <div onClick={closeNav} className='nav-link-mobile'><a href="#about">ABOUT</a></div>
            <div onClick={closeNav} className='nav-link-mobile'><a href="#project">PROJECT</a></div>
            <div onClick={closeNav} className='nav-link-mobile'><a href="#blog">BLOG</a></div>
            <div onClick={closeNav} className='nav-link-mobile'><a href="#contact">CONTACT</a></div>
        </div>
        <div 
        onClick={closeNav}
        className='cursor-pointer absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400'>
            <XMarkIcon />
        </div>
    </div>
  )
}

export default MobileNav
