import React from "react";
import Image from "next/image";
import { AiFillGithub, AiOutlineYoutube, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import EduHome from "../../../public/EduHome.jpeg"
import myImg from "../../../public/avatar.svg";

export default function Introduce() {
  return (
    <div className="bg-gradient-to-b bg-gray-900 py-12" id="about">
      <div className="container mx-auto px-4">
        {/* Introdução */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-white text-4xl font-bold mb-6">
              DEIXE-ME{" "}
              <span className="text-purple-500">APRESENTAR</span> MEU TRABALHO
            </h1>
            <p className="text-white text-lg leading-relaxed">
              Sou apaixonado por tecnologia e programação, sempre buscando me
              aperfeiçoar e aprender coisas novas.
              <br />
              <br />
              Tenho experiência com linguagens como{" "}
              <b className="text-purple-500">Java, Python, e TypeScript.</b>
              <br />
              <br />
              Minhas áreas de interesse incluem o desenvolvimento de{" "}
              <b className="text-purple-500">
                tecnologias web e soluções interativas
              </b>{" "}
              com foco em criar experiências únicas para os usuários.
              <br />
              <br />
              Sempre que possível, aplico minha paixão pelo desenvolvimento de
              produtos utilizando{" "}
              <b className="text-purple-500">Node.js</b> e{" "}
              <b className="text-purple-500">bibliotecas modernas</b> como{" "}
              <b className="text-purple-500">React.js e Next.js.</b>
            </p>
          </div>
          {/* Avatar */}
          <div className="flex justify-center">
            <Image
              src={EduHome}
              alt="avatar"
              className="rounded-full shadow-lg"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="text-center mt-12">
          <h2 className="text-white text-3xl font-bold mb-4">ENCONTRE-ME EM</h2>
          <p className="text-white text-lg mb-6">
            Sinta-se à vontade para{" "}
            <span className="text-purple-500">se conectar</span> comigo
          </p>
          <ul className="flex justify-center space-x-6 text-2xl">
            <li>
              <a
                href="https://github.com/EduNagado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Dev.EduNagado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500"
              >
                <AiOutlineYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/eduardo-nagado-15b319261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/edu_nagado/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
