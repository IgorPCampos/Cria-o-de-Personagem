import Image from "next/image";
import React from "react";

export default function Avatar({ head, body, arm }) {
  return (
    <div className="relative w-36 h-44">
      {/* Cabeça */}
      <Image
        src={head}
        alt="Head"
        width={100}  // Ajuste o valor conforme necessário
        height={100} // Ajuste o valor conforme necessário
        className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30"
      />
      {/* Corpo */}
      <Image
        src={body}
        alt="Body"
        width={900}  // Ajuste o valor conforme necessário
        height={300} // Ajuste o valor conforme necessário
        className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20"
      />
      {/* Braço ou Arma */}
      <Image
        src={arm}
        alt="Arm or Weapon"
        width={100}  // Ajuste o valor conforme necessário
        height={100} // Ajuste o valor conforme necessário
        className="absolute top-20 left-1/4 transform -translate-x-1/2 z-10"
      />
    </div>
  );
}
