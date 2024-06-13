import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
const Delay = (delay,edelay,xVal) =>({
  hidden:{x:xVal,opacity:0},
  visible:{x:0,opacity:1,transition:{
    duration:0.4,
    delay:delay,
  }},
  exit:{
    x:xVal,opacity:0,
    transition:{
      duration:0.4,
      delay:edelay,
    }
  },
  hover:{
    fontWeight:700,
    scale:1.05,
    color:"#3b82f6"
  }

});

const HorizontalNav = () => {
  return (
    <div className='bg-blue-50 w-[40%] h-[100vh] px-4 pt-5 fixed left-0 top-0'>
        {/* <h1>HELLO</h1> */}
      <ul className='text-xl flex pt-10 flex-col text-black gap-8'>
            <motion.li variants={Delay(0,1,100)} initial="hidden" exit="exit" animate="visible" whileHover="hover"><Link href = "#Home">Home</Link></motion.li>
            <motion.li variants={Delay(0.25,0.75,100)} initial="hidden" exit="exit" animate="visible" whileHover="hover"><Link href = "#About">About Me</Link></motion.li>
            <motion.li variants={Delay(0.5,0.5,100)} initial="hidden" exit="exit" animate="visible" whileHover="hover"><Link href = "#skill">Skills</Link></motion.li>
            <motion.li variants={Delay(0.75,0.25,100)} initial="hidden"exit="exit" animate="visible" whileHover="hover"><Link href = "#">Education</Link></motion.li>
            <motion.li variants={Delay(1,0,100)} initial="hidden" exit="exit" animate="visible" whileHover="hover"><Link href = "#">Contact Me</Link></motion.li>
          </ul>
    </div>
  )
}

export default HorizontalNav