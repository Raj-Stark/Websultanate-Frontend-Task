import React from "react";
import { reviews } from "../../data";
import Reviews from "../subComponents/Reviews";

import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  return (
    <article className="h-screen max-w-screen-2xl mx-auto ">
      <h1 className=" mt-16 text-lg xl:text-[64px] text-center font-playFair font-bold text-[#07484A] px-2">
        Testimonials
      </h1>

      <p className="text-base xl:text-lg text-center   text-[#07484A] px-2 mt-4">
        Over 15,000 happy customers.
      </p>

      <div className=" flex overflow-x-scroll  scrollbar-thin scrollbar-thumb-[#70908B]  scrollbar-track-[#07484A] scroll-px-40 ">
        {reviews.map((item, i) => {
          return <Reviews key={i} data={item}></Reviews>;
        })}
      </div>
    </article>
  );
};

export default Testimonial;
