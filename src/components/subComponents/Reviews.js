import React from "react";
import quote from "../../assets/quote.png";

const Reviews = ({ data }) => {
  const { desc, name, work } = data;
  return (
    <article className="w-full relative h-[400px] mt-40  mb-20 ">
      <div className=" absolute -top-16">
        <img src={quote} className=" inline" alt="" />
        <img src={quote} className=" inline ml-4" alt="" />
      </div>
      <article className=" h-full max-w-full mx-auto grid grid-cols-3 gap-x-12 p-6 min-w-[1550px] ">
        <div className=" col-span-1 ">
          <div className=" h-full w-full  bg-black rounded-xl "></div>
        </div>

        <div className="col-span-2 flex flex-col justify-between py-12 ">
          <p className=" text-lg text-[#07484A]  ">{desc}</p>

          <div>
            <h1 className=" font-bold text-[#07484A]">{name}</h1>
            <h2 className=" text-[#07484A]">{work}</h2>
          </div>
        </div>
      </article>
    </article>
  );
};

export default Reviews;
