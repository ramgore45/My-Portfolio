import React from 'react'
import { SkillsItems } from '../data'
import { Link } from 'react-router-dom'

export const Skills = () => {
  return (
    <div id="project" className=" md:max-w-[1080px]  mx-auto p-4 ">
      <div className="text-[3rem] text-gray-400 font-bold">Technical Skills</div>
      <div className=" bg-blue-500 w-[80px] h-[2px]"></div>
      <div className="my-5 flex items-centre md:flex-row flex-col gap-2 justify-start flex-wrap md:items-start">
        {SkillsItems.map((skill) => (
            <div key={skill.id}
                className='h-fit w-fit'
            >
                <img src={`${skill.img}`}
                    className='h-40 w-40 p-5'
                />
            </div>
        ))}
       
      </div>
    </div>
  )
}
