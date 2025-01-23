import React from "react";
import { DiJavascript1, DiNodejs, DiReact, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiHtml5, SiReact, SiMysql } from "react-icons/si";

export default function Techstack() {
  const techIcons = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiReact />, name: "React Native" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPython />, name: "Python" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <DiGit />, name: "Git" },
  ];

  return (
    <div className="">
      <h2 className="text-center text-purple-500 text-3xl font-bold mb-8">
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-purple-500 transition-all duration-300"
          >
            <div className="text-5xl text-white flex justify-center">{tech.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
