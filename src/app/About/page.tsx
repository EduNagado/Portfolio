import React from "react";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import Image from "next/image";
import laptopImg from "../../../public/about.png";

export default function About() {
  return (
    <div className="about-section bg-gradient-to-br bg-gray-900 w-full min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-6 py-16">
        {/* Introdução e Card */}
        <div className="flex flex-wrap justify-center items-center mb-12">
          <div className="w-full md:w-7/12 text-center md:text-left">
            <AboutCard />
          </div>
          <div className="w-full md:w-5/12 flex justify-center mt-10 md:mt-0">
            <Image
              src={laptopImg}
              alt="About me"
              className="rounded-lg "
            />
          </div>
        </div>

        {/* Habilidades */}
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl font-bold mb-6">
            Professional <span className="text-purple-500">Skillset</span>
          </h1>
          <Techstack />
        </div>

        {/* Ferramentas */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-6">
            <span className="text-purple-500">Tools</span> I use
          </h1>
          <Toolstack />
        </div>
      </div>
    </div>
  );
}
