"use client";
import React from "react";
import Type from "./Type";
import Introduce from "./Introduce";

export default function Home() {
  return (
    <section>
      <div className="bg-gradient-to-b bg-gray-900">
        <div className="container mx-auto px-4 py-4 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">

            <div className="w-full md:w-7/12 text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-100 mb-2 md:mb-4">
                Olá Mundo! <span role="img" aria-label="wave">👋🏻</span>
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Eu sou
                <span className="text-purple-500"> Eduardo Nagado</span>
              </h1>
              <div className="mt-4 md:mt-6">
                <Type />
              </div>
            </div>

            {/* Removendo espaçamento extra no mobile */}
            <div className="hidden md:flex md:w-5/12 justify-center min-h-[300px]">
            </div>
          </div>
        </div>
      </div>

      {/* Subcomponent Home2 */}
      <Introduce />
    </section>
  );
}
