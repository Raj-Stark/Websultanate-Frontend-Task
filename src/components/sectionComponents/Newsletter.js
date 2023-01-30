import React from "react";

const Newsletter = () => {
  return (
    <section className="grid grid-cols-2 bg-red-500 h-[600px]   ">
      <div className=" bg-[#D9D9D9]"></div>

      <div className=" bg-[#E0F6F1]  flex flex-col justify-center pl-20  ">
        <h1 className=" text-[64px] font-playFair text-[#07484A] ">
          Join Our <br /> <span className=" font-bold"> NewsLetter</span>{" "}
        </h1>
        <p className="text-[#07484A] text-md ">
          Receive exclusive deals, discounts and many offers.
        </p>

        <input
          type="text"
          className=" max-w-lg mt-4 px-2 py-4 bg-transparent"
          placeholder="Enter Your Email"
        />
        <div className=" mt-4">
          <button className="  text-base  rounded-lg  py-6  px-24 bg-[#70908B] text-white capitalize">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
