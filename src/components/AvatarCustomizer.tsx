import React, { useState } from "react";

export default function AvatarCustomizer({ setHead, setBody, setLegs, setArms }) {
  const headOptions = [
    { src: "/images/ninja_head_green.png", name: "Cabeça 1" },
    { src: "/images/ninja_head_purple.png", name: "Cabeça 2" },
  ];
  const [currentHeadIndex, setCurrentHeadIndex] = useState(0);

  const handleNextHead = () => {
    const nextIndex = (currentHeadIndex + 1) % headOptions.length;
    setCurrentHeadIndex(nextIndex);
    setHead(headOptions[nextIndex].src);
  };

  const handlePrevHead = () => {
    const prevIndex = (currentHeadIndex - 1 + headOptions.length) % headOptions.length;
    setCurrentHeadIndex(prevIndex);
    setHead(headOptions[prevIndex].src);
  };

  const bodyOptions = [
    { src: "/images/ninja_body_green.png", name: "Corpo 1" },
    { src: "/images/ninja_body_purple.png", name: "Corpo 2" },
  ];
  const [currentBodyIndex, setCurrentBodyIndex] = useState(0);

  const handleNextBody = () => {
    const nextIndex = (currentBodyIndex + 1) % bodyOptions.length;
    setCurrentBodyIndex(nextIndex);
    setBody(bodyOptions[nextIndex].src);
  };

  const handlePrevBody = () => {
    const prevIndex = (currentBodyIndex - 1 + bodyOptions.length) % bodyOptions.length;
    setCurrentBodyIndex(prevIndex);
    setBody(bodyOptions[prevIndex].src);
  };

  const legOptions = [
    { src: "/images/ninja_legs_green.png", name: "Pernas 1" },
    { src: "/images/ninja_legs_purple.png", name: "Pernas 2" },
  ];
  const [currentLegIndex, setCurrentLegIndex] = useState(0);

  const handleNextLegs = () => {
    const nextIndex = (currentLegIndex + 1) % legOptions.length;
    setCurrentLegIndex(nextIndex);
    setLegs(legOptions[nextIndex].src);
  };

  const handlePrevLegs = () => {
    const prevIndex = (currentLegIndex - 1 + legOptions.length) % legOptions.length;
    setCurrentLegIndex(prevIndex);
    setLegs(legOptions[prevIndex].src);
  };

  const armOptions = [
    { src: "/images/ninja_arm_green.png", name: "Braço 1" },
    { src: "/images/ninja_arm_purple.png", name: "Braço 2" },
  ];
  const [currentArmIndex, setCurrentArmIndex] = useState(0);

  const handleNextArms = () => {
    const nextIndex = (currentArmIndex + 1) % armOptions.length;
    setCurrentArmIndex(nextIndex);
    setArms(armOptions[nextIndex].src);
  };

  const handlePrevArms = () => {
    const prevIndex = (currentArmIndex - 1 + armOptions.length) % armOptions.length;
    setCurrentArmIndex(prevIndex);
    setArms(armOptions[prevIndex].src);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Cabeça Navigation */}
      <div className="mb-4 flex flex-col items-center">
        <label className="font-semibold mb-2">Cabeça</label>
        <div className="flex items-center">
          <button onClick={handlePrevHead} className="px-2 py-1 bg-gray-200 rounded">
            ◀
          </button>
          <span className="mx-2 font-semibold">{headOptions[currentHeadIndex].name}</span>
          <button onClick={handleNextHead} className="px-2 py-1 bg-gray-200 rounded">
            ▶
          </button>
        </div>
      </div>

      {/* Corpo Navigation */}
      <div className="mb-4 flex flex-col items-center">
        <label className="font-semibold mb-2">Corpo</label>
        <div className="flex items-center">
          <button onClick={handlePrevBody} className="px-2 py-1 bg-gray-200 rounded">
            ◀
          </button>
          <span className="mx-2 font-semibold">{bodyOptions[currentBodyIndex].name}</span>
          <button onClick={handleNextBody} className="px-2 py-1 bg-gray-200 rounded">
            ▶
          </button>
        </div>
      </div>

      {/* Braços Navigation */}
      <div className="mb-4 flex flex-col items-center">
        <label className="font-semibold mb-2">Braços</label>
        <div className="flex items-center">
          <button onClick={handlePrevArms} className="px-2 py-1 bg-gray-200 rounded">
            ◀
          </button>
          <span className="mx-2 font-semibold">{armOptions[currentArmIndex].name}</span>
          <button onClick={handleNextArms} className="px-2 py-1 bg-gray-200 rounded">
            ▶
          </button>
        </div>
      </div>

      {/* Pernas Navigation */}
      <div className="mb-4 flex flex-col items-center">
        <label className="font-semibold mb-2">Pernas</label>
        <div className="flex items-center">
          <button onClick={handlePrevLegs} className="px-2 py-1 bg-gray-200 rounded">
            ◀
          </button>
          <span className="mx-2 font-semibold">{legOptions[currentLegIndex].name}</span>
          <button onClick={handleNextLegs} className="px-2 py-1 bg-gray-200 rounded">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
