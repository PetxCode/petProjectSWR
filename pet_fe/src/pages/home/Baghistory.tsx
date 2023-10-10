import React from "react";
import image from "../../assets/image.jpeg";
import useUser from "../../global/jotai";
import { useBagHistory } from "../../hooks/useBagHistory";

const Baghistory = () => {
  const [state]: any = useUser();

  const { data } = useBagHistory(state?._id!);

  console.log(data);
  return (
    <div className="flex  justify-center items-center ">
      {data?.bagHistory.map((props: any) => (
        <div className="w-[550px] h-[300px] justify-between flex items-center  border mt-5 rounded-md flex-wrap px-5">
          <div className="w-[300px] border h-[100px] p-3  items-center justify-center ">
            <div className="flex">
              <div className="items-center flex">quantity:</div>
              <span className="ml-3">{props.bag}</span>
            </div>
            <div className="flex  mt-2">
              {" "}
              <div className="items-center flex">cost:</div>
              <span className="ml-3">{props.cash}</span>
            </div>
          </div>
          <div className="w-[200px] border h-[100px] ">
            <img
              src={image}
              alt=""
              className=" w-[100%] h-[100%] object-cover "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Baghistory;
