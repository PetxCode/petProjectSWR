import { useState } from "react";
import Baghistory from "./home/Baghistory";
import Feehistory from "./home/Feehistory";
import useUser from "../global/jotai";

const HomeScreen = () => {
  const [state] = useUser();
  console.log(typeof state);
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(true);

  const onToggle = () => {
    setToggle1(false);
    setToggle(true);
  };
  const onToggle1 = () => {
    setToggle1(true);
    setToggle(false);
  };

  return (
    <div className="w-full h-screen ">
      <div className="mt-10 flex justify-center w-full">
        <button
          className={`
          px-10 py-4 bg-[${
            toggle1 ? "darkorange" : "white"
          }] rounded-md mx-2 border-[1px] border-orange-400
          border-[${toggle1 ? "" : "1px"}]
          text-[${toggle1 ? "white" : "darkorange"}]

          `}
          style={{
            color: `${toggle1 ? "white" : "darkorange"}`,
          }}
          onClick={onToggle}
        >
          Bag History
        </button>
        <button
          className={`
          px-10 py-4 bg-[${
            toggle ? "darkorange" : "white"
          }] rounded-md mx-2 border-[1px] border-orange-400
          border-[${toggle ? "" : "1px"}]
          text-[${toggle ? "white" : "darkorange"}]

          `}
          style={{
            color: `${toggle ? "white" : "darkorange"}`,
          }}
          onClick={onToggle1}
        >
          Fees History
        </button>
      </div>

      {toggle ? (
        <div>
          <Baghistory />
        </div>
      ) : (
        <div>
          <Feehistory />
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
