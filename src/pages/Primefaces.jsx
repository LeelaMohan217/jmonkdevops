import React from "react";

const Primefaces = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-20 border-neutral-600 shadow-2xl rounded-lg m-10">
        <div className="flex space-x-40">
          <div className="flex flex-col items-center space-y-10">
            <div className="border-neutral-600 shadow-lg  p-20 rounded-md ">
              <h1 className=" font-bold text-lg">Total</h1>
            </div>
            <div className="flex justify-between items-center space-x-10">
              <div className="border-neutral-600  shadow-lg p-20 rounded-md">
                <h1 className=" font-bold text-lg">Filled</h1>
              </div>
              <div className="border-neutral-600  shadow-lg p-20 rounded-md">
                <h1 className="font-bold text-lg">Unfilled</h1>
              </div>
            </div>
          </div>
          <div className="border-neutral-600 shadow-lg p-40 rounded-md">
            <h1 className="text-red-600 font-bold text-lg">
              Important Information
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Primefaces;
