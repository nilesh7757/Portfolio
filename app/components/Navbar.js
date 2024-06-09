import React from 'react'
import Link from 'next/link'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className='header flex mt-2 py-3 sticky top-0 w-full'>
        <div className='text-2xl bg-black text-white size-10  flex justify-center items-center font-bold p-6 rounded-full'>NM</div>
        <div className=''>
          {<ul className='navbar md:flex Navbar text-xl gap-4'>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Home</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">About Me</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Skills</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Education</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Contact Me</Link></li>
          </ul>}
        </div>
      </nav>
    </>
   
  )
}

export default Navbar
