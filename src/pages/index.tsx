import React, { useState } from "react";
import Avatar from "../components/Avatar";
import AvatarCustomizer from "../components/AvatarCustomizer";

export default function HomePage() {
  const [head, setHead] = useState("/images/ninja_head_green.png");
  const [body, setBody] = useState("/images/ninja_body_green.png");
  const [arms, setArms] = useState("/images/ninja_arm_green.png");
  const [legs, setLegs] = useState("/images/ninja_legs_green.png");

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Avatar Customizer</h1>
      <Avatar head={head} body={body} arms={arms} legs={legs} />
      <AvatarCustomizer setHead={setHead} setBody={setBody} setArms={setArms} setLegs={setLegs} />
    </div>
  );
}