"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        navColour
          ? "bg-gray-900 bg-opacity-50 backdrop-blur-lg shadow-md"  
          : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo usando next/image */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="brand"
            width={40}
            height={40}
            className="h-10"
          />
        </Link>

       
        <button
          className="md:hidden text-blue-100 focus:outline-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="block w-6 h-0.5 bg-blue-100 mb-1"></span>
          <span className="block w-6 h-0.5 bg-blue-100 mb-1"></span>
          <span className="block w-6 h-0.5 bg-blue-100"></span>
        </button>

        {/* Links do menu */}
        <div
          className={`${
            isExpanded ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8`}
        >
          <Link
            href="/"
            className="text-blue-100 flex items-center space-x-1 hover:text-blue-300 transition-colors"
          >
            <AiOutlineHome />
            <span>Home</span>
          </Link>
          <Link
            href="/About"
            className="text-blue-100 flex items-center space-x-1 hover:text-blue-300 transition-colors"
          >
            <AiOutlineUser />
            <span>About</span>
          </Link>
          <Link
            href="/Projects"
            className="text-blue-100 flex items-center space-x-1 hover:text-blue-300 transition-colors"
          >
            <AiOutlineFundProjectionScreen />
            <span>Projects</span>
          </Link>
          <Link
            href="/Resume"
            className="text-blue-100 flex items-center space-x-1 hover:text-blue-300 transition-colors"
          >
            <CgFileDocument />
            <span>Resume</span>
          </Link>
          <a
            href="https://github.com/EduNagado/Portfolio"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1 text-blue-100 hover:text-blue-300 transition-colors"
          >
            <CgGitFork className="text-xl" />
            <AiFillStar className="text-lg" />
          </a>
        </div>
      </div>
    </nav>
  );
}
