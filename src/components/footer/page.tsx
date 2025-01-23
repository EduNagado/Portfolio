import React from "react";
import { AiFillGithub, AiOutlineYoutube, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container-fluid">
        <div className="flex justify-between items-center">
          {/* Copyright Section removed */}

          <div className="text-center">
            <h3>Designed and Developed by Eduardo Nagado</h3>
          </div>

          {/* Social Media Links */}
          <div>
            <ul className="flex space-x-6 m-0">
              <li>
                <a
                  href="https://github.com/EduNagado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl"  // Ícones menores
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Dev.EduNagado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl"  // Ícones menores
                >
                  <AiOutlineYoutube/>
                </a>
              </li>
              <li>
                <a
                  href="www.linkedin.com/in/eduardo-nagado-15b319261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl"  // Ícones menores
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/edu_nagado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl"  // Ícones menores
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
