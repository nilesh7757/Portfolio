import React from 'react'
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaAndroid } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
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
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <RiNextjsFill size={"10em"} />
            <div className='font-bold text-xl'>NextJs</div>
        </div>
        <div className='text-center m-2 Box flex flex-col items-center rounded-lg py-4'>
            <FaReact size={"10em"} />
            <div className='font-bold text-xl'>ReactJs</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaGithub size={"10em"} />
            <div className='font-bold text-xl'>GitHub</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <DiMongodb size={"10em"} />
            <div className='font-bold text-xl'>MongoDB</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaAndroid size={"10em"} />
            <div className='font-bold text-xl'>Android</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaHtml5 size={"10em"} />
            <div className='font-bold text-xl'>Html</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaCss3 size={"10em"} />
            <div className='font-bold text-xl'>Css</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <IoLogoJavascript size={"10em"} />
            <div className='font-bold text-xl'>JavaScript</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaJava size={"10em"} />
            <div className='font-bold text-xl'>Java</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <TbBrandCpp size={"10em"} />
            <div className='font-bold text-xl'>C++</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <RiTailwindCssFill size={"10em"} />
            <div className='font-bold text-xl'>Tailwind Css</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaNodeJs size={"10em"} />
            <div className='font-bold text-xl'>NodeJs</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <SiKotlin size={"10em"} />
            <div className='font-bold text-xl'>Kotlin</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
            <SiKalilinux size={"10em"} />
            <div className='font-bold text-xl'>Kalilinux</div>
        </div>
        <div className='text-center Box m-2 flex flex-col items-center rounded-lg py-4'>
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
