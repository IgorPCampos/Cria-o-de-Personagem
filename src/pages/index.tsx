import React, { useState } from "react";
import Avatar from "../components/Avatar";
import AvatarCustomizer from "../components/AvatarCustomizer";

export default function HomePage() {
  const [head, setHead] = useState("/images/head.png");
  const [body, setBody] = useState("/images/body.png");
  const [arm, setArm] = useState("/images/arms.png");

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Avatar Customizer</h1>
      <Avatar head={head} body={body} arm={arm} />
      <AvatarCustomizer setHead={setHead} setBody={setBody} setArm={setArm} />
    </div>
  );
}
