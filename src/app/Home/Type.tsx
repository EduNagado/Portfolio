import React, { useState, useEffect } from "react";

const Type: React.FC = () => {
  const [text, setText] = useState(""); // Texto exibido atualmente
  const [index, setIndex] = useState(0); // Índice atual da string sendo escrita
  const [subIndex, setSubIndex] = useState(0); // Subíndice para o efeito de digitação
  const [isDeleting, setIsDeleting] = useState(false); // Alterna entre digitar e apagar
  const [speed, setSpeed] = useState(150); // Velocidade do efeito
  const strings = [
    "Software Developer",
    "Freelancer",
  ];

  useEffect(() => {
    // Função para controlar o efeito de digitação
    const timeout = setTimeout(() => {
      if (subIndex === strings[index].length + 1 && !isDeleting) {
        setIsDeleting(true);
        setSpeed(50); // Velocidade ao apagar
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setSpeed(150); // Velocidade ao escrever
        setIndex((prevIndex) => (prevIndex + 1) % strings.length);
      } else {
        setSubIndex((prevSubIndex) =>
          isDeleting ? prevSubIndex - 1 : prevSubIndex + 1
        );
      }
    }, speed);

    return () => clearTimeout(timeout); // Limpa o timeout para evitar bugs
  }, [subIndex, isDeleting, speed, index, strings]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-500 mt-2">
        {`${strings[index].substring(0, subIndex)}|`}
      </h1>
    </div>
  );
};

export default Type;
