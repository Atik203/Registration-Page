import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-[1440px]  mx-auto border-2">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
