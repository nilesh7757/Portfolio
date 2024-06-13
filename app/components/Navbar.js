"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import HorizontalNav from "./HorizontalNav";
import { AnimatePresence, motion } from "framer-motion";
// import { useScroll } from "framer-motion";
import "./Navbar.css";

// const {scrollYProgress} = useScroll()

const variants = (delay) =>({
  initial:{y:-100,opacity:0},
  animate:{y:0,opacity:1,transition:{
    delay:delay,
    duration:0.5,
  }},
  hover:{
    fontWeight:700,
    scale:1.05,
    color:"#3b82f6"
  }
})

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [icon, setIcon] = useState(<GiHamburgerMenu />);

  const showNav = () => {
    setIcon(isVisible ? <GiHamburgerMenu /> : <HiX />);
    setVisible(!isVisible);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              clipPath: "circle(0% at 3.5% 3.5%)",
            }}
            style={{ zIndex: 15, top: 0 }}
            animate={{
              clipPath: "circle(150% at 100% 100%)",
            }}
            exit={{
              clipPath: "circle(0% at 3.5% 3.5%)",
              transition:{
                delay:1,
              }
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <HorizontalNav />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav 
      initial
      className="header bg-blue-100 lg:justify-between justify-center items-center flex px-10 py-3 w-[100vw] min-w-[100vw]">
        <motion.div 
          initial={{y:-100,opacity:0}}
          animate={{y:1,opacity:1}}
          transition={{duration:0.25}}
          className="text-2xl bg-black text-white size-10 flex justify-center items-center font-bold p-6 rounded-full">
          <motion.span
           initial={{x:-100,opacity:0,color:"#000000"}}
           animate={{x:0,opacity:1,color:"#FFFFFF"}}
           transition={{duration:0.5,delay:0.5}}
          
          >N</motion.span>
          <motion.span
            initial={{x:100,opacity:0,color:"#000000"}}
            animate={{x:0,opacity:1,color:"#FFFFFF"}}
            transition={{duration:0.5,delay:0.5}}
          
          >M</motion.span>
        </motion.div>
        <div className="">
          <ul className="flex Navbar text-xl gap-4">
            <motion.li 
              variants={variants(0.1)}
              initial = "initial"
              animate = "animate"
              whileHover="hover"
              >
              <Link href="#Home">Home</Link>
            </motion.li>
            <motion.li 
               variants={variants(0.2)}
               initial = "initial"
              animate = "animate"
              whileHover="hover"
              >
              <Link href="#About">About Me</Link>
            </motion.li>
            <motion.li 
               variants={variants(0.3)}
               initial = "initial"
              animate = "animate"
              whileHover="hover"
              >
              <Link href="#skill">Skills</Link>
            </motion.li>
            <motion.li 
               variants={variants(0.4)}
               initial = "initial"
               animate = "animate"
               whileHover="hover"
               >
              <Link href="#">Education</Link>
            </motion.li>
            <motion.li 
               variants={variants(0.5)}
               initial = "initial"
               animate = "animate"
               whileHover="hover"
               >
              <Link href="#">Contact Me</Link>
            </motion.li>
          </ul>
        </div>
      </motion.nav>

      <div
        className="hanger fixed left-4 top-7 cursor-pointer"
        onClick={showNav}
      >
        {icon}
      </div>
    </>
  );
};

export default Navbar;
