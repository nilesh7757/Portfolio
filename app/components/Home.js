// components/TypedText.js
"use client"
import Link from 'next/link';
import { FaArrowDownLong} from "react-icons/fa6";
import Image from 'next/image';
import "./Home.css"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
const inter = Poppins({
  subsets: ['latin-ext'],
  display: 'swap',
  weight:'700',
})
const Nilesh = ()=>{
  return (
    <>
    <div id="#Home" className="home w-[100vw] min-w-[100vw] lg:w-[90%] lg:h-screen h-[120vh] mx-auto relative top-14  ">
    <motion.div
      initial={{
        opacity:"0",
      }}
      whileInView={{
        opacity:"1"
      }}

      transition={{
        duration:"0.3"
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
      <div className="s-intro absolute lg:left-11 text-5xl font-bold flex flex-col gap-y-5">
        <motion.h1
          initial={{
            position:"relative",
            left:"-10%",
            opacity:"0",
          }}
          animate={{
            left:"0%",
            opacity:"1",
          }}

          transition={{
            duration:"0.7"
          }}
         className='text-purple-700'>Hey
         </motion.h1> 
        <motion.h1
          initial={{
            position:"relative",
            right:"-10%",
            opacity:"0"
          }}

          animate={{
            right:"0",
            opacity:"1"
          }}
          transition={{
            duration:"0.7"
          }}
        >Nilesh <span className='text-blue-500'>Mori</span></motion.h1>
        <motion.h1
          initial={{
            position:"relative",
            left:"-10%",
            opacity:"0",
          }}
          animate={{
            left:"0%",
            opacity:"1"
          }}

          transition={{
            duration:"0.7"
          }}
        ><span className='text-red-500'>Fullstack</span> Webdevloper</motion.h1>
        <motion.button whileHover={{scale:"1.05"}} className='bg-blue-500 hover:bg-blue-800 text-xl w-fit  px-5 py-2 rounded-lg text-white'><Link className='flex items-center gap-x-1' href="#About">About Me <FaArrowDownLong  /></Link></motion.button>
      <div className="contacts flex gap-x-3">
          <motion.div
          whileHover={{scale:"1.05"}}><Link href="https://github.com/nilesh7757"><FaGithub fill='#3b82f6' /></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}}><Link href="https://www.facebook.com/akash.mori.792/"><FaFacebook fill='#3b82f6'/></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}} className="rounded-full bg-blue-500 w-[1em] h-[1em] flex items-center justify-center"><Link href = "https://www.linkedin.com/in/nilesh-mori-7757n/"><FaLinkedinIn fill='white' size={"0.7em"}  /></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}} className="rounded-full bg-blue-500 flex justify-center items-center w-[1em] h-[1em]"><Link href= "https://www.instagram.com/nilesh_mori_7757/"><FaInstagram fill='white'  size={"0.8em"} /></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}} className="rounded-full bg-blue-500 flex justify-center items-center w-[1em] h-[1em]"><Link href="https://x.com/Programmer7757?t=VP9FEJwB8i_RPSXHwS7chw&s=08"><FaXTwitter fill='white'  size={"0.7em"} /></Link></motion.div>
      </div>
      </div>
    </div>

   </>
  );
}
export default Nilesh; 