import React from "react";
import money from "../../assets/money.png";
import customer from "../../assets/customer.png";
import res from "../../assets/return.png";

const Benefits = () => {
  return (
    <section className=" h-[700px] bg-[#E0EFF6] p-10">
      <h1 className=" text-center  text-[64px]  font-playFair font-bold text-[#07484A]">
        Benefits for your expediency
      </h1>
      <article className=" max-w-screen-lg mx-auto  h-[450px] flex  justify-between items-center   ">
        <div className=" flex flex-col  items-center space-y-4  ">
          <div>
            <img src={money} alt="" />
          </div>
          <h1 className=" text-lg font-bold font-playFair text-[#07484A]">
            Payment Method
          </h1>
          <p className=" text-center text-base font-[400] font-sans text-[#07484A] ">
            We offer flexible payment options, <br /> to make easier.
          </p>
        </div>
        <div className=" flex flex-col  items-center space-y-4 ">
          <div>
            <img src={res} alt="" />
          </div>
          <h1 className=" text-lg font-bold font-playFair text-[#07484A]">
            Return Policy
          </h1>
          <p className=" text-center text-base font-[400] font-sans text-[#07484A] ">
            You can return a product <br /> within 30 days.
          </p>
        </div>
        <div className=" flex flex-col  items-center space-y-4  ">
          <div>
            <img src={customer} alt="" />
          </div>
          <h1 className=" text-lg font-bold font-playFair text-[#07484A]">
            Customer Support
          </h1>
          <p className=" text-center text-base font-[400] font-sans text-[#07484A] ">
            Our customer support <br /> is 24/7.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Benefits;
