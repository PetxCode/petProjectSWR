import React from "react";

const Feehistory = () => {
  return (
    <div>
      <div className="w-[100%] h-[500px] flex justify-center items-center">
        <div className="w-[50%] h-[400px] flex justify-center items-center border-[blue] border-[1px]">
          <div className="w-[400px] h-[100px] border-[#4f4f4] border-[1px]">
            <div className="w-[100px] h-[100px] flex justify-center items-center bg-slate-300 flex-col gap-3">
              <span>quantity: 1</span>
              <span>Cost 1</span>
              <div className="w-[250px] h-[100px] flex items-center justify-center bg-[red]">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feehistory;
