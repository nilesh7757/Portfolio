// components/TypedText.js
"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';

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
    <div className='mt-36 px-20 flex flex-col'>
    <div className='text-5xl'>
      <h1 className='font-medium'>Hey There,</h1>
      <h1 className='mt-8 font-medium'>I'm Nilesh <span className='text-[#FF2D00]'>Mori</span></h1>
      <h1 className='mt-8 font-medium'>I am In <span className="text-blue-500" ref={el}></span></h1>
      <button className='bg-blue-500 mt-8 hover:font-bold hover:bg-blue-700 text-xl px-3 py-1 rounded-lg text-white'>About Me</button>
    </div>
    <div className="img absolute top-32 rounded-full right-0">
      <img className='rounded-full' src="./NileshMori.jpg" alt="" />
    </div>
    <div className='contacts flex gap-5'>
      <div className="bg-blue-500 hover:bg-blue-600 flex justify-center items-center w-12 rounded-full mt-5 object-contain object-center"><img className="w-10 relative top-1" src="./fb.svg" alt="" /></div>
       <div className="bg-white w-12 rounded-full mt-5"><img className="object-contain object-center fill-blue-500" src="./gh.svg" alt="" /></div>
      <div className="bg-blue-500 hover:bg-blue-600 flex justify-center items-center w-12 rounded-full mt-5 object-contain object-center"><img className="w-9" src="./linkdin.svg" alt="" /></div>
      <div className="bg-blue-500 hover:bg-blue-600 flex justify-center items-center w-12 rounded-full mt-5 object-contain object-center"><img className="w-9" src="./X.svg" alt="" /></div>
    </div> 
    </div>
   </>
  );
};

export default TypedText;
