import Header from "../static/Header";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayOut;
