import React from "react";

import data from "../../data";
import OnlyProduct from "../subComponents/OnlyProduct";
import img from "../../assets/ppimage.png";
import img2 from "../../assets/ppxlimage.png";
import OurOwnCreation from "../subComponents/OurOwnCreation";

const PopularProducts = () => {
  return (
    <section className=" h-auto  ">
      <article className=" relative mt-[160px] h-full">
        <h1 className=" text-lg xl:text-[64px] text-center font-playFair font-bold text-[#07484A] px-2 mb-[52px]">
          Popular Products
        </h1>

        <div className=" hidden absolute left-0 top-12 xl:flex  h-4/5 ">
          <img src={img2} alt="" className=" h-full w-full" />
        </div>

        <div className=" absolute left-0 top-12  xl:hidden">
          <img src={img} alt="" />
        </div>
        <div className=" mx-[16px] mt-[60px]    scrollbar-thin scrollbar-thumb-[#70908B]  scrollbar-track-[#07484A] scroll-px-10 pb-24  py-2 relative flex gap-10  overflow-x-scroll whitespace-nowrap scroll scroll-smooth ">
          {data.products.map((item, index) => {
            return (
              <div key={index} className=" w-full h-full ">
                <OnlyProduct data={item}></OnlyProduct>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center w-full mt-[60px] xl:mt-[110px] ">
          <button className=" mx-[16px] rounded-lg   py-[24px] px-[38px] bg-[#70908B] text-white capitalize">
            Explore all items
          </button>
        </div>
      </article>
      <OurOwnCreation></OurOwnCreation>
    </section>
  );
};

export default PopularProducts;
