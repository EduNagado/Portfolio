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

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        navColour ? "bg-gray-900 bg-opacity-50 backdrop-blur-lg shadow-md" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="brand"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <button
          className="md:hidden text-blue-100 focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-blue-100"></span>
            <span className="block w-6 h-0.5 bg-blue-100"></span>
            <span className="block w-6 h-0.5 bg-blue-100"></span>
          </div>
        </button>

        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-90 transition-transform transform ${
            isExpanded ? "translate-x-0" : "translate-x-full"
          } md:relative md:translate-x-0 md:flex md:items-center md:space-x-8`}
        >
          <div className="absolute top-5 right-6 md:hidden">
            <button className="text-white text-3xl" onClick={toggleMenu}>
              &times;
            </button>
          </div>

          <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8 mt-20 md:mt-0">
            {[
              { href: "/", label: "Home", Icon: AiOutlineHome },
              { href: "/About", label: "About", Icon: AiOutlineUser },
              { href: "/Projects", label: "Projects", Icon: AiOutlineFundProjectionScreen },
              { href: "/Resume", label: "Resume", Icon: CgFileDocument },
            ].map(({ href, label, Icon }, index) => (
              <Link
                key={index}
                href={href}
                className="text-blue-100 flex items-center space-x-2 hover:text-blue-300 transition-colors"
                onClick={() => setIsExpanded(false)}
              >
                <Icon />
                <span>{label}</span>
              </Link>
            ))}

            <a
              href="https://github.com/EduNagado/Portfolio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 text-blue-100 hover:text-blue-300 transition-colors"
              onClick={() => setIsExpanded(false)}
            >
              <CgGitFork className="text-xl" />
              <AiFillStar className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
