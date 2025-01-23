import React from "react";
import ProjectCard from "./ProjectCards";
import Card1 from "../../../public/assets/1-removebg.png";
import Card2 from "../../../public/assets/2-removebg.png";
import Card3 from "../../../public/assets/3-removebg.png";
import Card4 from "../../../public/assets/4-removebg.png";
import Card5 from "../../../public/assets/5-removebg.png";

export default function Projects() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Meus <span className="text-purple-500">Projetos Recentes</span>
        </h1>
        <p className="text-center text-gray-300 mb-16">
          Aqui estão alguns dos projetos que desenvolvi recentemente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ProjectCard
            imageSrc={Card1}
            title="MEF - Energy4Future"
            description="Plataforma que conecta locais sem energia elétrica em São Paulo a investidores e empresas interessadas em energia limpa. Promove o desenvolvimento sustentável através de transparência e geolocalização estratégica."
            ghLink="https://github.com/EduNagado/MEF-Energy4Future"
            demoLink="https://gs-front-navy.vercel.app/"
          />
          <ProjectCard
            imageSrc={Card2}
            title="Site Interativo com IA"
            description="Site interativo desenvolvido em parceria com a Porto Seguro, utilizando Next.js e TypeScript, com IA integrada para auxiliar em questões automotivas e uma experiência responsiva e moderna."
            ghLink="https://github.com/EduNagado/Site-Interativo"
            demoLink="https://mef-smoky.vercel.app/"
          />
          <ProjectCard
            imageSrc={Card3}
            title="E-commerce HIGH"
            description="Loja virtual estilizada com Tailwind CSS, construída com Next.js e TypeScript. Foco em usabilidade, design responsivo e transições fluidas entre as páginas de produtos."
            ghLink="https://github.com/EduNagado/E-commerce"
          />
          <ProjectCard
            imageSrc={Card4}
            title="Quiz Ambiental"
            description="Quiz criado com HTML, CSS e JavaScript para conscientização ambiental. Ajuda os usuários a entenderem melhor seu impacto ecológico."
            ghLink="https://github.com/EduNagado/Quiz-Ambiental"
          />
          <ProjectCard
            imageSrc={Card5}
            title="Back-end Porto Seguro"
            description="Sistema de back-end que inclui inteligência artificial para diagnóstico e gerenciamento de veículos, integrando APIs e estrutura de dados para eficiência."
            ghLink="https://github.com/EduNagado/Backend-PortoSeguro"
          />
        </div>
      </div>
    </div>
  );
}
