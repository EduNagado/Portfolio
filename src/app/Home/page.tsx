"use client";
import React from "react";
import Type from "./Type";
import Introduce from "./Introduce";

export default function Home() {
  return (
    <section>
      <div className="bg-gradient-to-b bg-gray-900">

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">

            <div className="md:w-7/12 text-center md:text-left">
              <h1 className="text-4xl font-bold text-blue-100 mb-4">
                Olá Mundo! <span role="img" aria-label="wave">👋🏻</span>
              </h1>
              <h1 className="text-5xl font-bold text-white">
                Eu sou
                <span className="text-purple-500"> Eduardo Nagado</span>
              </h1>
              <div className="mt-6">
                <Type />
              </div>
            </div>

            <div className="md:w-5/12 mt-8 md:mt-0 flex justify-center min-h-[300px]">
            </div>
          </div>
        </div>
      </div>

      {/* Subcomponent Home2 */}
      <Introduce />
    </section>
  );
}
