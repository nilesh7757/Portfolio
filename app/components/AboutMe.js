"use client"
import React from 'react'
import Image from 'next/image'
// import { createContext } from 'react';
import "./About.css"
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <>
      <div id='About'  className='mx-24 lg:flex flex-col h-[100vh] lg:justify-center'>
      <h2 className='text-3xl mx-auto text-center font-semibold underline underline-offset-4' >About Me</h2>
    <div className='relative px-16 flex flex-col lg:flex-row lg:justify-between items-center'>
      <motion.div
      whileHover={{
        scale:"1.05"
      }}
      className="Box lg:relative lg:left-48 rounded-lg h-[80] overflow-hidden w-[450] mt-7 bg-red-500  border-2 border-neutral-600 "><Image
      src={"./About.png"}
      width={"250"}
      height={"30"}
      alt='About'
      ></Image></motion.div>
      <motion.div 
      whileHover={{
        scale:"1.05"
      }}
      className="Box rounded-lg h-fit lg:h-[30vh] lg:w-[40vw]  w-[80vw] mt-7 p-2  border-2 border-neutral-600 ">
        <h3 className='text-2xl font-medium'>Nilesh Mori</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam nobis error amet eaque alias! Exercitationem a vitae similique, dignissimos molestias sunt laborum, numquam natus, quod autem alias illum soluta! Omnis corrupti cupiditate dolor ea incidunt dolores voluptates, nam provident quasi aperiam fugiat aliquid deleniti eos.
        </p>
      </motion.div>
    </div>
      <div className="btn w-full flex justify-center mt-5">
      <motion.button
       whileHover={{
        scale:1.05,
       }}
       className='bg-blue-500 px-1 py-2 Box text-white font-semibold rounded-lg mx-auto'
       >
        Download CV</motion.button>
      </div>
      </div>
    </>
  )
}

export default AboutMe
