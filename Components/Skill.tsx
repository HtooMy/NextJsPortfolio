import React from 'react'
import SkillItem from './SkillItem'
import SkillLanguage from './SkillLanguage'

const Skill = () => {
  return (
    <div className='pt-[4rem] md:-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>
            Education & <span className='text-yellow-400'>Skill</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center text-white'>
            <div>
                <SkillItem title='React Developer' year='2018 - 2022' />
                <SkillItem title='MERN Developer' year='2018 - 2022'/>
                <SkillLanguage
                   skill1='html'
                   skill2='css'
                   skill3='javascript'
                   level1='w-[91%]'
                   level2='w-[88%]'
                   level3='w-[80%]'
                />
            </div>
            <div>
                <SkillItem title='Java Developer' year='2018 - 2022' />
                <SkillItem title='Fullstack Developer' year='2018 - 2022'/>
                <SkillLanguage
                   skill1='java'
                   skill2='react'
                   skill3='spring boot'
                   level1='w-[91%]'
                   level2='w-[88%]'
                   level3='w-[80%]'
                />
            </div>
        </div>
    </div>
  )
}

export default Skill
