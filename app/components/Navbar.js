"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import HorizontalNav from "./HorizontalNav";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

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
            style={{ zIndex: 2, top: 0 }}
            animate={{
              clipPath: "circle(150% at 100% 100%)",
            }}
            exit={{
              clipPath: "circle(0% at 3.5% 3.5%)",
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <HorizontalNav />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="header sticky top-0 bg-blue-100 lg:justify-between justify-center items-center flex px-10 py-3 w-[100vw] min-w-[100vw]">
        <div className="text-2xl bg-black text-white size-10 flex justify-center items-center font-bold p-6 rounded-full">
          NM
        </div>
        <div className="">
          <ul className="flex Navbar text-xl gap-4">
            <li className="hover:font-bold hover:text-blue-500">
              <Link href="#Home">Home</Link>
            </li>
            <li className="hover:font-bold hover:text-blue-500">
              <Link href="#About">About Me</Link>
            </li>
            <li className="hover:font-bold hover:text-blue-500">
              <Link href="#skill">Skills</Link>
            </li>
            <li className="hover:font-bold hover:text-blue-500">
              <Link href="#">Education</Link>
            </li>
            <li className="hover:font-bold hover:text-blue-500">
              <Link href="#">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>

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
