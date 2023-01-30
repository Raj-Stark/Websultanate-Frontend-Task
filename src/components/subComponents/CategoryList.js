import React, { useEffect } from "react";
import { useProductsContext } from "../../Context/ProductsContext";

const CategoryList = () => {
  const { fetchCategories, categories, fetchProducts } = useProductsContext();

  let url = `https://dummyjson.com/products/categories`;

  const handleClick = (category) => {
    let productCategoryURL = `https://dummyjson.com/products/category/${category}`;
    fetchProducts(productCategoryURL);
  };

  useEffect(() => {
    fetchCategories(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className="bg-[#C4C4C4]  h-80 text-center  mt-10  rounded-md p-3 ">
      <div className=" w-full h-full grid grid-cols-2  place-items-center gap-x-2 gap-y-4  overflow-scroll  ">
        {categories.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(item)}
              className=" capitalize px-2 py-2 bg-[#07484A]  text-white rounded-md "
            >
              {item}
            </button>
          );
        })}
      </div>
    </article>
  );
};

export default CategoryList;
