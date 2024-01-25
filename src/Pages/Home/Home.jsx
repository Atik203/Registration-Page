import React from "react";
import LeftSidePart from "../../Components/LeftSidePart/LeftSidePart";
import RightSidePart from "../../Components/RightSidePart/RightSidePart";

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[666px]">
        <LeftSidePart></LeftSidePart>
      </div>
      <div className="max-w-[774px]">
        <RightSidePart></RightSidePart>
      </div>
    </div>
  );
};

export default Home;