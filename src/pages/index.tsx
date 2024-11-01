import React, { useState } from "react";
import Avatar from "../components/Avatar";
import AvatarCustomizer from "../components/AvatarCustomizer";

export default function HomePage() {
  const [head, setHead] = useState("/images/ninja_head_green.png");
  const [body, setBody] = useState("/images/ninja_body_green.png");
  const [arms, setArms] = useState("/images/ninja_arm_green.png");
  const [legs, setLegs] = useState("/images/ninja_legs_green.png");

  return (
    <div className="flex h-screen">
      {/* Coluna da Esquerda para Configurações */}
      <div className="w-1/2 flex flex-col items-center bg-gray-500 p-6">
        <h1 className="text-3xl font-bold mb-6">Personalização do Avatar</h1>
        <AvatarCustomizer
          setHead={setHead}
          setBody={setBody}
          setArms={setArms}
          setLegs={setLegs}
        />
      </div>

      {/* Coluna da Direita para Exibir o Avatar */}
      <div className="w-1/2 bg-gray-400 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Avatar</h1>
        <div className="flex justify-center items-center">
          <Avatar head={head} body={body} arms={arms} legs={legs} />
        </div>
      </div>
    </div>
  );
}
