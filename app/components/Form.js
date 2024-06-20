"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_2qycq85", "template_ebfrijf", form.current, {
        publicKey: "lgyXGdU7WDqjRFTGd",
      }) // Replace with your actual values
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Comment Sent Successfully!"); // User-friendly success message
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Comment Sending Failed. Please try again."); // User-friendly error message
        }
      );
  };

  return (
    <>
      <div className="w-full pt-5 flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-center">Contact Me</h3>
        <form
          className="p-5 flex-col items-center  w-[70%]"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex justify-center items-center  flex-col md:flex-row lg:gap-14">
            <div className="flex gap-6 justify-center mt-3">
              <label htmlFor="user_name">Name:</label>
              <input
                className="border border-blue-500 rounded-sm"
                type="text"
                name="user_name"
                required
              />
            </div>
            <div className="flex gap-6 justify-center mt-3">
              <label htmlFor="user_email">Email:</label>
              <input
                className="border border-blue-500 rounded-sm"
                type="email"
                name="user_email"
                required
              />
            </div>
          </div>
          <div className="flex gap-6 justify-center mt-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="border border-blue-500 rounded-sm"
              name="message"
              id=""
              cols="60"
              rows="5"
            >
              Hello
            </textarea>
          </div>
          <div className="mt-3 flex justify-center">
            <div className="w-full flex justify-center mt-10 lg:mt-5">
              <motion.button
                whileInView={{ opacity: 1, y: 0 }}
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-blue-500 px-2 py-2 border border-black  text-white font-semibold rounded-lg mx-auto"
              >
                Submit
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
