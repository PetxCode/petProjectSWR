import { useState } from "react";
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi";
import useUser from "../../global/jotai";
import { useUserUpdate } from "../../hooks/useBagHistory";

const Header = () => {
  const [state, setState]: any = useUser();
  const [show, setShow] = useState<boolean>(false);

  const { userData } = useUserUpdate(state._id);

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <div className=" w-[100%] h-[90px] bg-slate-400 items-center justify-center flex">
      <div className=" w-[90%] h-[80px] bg-slate-50 flex items-center justify-between px-3">
        <div className=" text-[20px] font-bold items-center justify-center flex ">
          <div className="flex items-center justify-center">
            Balance:{" "}
            {show ? (
              <div className="mx-4">₦{userData.balance}</div>
            ) : (
              <div className="mx-4">****</div>
            )}
          </div>{" "}
          <div>
            {show ? (
              <PiEyeLight onClick={Toggle} />
            ) : (
              <PiEyeClosedLight onClick={Toggle} />
            )}
          </div>
        </div>
        <div className=" text-[20px] font-bold items-center justify-center flex  ">
          <div className="w-[50px] h-[50px] rounded-full border">
            {state?.studentImage ? <div>p</div> : <div>n</div>}
          </div>
          <button
            className="ml-4"
            onClick={() => {
              setState(null);
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
