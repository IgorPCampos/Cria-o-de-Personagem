import Image from "next/image";
import React from "react";

export default function Avatar({ head, body, legs, arms }) {
  return (
    <div className="relative w-36 h-80 flex flex-col items-center">
      {/* Cabeça */}
      {head && (
        <Image
          src={head}
          alt="Head"
          width={80}
          height={80}
          className="z-30"
        />
      )}

      {/* Corpo */}
      {body && (
        <Image
          src={body}
          alt="Body"
          width={80}
          height={100}
          className="z-20"
        />
      )}

      {/* Braços */}
      {arms && (
        <>
          <Image
            src={arms}
            alt="Arms"
            width={30}
            height={50}
            className="absolute top-16 left-0 z-10" // Alterado para top-8
          />
          <Image
            src={arms}
            alt="Arms"
            width={30}
            height={50}
            className="absolute top-16 right-0 z-10" // Alterado para top-8
          />
        </>
      )}

      {/* Pernas */}
      {legs && (
        <Image
          src={legs}
          alt="Legs"
          width={80}
          height={80}
          className="z-10"
        />
      )}
    </div>
  );
}