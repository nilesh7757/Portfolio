import React from 'react'
import Image from 'next/image';
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
// import { FaJava } from "react-icons/fa";
import JavaIcon from '@/public/java';
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiKotlin } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiKalilinux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion';
import "./About.css"
const Skills = () => {
  return (
    <>
    <div id='skill' className='w-full p-5 mx-5'>
        <h3 className='text-2xl text-center font-semibold underline underline-offset-4'>Skills</h3>
      <div className="grid rounded-xl lg:mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5">
        <div className='text-center  Box m-2 flex flex-col items-center rounded-lg py-4'>
            <RiNextjsLine size={"10em"} />
            <div className='font-bold text-xl'>NextJs</div>
        </div>
        <div className='text-center m-2 Box text-[#61DAFB] flex flex-col items-center rounded-lg py-4'>
            <FaReact size={"10em"} />
            <div className='font-bold text-xl'>ReactJs</div>
        </div>
        <div className='text-center Box text-[#181717] m-2 flex flex-col items-center rounded-lg py-4'>
            <FaGithub size={"10em"} />
            <div className='font-bold text-xl'>GitHub</div>
        </div>
        <div className='text-center Box m-2 text-[#47A248] flex flex-col items-center rounded-lg py-4'>
            <SiMongodb size={"10em"} />
            <div className='font-bold text-xl'>MongoDB</div>
        </div>
        <div className='text-center Box m-2 text-[#212121] flex flex-col items-center rounded-lg py-4'>
            <FaAndroid size={"10em"} />
            <div className='font-bold text-xl'>Android</div>
        </div>
        <div className='text-center text-[#E34F26] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaHtml5 size={"10em"} />
            <div className='font-bold text-xl'>Html</div>
        </div>
        <div className='text-center text-[#1572B6] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaCss3Alt size={"10em"} />
            <div className='font-bold text-xl'>Css</div>
        </div>
        <div className='text-center  text-[#F7DF1E] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <IoLogoJavascript color='black' fill='#F7DF1E' size={"10em"} />
            <div className='font-bold text-xl'>JavaScript</div>
        </div>
        <div className='text-center Box m-2 text-[#007396] flex flex-col items-center rounded-lg py-4'>
            <JavaIcon size={"10em"} />
            <div className='font-bold text-xl'>Java</div>
        </div>
        <div className='text-center text-[#00599C] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <TbBrandCpp size={"10em"} />
            <div className='font-bold text-xl'>C++</div>
        </div>
        <div className='text-center text-[#2298BD] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <RiTailwindCssFill size={"10em"} />
            <div className='font-bold text-xl'>Tailwind Css</div>
        </div>
        <div className='text-center text-[#339933] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaNodeJs size={"10em"} />
            <div className='font-bold text-xl'>NodeJs</div>
        </div>
        <div className='text-center text-[#7F52FF] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <SiKotlin size={"10em"} />
            <div className='font-bold text-xl'>Kotlin</div>
        </div>
        <div className='text-center text-[#557C3E] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <SiKalilinux size={"10em"} />
            <div className='font-bold text-xl'>Kalilinux</div>
        </div>
        <div className='text-center text-[#FFD43B] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaPython size={"10em"} />
            <div className='font-bold text-xl'>Python</div>
        </div>
        {/* <div className='bg-green-500 text-center py-4'>Hi</div>
        <div className='bg-green-500 text-center py-4'>Hi</div>
        <div className='bg-green-500 text-center py-4'>Hi</div>
        <div className='bg-green-500 text-center py-4'>Hi</div>
        <div className='bg-green-500 text-center py-4'>Hi</div>
        <div className='bg-green-500 text-center py-4'>Hi</div> */}

      </div>
    </div>
    </>
  )
}

export default Skills
