import React from "react";
import { useProductsContext } from "../../Context/ProductsContext";

const OnlyProduct = ({ data }) => {
  const { title, description, price, images } = data;
  const { addToCart } = useProductsContext();
  return (
    <article className=" bg-[#D9D9D9]  w-80  rounded-xl border-[#D9D9D9] border-2 shadow-lg ">
      <div className="w-full h-40">
        <img
          className="h-full w-full object-cover rounded-t-xl"
          src={images[0]}
          alt=""
        />
      </div>

      <div className=" p-2 min-h-[150px] ">
        <h1 className=" capitalize text-md overflow-clip ">{title}</h1>
        <p className=" overflow-clip">{`${description.slice(0, 100)}`}</p>
      </div>

      <div className="p-2 flex justify-between items-center mb-4">
        <h1 className="text-red-500 font-medium">{`Price : $${price}`}</h1>
        <button
          className="px-3 py-1 bg-[#07484A] rounded-lg text-sm text-white"
          onClick={() => addToCart(data)}
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default OnlyProduct;
