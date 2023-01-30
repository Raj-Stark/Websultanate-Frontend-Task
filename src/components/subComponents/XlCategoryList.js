import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useProductsContext } from "../../Context/ProductsContext";

const XlCategoryList = () => {
  const { categories, fetchProducts, fetchCategories } = useProductsContext();

  const handleClick = (category) => {
    let productCategoryURL = `https://dummyjson.com/products/category/${category}`;
    fetchProducts(productCategoryURL);
  };
  let url = `https://dummyjson.com/products/categories`;
  useEffect(() => {
    fetchCategories(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article>
      <div className=" flex gap-[18px] rounded-[10px]  items-center bg-[#F0F0F0] py-[16px] px-2">
        <BiSearch size={30}></BiSearch>
        <input
          type="text"
          className="text-base bg-transparent placeholder:text-base "
          placeholder=" Search"
        />
      </div>

      <ul className=" pl-4 mt-10 h-[420px] scrollbar-thin scrollbar-thumb-[#70908B]  scrollbar-track-[#07484A] scroll-px-10 overflow-y-scroll flex flex-col gap-y-10">
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              className=" capitalize text-[#07484A] cursor-pointer "
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <button className=" mt-20 px-[40px] py-[16px] bg-[#70908B] rounded-[10px] text-base font-bold text-[#FDFBF8] ">
        All Categories
      </button>
    </article>
  );
};

export default XlCategoryList;
