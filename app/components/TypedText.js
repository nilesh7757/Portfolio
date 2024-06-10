// components/TypedText.js
"use client"
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowDownLong} from "react-icons/fa6";
import Image from 'next/image';
import HorizontalNav from './HorizontalNav';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import './typedtext.css'
import { Poppins } from 'next/font/google';
const inter = Poppins({
  subsets: ['latin-ext'],
  display: 'swap',
  weight:'700',
})
const TypedText = ()=>{
  return (
    <>
    <div className="w-[100%]  static mx-auto overflow-hidden h-[100vh] px-2 sm:top-20 lg:top-0 ">
    <div className='absolute w-[100vw] lg:w-fit flex flex-col items-center lg:right-20 top-20 lg:mt-[5vh] md:mt-[8vh] object-cover  h-[30px]'>
        <Image
        className='rounded-full size-80 w-52 h-fit lg:size-fit'
          src={"NileshMori.jpg"}
          width={300}
          height={40}
        />
        </div>
      <div className="text-3xl items-center text-center w-full lg:items-start  top-[300px]   relative lg:left-20  md:text-4xl {inter.className} font-bold flex flex-col lg:top-16  p-10 lg:gap-y-12 gap-y-4">
        <h1 className='text-purple-700'>Hey</h1> 
        <h1>Nilesh <span className='text-blue-500'>Mori</span></h1>
        <h1><span className='text-red-500'>Fullstack</span> Webdevloper</h1>
        <button className='bg-blue-500 hover:bg-blue-800 text-xl w-fit  px-5 py-2 rounded-lg text-white'><Link className='flex items-center gap-x-1' href="#About">About Me <FaArrowDownLong  /></Link></button>
      <div className="contacts flex gap-x-3">
          <div><Link href="https://github.com/nilesh7757"><FaGithub fill='#3b82f6' /></Link></div>
          <div><Link href="https://www.facebook.com/akash.mori.792/"><FaFacebook fill='#3b82f6'/></Link></div>
          <div className="rounded-full bg-blue-500 w-[1em] h-[1em] flex items-center justify-center"><Link href = "https://www.linkedin.com/in/nilesh-mori-7757n/"><FaLinkedinIn fill='white' size={"0.7em"}  /></Link></div>
          <div className="rounded-full bg-blue-500 flex justify-center items-center w-[1em] h-[1em]"><Link href= "https://www.instagram.com/nilesh_mori_7757/"><FaInstagram fill='white'  size={"0.8em"} /></Link></div>
          <div className="rounded-full bg-blue-500 flex justify-center items-center w-[1em] h-[1em]"><Link href="https://x.com/Programmer7757?t=VP9FEJwB8i_RPSXHwS7chw&s=08"><FaXTwitter fill='white'  size={"0.7em"} /></Link></div>
      </div>
      </div>
        
    </div>
   </>
  );
}
export default TypedText;
