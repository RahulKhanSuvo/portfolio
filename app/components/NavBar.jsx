"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-70%]">
        <img src="/gradient.png" alt="Gradient Background" />
      </div>

      <nav className="w-11/12 mx-auto px-5  py-4 flex justify-between items-center z-50">
        <a href="">
          <h4 className="font-bold text-3xl">
            Rahul<span className="text-red-600">.</span>{" "}
          </h4>
        </a>
        <ul className="hidden md:flex px-12 rounded-full font-Ovo py-4 gap-6 lg:gap-8 bg-white bg-opacity-50 shadow-sm">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <a
            className="md:flex hidden items-center gap-3 px-10 py-2.5 border rounded-full border-gray-500"
            href="#contact"
          >
            Contact{" "}
            <Image
              src="/logo/logo.svg"
              alt="Contact Icon"
              width={10}
              height={10}
            />
          </a>
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <IoMdClose size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
        <ul
          className={`md:hidden flex flex-col gap-6 py-20 w-64 px-10 bottom-0 top-0 fixed right-0 z-50 h-screen bg-rose-50 transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div onClick={toggleMenu} className="absolute right-5 top-4">
            <IoMdClose size={24} />
          </div>
          <li>
            <a onClick={toggleMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
