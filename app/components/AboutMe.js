import React from 'react'
import Link from 'next/link'
import './About.css'

const AboutMe = () => {
  return (
    <>
    {/* <div className='bg-red-500 mt-56 relative top-56'>Test Hi</div> */}
    <div id="About" className='h-[100vh] w-full mx-auto'>
        <h2 className='text-xl md:text-3xl mx-auto text-center font-bold'>About Me</h2>
        <div className='flex flex-col lg:flex-row w-full mx-auto justify-center items-center lg:justify-around py-5'>
        <div className='p-4 relative rounded-lg top-5 w-[50%] Box'>
          <h3 className='text-xl font-semibold mb-1'><span className="text-red-600 ">Nilesh </span> Mori</h3>
          <div className='flex'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam debitis quos assumenda dolores, ipsum at praesentium delectus beatae commodi id dolorum ullam, laborum nesciunt eveniet aliquid inventore, saepe adipisci necessitatibus et autem! Suscipit perspiciatis explicabo id quod quia iste a at dolorum impedit unde ducimus commodi corrupti cum, facilis, dolore, fuga laboriosam magni expedita! Nihil.</div>

          </div>
        <div className="img flex top-12 lg:top-0 relative right-0 Box rounded-lg overflow-hidden ">
              <img src="About-D1.jpg" alt="About" />
        </div>
        </div>
          <div className='w-fit text-2xl font-medium mx-auto relative top-12'>
          <button className='py-1 px-2 Box text-white bg-blue-500 rounded-lg'><Link href="https://drive.google.com/file/d/1-3daVjRjyNBef14a1y9tAGienx3L0KPg/view?usp=sharing">Resume</Link></button>
          </div>
    </div>
    </>
  )
}

export default AboutMe
