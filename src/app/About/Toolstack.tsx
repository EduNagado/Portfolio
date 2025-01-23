import React from "react";
import { FaGoogle, FaAndroid, FaLaptopCode } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

export default function Toolstack() {
  const tools = [
    { icon: <i className="bx bxl-visual-studio"></i>, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaAndroid />, name: "Android Studio" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 pb-12">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-purple-500 transition-all duration-300"
        >
          <div className="text-5xl text-white flex justify-center">{tool.icon}</div>
        </div>
      ))}
    </div>
  );
}
