import React from "react";
import { Link } from "react-router-dom";
import Polygon1 from "../../../public/Polygon 1.svg";
import Polygon2 from "../../../public/Polygon 2.svg";
import userImg from "../../../public/user.svg";
import arrowRight from "../../../public/arrow-right.svg";

const RightSidePart = () => {
  return (
    <div>
      <div className="absolute top-10 right-20">
        <h1 className="text-[#8692A6] font-normal text-lg">
          Already have an account?{" "}
          <Link to={"/sign-in"}>
            <span className="text-[#1565D8] font-medium">Sign In</span>
          </Link>
        </h1>
      </div>
      <div className="max-w-md mx-auto ml-32">
        {/* Title */}
        <div className="text-left">
          <h1 className="font-bold text-3xl">Join Us</h1>
          <p className="text-[#8692A6] text-lg font-normal">
            To begin this journey, tell us what type of account you’d be
            opening.
          </p>
        </div>
        {/* Section 1 */}
        <div className="flex mt-8 items-center justify-center gap-7 p-7 rounded-md outlines ">
          <div>
            <div className="absolute">
              <img src={Polygon1} alt="" />
            </div>
            <div className="relative ml-[15px] mt-2 pt-2">
              <img src={userImg} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <h1 className="text-base font-medium">Individual</h1>
              <p className="text-[#8692A6] text-sm">
                Personal account to manage all you activities.
              </p>
            </div>
            <div>
              <Link>
                <img src={arrowRight} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidePart;
