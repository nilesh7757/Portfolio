'use client'
import React from 'react'
import Link from 'next/link'
import HorizontalNav from './HorizontalNav'
import './Navbar.css'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";


const Navbar = () => {
  const [isVisible,setVisible] = useState(false);
  const [icon ,setIcon] = useState(<GiHamburgerMenu/>)
  const showNav = ()=>{
    if(isVisible){
      setIcon(<HiX />)
    }
    else{
      setIcon(<GiHamburgerMenu/>)
    }
    setVisible(!isVisible);
  }
  return (
    <>
      <nav className='header bg-blue-100 items-center flex px-10 py-3 z-10 sticky top-0'>
        <div className="hanger flex absolute left-0 text-xl px-10 cursor-pointer " onClick={showNav}>{icon}</div>
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
