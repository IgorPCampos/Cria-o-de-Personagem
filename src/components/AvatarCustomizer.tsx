import React from "react";

export default function AvatarCustomizer({ setHead, setBody, setArm }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Customize seu Avatar</h2>
      {/* Head Select */}
      <div className="mb-4">
        <label className="font-semibold mb-2 block">Cabeça:</label>
        <select
          onChange={(e) => setHead(e.target.value)}
          className="px-4 py-2 bg-blue-100 border rounded"
        >
          <option value="/images/head.png">Cabeça 1</option>
          <option value="/images/head3.png">Cabeça 2</option>
        </select>
      </div>
      {/* Body Select */}
      <div className="mb-4">
        <label className="font-semibold mb-2 block">Corpo:</label>
        <select
          onChange={(e) => setBody(e.target.value)}
          className="px-4 py-2 bg-blue-100 border rounded"
        >
          <option value="/images/body.png">Corpo padrão</option>
          <option value="/images/body2.png">Armadura</option>
        </select>
      </div>
      {/* Arm Select */}
      <div>
        <label className="font-semibold mb-2 block">Braço:</label>
        <select
          onChange={(e) => setArm(e.target.value)}
          className="px-4 py-2 bg-blue-100 border rounded"
        >
          <option value="/images/arms.png">Braço</option>
          <option value="/images/weapon.png">Arma</option>
        </select>
      </div>
    </div>
  );
}
