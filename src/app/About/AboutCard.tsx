import React from "react";
import { ImPointRight } from "react-icons/im";

export default function CardAbout() {
  return (
    <div className="rounded-lg p-10 max-w-4xl mx-auto mt-16 md:mt-24">
      {/* Título centralizado */}
      <h1 className="text-white text-3xl font-bold text-center mb-8">
        Conheça Quem <span className="text-purple-600">Eu Sou</span>
      </h1>

      <blockquote>
        <p className="text-justify text-white mb-8 text-lg leading-relaxed">
          Olá, pessoal! Meu nome é{" "}
          <span className="text-purple-600 font-semibold">
            Eduardo Henrique Strapazzon Nagado
          </span>{" "}
          e sou de{" "}
          <span className="text-purple-600 font-semibold">São Paulo, Brasil</span>.
          <br />
          Atualmente, sou um desenvolvedor full-stack trainee apaixonado por
          tecnologia e programação, sempre buscando criar soluções inovadoras.
          <br />
          Estudo Análise e Desenvolvimento de Sistemas na FIAP, com previsão de
          conclusão em 2025.
          <br />
          <br />
          Além de programar, adoro me dedicar a outras atividades que me trazem
          alegria:
        </p>
        <ul className="list-none pl-0">
          <li className="text-white flex items-center mb-4 text-lg">
            <ImPointRight className="text-purple-600 mr-3" />
            Andar de Skate
          </li>
          <li className="text-white flex items-center mb-4 text-lg">
            <ImPointRight className="text-purple-600 mr-3" />
            Jogar Videogame
          </li>
          <li className="text-white flex items-center text-lg">
            <ImPointRight className="text-purple-600 mr-3" />
            Sair com Amigos e Família
          </li>
        </ul>
        <p className="text-purple-500 italic mt-8 text-center text-xl pl-[2rem]">
          "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original."
        </p>
        <footer className="text-right font-bold text-gray-500 mt-4 text-lg pr-[3rem]">
          - Albert Einstein
        </footer>
      </blockquote>
    </div>
  );
}
