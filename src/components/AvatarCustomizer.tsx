import React, { useState } from "react";
import Avatar from "./Avatar";

export default function AvatarCustomizer() {
  const headOptions = [
    { src: "/images/ninja_head_green.png", name: "Cabeça 1" },
    { src: "/images/ninja_head_purple.png", name: "Cabeça 2" }
  ];
  const [currentHeadIndex, setCurrentHeadIndex] = useState(0);

  const handleNextHead = () => {
    const nextIndex = (currentHeadIndex + 1) % headOptions.length;
    setCurrentHeadIndex(nextIndex);
  };

  const handlePrevHead = () => {
    const prevIndex = (currentHeadIndex - 1 + headOptions.length) % headOptions.length;
    setCurrentHeadIndex(prevIndex);
  };

  const bodyOptions = [
    { src: "/images/ninja_body_green.png", name: "Corpo 1" },
    { src: "/images/ninja_body_purple.png", name: "Corpo 2" }
  ];
  const [currentBodyIndex, setCurrentBodyIndex] = useState(0);

  const handleNextBody = () => {
    const nextIndex = (currentBodyIndex + 1) % bodyOptions.length;
    setCurrentBodyIndex(nextIndex);
  };

  const handlePrevBody = () => {
    const prevIndex = (currentBodyIndex - 1 + bodyOptions.length) % bodyOptions.length;
    setCurrentBodyIndex(prevIndex);
  };

  const legOptions = [
    { src: "/images/ninja_legs_green.png", name: "Pernas 1" },
    { src: "/images/ninja_legs_purple.png", name: "Pernas 2" }
  ];
  const [currentLegIndex, setCurrentLegIndex] = useState(0);

  const handleNextLegs = () => {
    const nextIndex = (currentLegIndex + 1) % legOptions.length;
    setCurrentLegIndex(nextIndex);
  };

  const handlePrevLegs = () => {
    const prevIndex = (currentLegIndex - 1 + legOptions.length) % legOptions.length;
    setCurrentLegIndex(prevIndex);
  };

  const armOptions = [
    { src: "/images/ninja_arm_green.png", name: "Braço 1" },
    { src: "/images/ninja_arm_purple.png", name: "Braço 2" }
  ];
  const [currentArmIndex, setCurrentArmIndex] = useState(0);

  const handleNextArms = () => {
    const nextIndex = (currentArmIndex + 1) % armOptions.length;
    setCurrentArmIndex(nextIndex);
  };

  const handlePrevArms = () => {
    const prevIndex = (currentArmIndex - 1 + armOptions.length) % armOptions.length;
    setCurrentArmIndex(prevIndex);
  };

  return (
    <div className="flex justify-center items-center mt-8">
      {/* Left Column for Navigation Buttons */}
      <div className="flex flex-col items-center mr-8">
        {/* Cabeça Navigation */}
        <div className="mb-4 flex flex-col items-center">
          <label className="font-semibold mb-2">Cabeça</label>
          <button onClick={handlePrevHead} className="px-2 py-1 bg-gray-200 rounded mb-1">
            ◀ {headOptions[(currentHeadIndex - 1 + headOptions.length) % headOptions.length].name}
          </button>
          <span className="font-semibold">{headOptions[currentHeadIndex].name}</span>
          <button onClick={handleNextHead} className="px-2 py-1 bg-gray-200 rounded mt-1">
            {headOptions[(currentHeadIndex + 1) % headOptions.length].name} ▶
          </button>
        </div>

        {/* Corpo Navigation */}
        <div className="mb-4 flex flex-col items-center">
          <label className="font-semibold mb-2">Corpo</label>
          <button onClick={handlePrevBody} className="px-2 py-1 bg-gray-200 rounded mb-1">
            ◀ {bodyOptions[(currentBodyIndex - 1 + bodyOptions.length) % bodyOptions.length].name}
          </button>
          <span className="font-semibold">{bodyOptions[currentBodyIndex].name}</span>
          <button onClick={handleNextBody} className="px-2 py-1 bg-gray-200 rounded mt-1">
            {bodyOptions[(currentBodyIndex + 1) % bodyOptions.length].name} ▶
          </button>
        </div>

        {/* Pernas Navigation */}
        <div className="mb-4 flex flex-col items-center">
          <label className="font-semibold mb-2">Pernas</label>
          <button onClick={handlePrevLegs} className="px-2 py-1 bg-gray-200 rounded mb-1">
            ◀ {legOptions[(currentLegIndex - 1 + legOptions.length) % legOptions.length].name}
          </button>
          <span className="font-semibold">{legOptions[currentLegIndex].name}</span>
          <button onClick={handleNextLegs} className="px-2 py-1 bg-gray-200 rounded mt-1">
            {legOptions[(currentLegIndex + 1) % legOptions.length].name} ▶
          </button>
        </div>

        {/* Braços Navigation */}
        <div className="flex flex-col items-center">
          <label className="font-semibold mb-2">Braços</label>
          <button onClick={handlePrevArms} className="px-2 py-1 bg-gray-200 rounded mb-1">
            ◀ {armOptions[(currentArmIndex - 1 + armOptions.length) % armOptions.length].name}
          </button>
          <span className="font-semibold">{armOptions[currentArmIndex].name}</span>
          <button onClick={handleNextArms} className="px-2 py-1 bg-gray-200 rounded mt-1">
            {armOptions[(currentArmIndex + 1) % armOptions.length].name} ▶
          </button>
        </div>
      </div>

      {/* Right Column for Avatar Display */}
      <div>
        <Avatar 
          head={headOptions[currentHeadIndex].src} 
          body={bodyOptions[currentBodyIndex].src} 
          legs={legOptions[currentLegIndex].src} 
          arms={armOptions[currentArmIndex].src} 
        />
      </div>
    </div>
  );
}