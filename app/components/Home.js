// components/TypedText.js
"use client"
import Link from 'next/link';
import Image from 'next/image';
import "./Home.css"
import { FaLocationArrow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Duru_Sans, Poppins } from 'next/font/google';
import { animate, motion } from 'framer-motion';
import Typed from 'typed.js';
import { useRef,useEffect } from 'react';
const inter = Poppins({
  subsets: ['latin-ext'],
  display: 'swap',
  weight:'700',
})


const iconVariants = (duration) =>({
  initial:{y: -5},
  animate: {
    y:[5,-5],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType:"reverse"
    }
  },
});

const Delay = (delay,xVal) =>({
  hidden:{x:xVal,opacity:0},
  visible:{x:0,opacity:1,transition:{
    duration:0.5,
    delay:delay,
  }},
});

const Nilesh = ()=>{
  const el = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FullStack <span style="color:red">Webdevloper</span>', 'Android <span style="color:red">Webdevloper</span>','A.I. <span style="color:red">Webdevloper</span>'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
    <div id="#Home" className="home w-[100vw] min-w-[100vw] lg:w-[90%] lg:h-screen h-[120vh] mx-auto relative top-14  ">
    <motion.div
      initial={{
        opacity:"0",
        y:-20,
      }}
      animate={{
        opacity:"1",
        y:0
      }}

      transition={{
        duration:0.5,
        delay:0.5
      }}

      className='img absolute w-[300px] rounded-full -top-7 lg:right-11'>
        <Image
        className='rounded-full'
          src={"NileshMori.jpg"}
          width={300}
          height={40}
          layout='responsive'
          alt='Nileshmori'
        />
        </motion.div>
      <div className="s-intro absolute  lg:left-11 md:text-5xl sm:text-4xl text-3xl font-bold flex flex-col gap-y-5">
        <motion.h1
          variants={Delay(1,100)}
          initial="hidden"
          animate="visible"
         className='text-purple-700'>Hey
         </motion.h1> 
        <motion.h1
          variants={Delay(1.5,-100)}
          initial="hidden"
          animate="visible"
        >Nilesh <span className='text-blue-500'>Mori</span></motion.h1>
        <motion.h1
          variants={Delay(2,100)}
          initial="hidden"
          animate="visible"
        >
          <span ref={el}></span>
          {/* <span className='text-red-500'>Fullstack</span> Webdevloper */}
        </motion.h1>
        <motion.button 
        whileHover={{scale:"1.05"}} 
        variants={Delay(2.25,-100)}
        initial="hidden"
        animate="visible"
        className='bg-blue-500 hover:bg-blue-800 md:text-xl text-lg w-fit  px-5 py-2 rounded-lg text-white'><Link className='flex items-center gap-3' href="#About">About Me <FaLocationArrow  /></Link></motion.button>
      <motion.div 
        variants={Delay(2.5,100)}
        initial="hidden"
        animate="visible"
        className="contacts flex gap-x-3">
          <motion.div
          whileHover={{scale:"1.05"}} variants={iconVariants(2.5)} initial="initial" animate="animate"><Link href="https://github.com/nilesh7757"><FaGithub fill='#3b82f6' /></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}} variants={iconVariants(3)} initial="initial" animate="animate"><Link href="https://www.facebook.com/akash.mori.792/"><FaFacebook fill='#3b82f6'/></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}} variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-full bg-blue-500 w-[1em] h-[1em] flex items-center justify-center"><Link href = "https://www.linkedin.com/in/nilesh-mori-7757n/"><FaLinkedinIn fill='white' size={"0.7em"}  /></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}} variants={iconVariants(4)} initial="initial" animate="animate"className="rounded-full bg-blue-500 flex justify-center items-center w-[1em] h-[1em]"><Link href= "https://www.instagram.com/nilesh_mori_7757/"><FaInstagram fill='white'  size={"0.8em"} /></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}} variants={iconVariants(6)} initial="initial" animate="animate"className="rounded-full bg-blue-500 flex justify-center items-center w-[1em] h-[1em]"><Link href="https://x.com/Programmer7757?t=VP9FEJwB8i_RPSXHwS7chw&s=08"><FaXTwitter fill='white'  size={"0.7em"} /></Link></motion.div>
      </motion.div>
      </div>
    </div>

   </>
  );
}
export default Nilesh; 