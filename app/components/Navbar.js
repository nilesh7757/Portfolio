'use client'
import React from 'react'
import Link from 'next/link'
import HorizontalNav from './HorizontalNav'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [isVisible,setVisible] = useState(false);
  const showNav = ()=>{
    setVisible(!isVisible);
  }
  return (
    <>
      <nav className='header bg-blue-100 items-center flex px-10 py-3 z-10 sticky top-0'>
        <div className="hanger position cursor-pointer absolute left-0" onClick={showNav}>Hanger</div>
        <div className='text-2xl bg-black text-white size-10  flex justify-center items-center font-bold p-6 rounded-full'>NM</div>
        <div className=''>
          {<ul className='flex Navbar text-xl gap-4'>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Home</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">About Me</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Skills</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Education</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Contact Me</Link></li>
          </ul>}
        </div>
      </nav>
      {
        isVisible && <div className='Nav'><HorizontalNav/></div>
      }
    </>
   
  )
}

export default Navbar
