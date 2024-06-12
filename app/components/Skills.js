"use client"
import React from 'react'
import Image from 'next/image';
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
// import JavaIcon from '@/public/java';
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiKotlin } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiKalilinux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion';
import { createContext } from 'react';
import "./About.css"

const box = (xInd,d)=>({
    intial:{x:xInd,scale:1},
    exit:{scale:0,transition:{
        duration:0.3,},
        delay:0.5,
    },
    show:{scale:1.05,x:0,transition:{
        duration:0.3,
        delay:d,
    }}
})

const Skills = () => {
  return (
    <>
    <div id='skill' className='w-full p-5 mx-5'>
        <h3 className='text-2xl mb-5 text-center font-semibold underline underline-offset-4'>Skills</h3>
      <div className="grid rounded-xl gap-y-4 lg:mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5">
        <motion.div
            variants={box(0,0.2)}
            whileInView="show"
            initial = "intial"
            exit="exit"
            className='text-center bg-white  Box m-2 flex flex-col items-center rounded-lg py-4'>
            <RiNextjsLine size={"10em"} />
            <div className='font-bold text-xl'>NextJs</div>
        </motion.div>
        <motion.div 
             variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center bg-white m-2 Box text-[#61DAFB] flex flex-col items-center rounded-lg py-4'>
            <FaReact size={"10em"} />
            <div className='font-bold text-xl'>ReactJs</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
            whileInView="show"
            initial = "intial"
            exit="exit"
            className='text-center Box text-[#181717] m-2 flex flex-col items-center rounded-lg py-4'>
            <FaGithub size={"10em"} />
            <div className='font-bold text-xl'>GitHub</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
            whileInView="show"
            initial = "intial"
            exit="exit"
            className='text-center Box m-2 text-[#47A248] flex flex-col items-center rounded-lg py-4'>
            <SiMongodb size={"10em"} />
            <div className='font-bold text-xl'>MongoDB</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center Box m-2 text-[#212121] flex flex-col items-center rounded-lg py-4'>
            <FaAndroid size={"10em"} />
            <div className='font-bold text-xl'>Android</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center text-[#E34F26] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaHtml5 size={"10em"} />
            <div className='font-bold text-xl'>Html</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center text-[#1572B6] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaCss3Alt size={"10em"} />
            <div className='font-bold text-xl'>Css</div>
        </motion.div>
        <motion.div className='text-center  text-[#F7DF1E] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <IoLogoJavascript color='black' fill='#F7DF1E' size={"10em"} />
            <div className='font-bold text-xl'>JavaScript</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center Box m-2 text-[#007396] flex flex-col items-center rounded-lg py-4'>
            <FaJava size={"10em"} />
            <div className='font-bold text-xl'>Java</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center text-[#00599C] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <TbBrandCpp size={"10em"} />
            <div className='font-bold text-xl'>C++</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center text-[#2298BD] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <RiTailwindCssFill size={"10em"} />
            <div className='font-bold text-xl'>Tailwind Css</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center text-[#339933] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaNodeJs size={"10em"} />
            <div className='font-bold text-xl'>NodeJs</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center text-[#7F52FF] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <SiKotlin size={"10em"} />
            <div className='font-bold text-xl'>Kotlin</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center text-[#557C3E] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <SiKalilinux size={"10em"} />
            <div className='font-bold text-xl'>Kalilinux</div>
        </motion.div>
        <motion.div 
            variants={box(0,0.2)}
             whileInView="show"
             initial = "intial"
             exit="exit"
            className='text-center text-[#FFD43B] Box m-2 flex flex-col items-center rounded-lg py-4'>
            <FaPython size={"10em"} />
            <div className='font-bold text-xl'>Python</div>
        </motion.div>
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
