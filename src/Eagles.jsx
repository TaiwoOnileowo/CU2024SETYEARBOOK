import React from "react";
import eagle from "./assets/eagle.png";
const Eagles = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <h1 className="font-bold text-xl text-purple-700">394 Eagles</h1>
      <img src={eagle} alt="" className="w-8 h-8" />
    </div>
  );
};

export default Eagles;
