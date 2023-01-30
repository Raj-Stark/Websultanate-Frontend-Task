import React from "react";
import Navbar from "../subComponents/Navbar";

const Hero = () => {
  return (
    <section className=" bg-[#C4C4C4] h-screen rounded-b-[50px] w-screen ">
      <div className=" h-full xl:max-w-screen-2xl xl:mx-auto overflow-hidden ">
        <Navbar></Navbar>

        <article className=" flex flex-col  mt-[128px] max-w-[668px]  xl:items-start xl:mt-[200px] px-[16px] ">
          <h1 className=" text-xl font-bold text-[#07484A] font-playFair text-center  py-1 xl:text-[64px] xl:text-left">
            Exclusive Deals of Furniture Collection
          </h1>

          <p className="mt-[16px] font-openSans text-base xl:text-md text-center text-[#07484A] font-normal ">
            Explore different categories. Find the best deals.
          </p>

          <div className=" self-center xl:self-start mt-[40px] ">
            <button className="px-[40px] py-[16px] bg-[#70908B] rounded-[10px] text-base font-bold text-[#FDFBF8] ">
              Shop Now
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
