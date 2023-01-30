import React from "react";

const OurOwnCreation = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <article className="grid grid-cols-2 xl:grid-cols-3   gap-x-10  h-[500px]  content-center ">
      <div className=" h-96 bg-[#70908B] rounded-r-2xl  flex justify-center  items-center">
        {" "}
        <div className="px-2 ">
          <h1 className=" text-[40px] xl:text-[48px] text-left font-playFair font-bold text-white leading-[50px]">
            Our <br /> Own Creation
          </h1>
          <p className="ml-2 mt-4 text-white xl:text-base text-sm ">
            Designed in our studio
          </p>
        </div>
      </div>

      <div className="flex space-x-10 overflow-x-scroll xl:col-span-2  h-96 scrollbar-hide ">
        {arr.map((item, i) => {
          return (
            <div key={i} className="  rounded-2xl bg-[#D9D9D9] ">
              <div className="w-60"></div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default OurOwnCreation;
