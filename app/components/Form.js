'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_2qycq85', 'template_ebfrijf', form.current,{
        publicKey: 'lgyXGdU7WDqjRFTGd',
      }) // Replace with your actual values
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email Sent Successfully!'); // User-friendly success message
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Email Sending Failed. Please try again.'); // User-friendly error message
        }
      );
  };

  return (
    <>
    <div className='w-full pt-5 flex flex-col items-center'>
      <h3 className='text-2xl font-semibold text-center'>Contact Me</h3>
      <form className='p-5 flex-col items-center  w-[70%]' ref={form} onSubmit={sendEmail}>
        <div className='flex gap-5'>
        <label htmlFor='user_name'>Name:</label>
        <input className='border border-blue-500 rounded-sm' type="text" name="user_name" required />
        </div>
        <div className='flex gap-6 mt-3'>
        <label htmlFor='user_email'>Email:</label>
        <input className='border border-blue-500 rounded-sm' type="email" name="user_email" required />
        </div>
        <div  className='flex gap-6 mt-3'>
        <label htmlFor='message'>Message</label>
        <textarea className='border border-blue-500 rounded-sm' name="message" id="" cols="60" rows="5" >Hello</textarea>
        </div>
        <div className='mt-3 flex justify-center'>
        <button className='text-center rounded-lg px-2 py-1 bg-blue-500' type="submit">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Form;
