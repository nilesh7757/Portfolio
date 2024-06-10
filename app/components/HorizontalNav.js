import React from 'react'
import Link from 'next/link'
const HorizontalNav = () => {
  return (
    <div className='bg-blue-50 z-10 w-[40%] h-[100vh] px-4 pt-5 fixed right-0 top-0'>
        {/* <h1>HELLO</h1> */}
      <ul className='text-xl flex flex-col text-black gap-8'>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#Home">Home</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#About">About Me</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Skills</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Education</Link></li>
            <li className='hover:font-bold hover:text-blue-500'><Link href = "#">Contact Me</Link></li>
          </ul>
    </div>
  )
}

export default HorizontalNav
