// components/TypedText.js
"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';
import './typedtext.css'

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Android Devlopment", "Web Devlopment", "Artificial Intelligence"],
      typeSpeed: 120,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className='lg:mt-36 sm:mt-16 px-20 flex flex-col'>
    <div className='info lg:text-4xl lg:w-[80%] sm:text-2xl'>
      <h1 className='font-medium'>Hey There,</h1>
      <h1 className='lg:mt-8 sm:mt-5 font-medium'>Im Nilesh <span className='text-[#FF2D00]'>Mori</span></h1>
      <h1 className='lg:mt-8 sm:mt-5 font-medium'>I am <span className="text-blue-500" ref={el}></span></h1>
      <button className='bg-blue-500 lg:mt-8 sm:mt-5 hover:font-bold hover:bg-blue-700 lg:text-xl sm:text-xl px-3 py-1 rounded-lg text-white'>About Me</button>
    </div>
    <div className="img absolute w-[20%] h-full rounded-full right-0">
      <Image className='rounded-full' src="./NileshMori.jpg" width={250} height={250} alt="" />
    </div>
    <div className='contacts flex gap-5 md:mt-5'>
      <div className="bg-blue-500 hover:bg-blue-600 flex justify-center w-10 sm:w-8 items-center p-1 rounded-full object-contain object-center"><Image className="relative top-1" src="./fb.svg"  width="25" height="25" alt=""/></div>
      <div className="bg-blue-500 hover:bg-blue-600 flex justify-center w-10 sm:w-8 items-center p-1 rounded-full object-contain object-center"><Image className="" src="./gh.svg"  width="25" height="25" alt=""/></div>
      <div className="bg-blue-500 hover:bg-blue-600 flex justify-center w-10 sm:w-8 items-center  rounded-full object-contain object-center"><Image className="" src="./linkdin.svg"  width="20" height="20" alt=""/></div>
      <div className="bg-blue-500 hover:bg-blue-600 flex justify-center w-10 sm:w-8 items-center  rounded-full object-contain object-center"><Image className="" src="./X.svg"  width="25" height="25" alt=""/></div>
       {/* <div className="bg-white w-12 rounded-full mt-5"><img className="object-contain object-center fill-blue-500" src="./gh.svg" alt="" /></div>
      <div className="bg-blue-500 hover:bg-blue-600 flex justify-center items-center w-12 rounded-full mt-5 object-contain object-center"><img className="w-9" src="./linkdin.svg" alt="" /></div>
      <div className="bg-blue-500 hover:bg-blue-600 flex justify-center items-center w-12 rounded-full mt-5 object-contain object-center"><img className="w-9" src="./X.svg" alt="" /></div> */}
    </div> 
    </div>
   </>
  );
};
export default TypedText;
