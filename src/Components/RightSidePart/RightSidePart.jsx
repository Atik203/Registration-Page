import React from "react";
import { Link } from "react-router-dom";

const RightSidePart = () => {
  return (
    <div>
      <div className="right-0">
        <h1 className="text-[#8692A6] font-normal text-lg">
          Already have an account?{" "}
          <Link to={"/sign-in"}>
            <span className="text-[#1565D8] font-medium">Sign In</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default RightSidePart;
