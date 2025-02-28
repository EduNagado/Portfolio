'use client'; 

import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

export default function Resume() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const imagePath = "/EDUARDO NAGADO DESENVOLVEDOR.jpg ";
  const pdfPath = "/eduardoNagado.pdf "; 

  return (
    <div className="bg-gray-900 flex flex-col items-center space-y-6 p-4  min-h-screen">
      <div className="mt-12 w-full max-w-4xl bg-white shadow-lg rounded p-4 flex justify-center">
        {isClient && (
          <img
            src={imagePath}
            alt="CV do Eduardo Nagado"
            className="max-w-full h-auto"
          />
        )}
      </div>

      <a
        href={pdfPath}
        download
        className="bg-purple-950 text-white px-6 py-1 rounded-lg hover:bg-purple-800 flex justify-center items-center text-lg shadow-md w-64"

      >
        <AiOutlineDownload className="mr-2 text-2xl" />
        Baixar CV
      </a>
    </div>
  );
}
