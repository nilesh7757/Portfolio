// components/TypedText.js
"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HorizontalNav from './HorizontalNav';
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
    <div className="w-[100%] mx-auto h-[100vh] px-2 items-center lg:justify-between sm:mt-20 flex-col lg:flex">
    <div className='absolute w-[100vw] lg:w-fit flex flex-col items-center lg:right-20 top-36 lg:mt-[5vh] md:mt-[8vh] sm:mt-[6vh] mt-[0px] object-cover  h-[30px]'>
        <Image
        className='rounded-full'
          src={"NileshMori.jpg"}
          width={300}
          height={40}
        />
        </div>
      <div className="text-4xl items-center text-center w-full lg:w-fit lg:items-start  mt-[500px] absolute lg:left-20  md:text-4xl lg:text-5xl {inter.className} font-bold flex flex-col lg:mt-16 sm:mt-[27rem] mt-[10px] p-10 gap-y-10 sm:gap-y-12">
        <h1 className='text-purple-700'>Hey</h1> 
        <h1>Nilesh <span className='text-blue-500'>Mori</span></h1>
        <h1><span className='text-red-500'>Fullstack</span> Webdevloper</h1>
        <button className='bg-blue-500 hover:bg-blue-800 text-xl w-fit px-5 py-2 rounded-lg text-white'>About Me</button>
      <div className="contacts">

      </div>
      </div>
        
    </div>
   </>
  );
}
export default TypedText;
