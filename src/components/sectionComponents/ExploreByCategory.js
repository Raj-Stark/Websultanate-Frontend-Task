import React, { useEffect } from "react";
import hamburger from "../../assets/hamburger-icon.svg";
import { BiSearch } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import { useProductsContext } from "../../Context/ProductsContext";
import CategoryList from "../subComponents/CategoryList";
import RenderingProducts from "../subComponents/RenderingProducts";
import XlCategoryList from "../subComponents/XlCategoryList";

const ExploreByCategory = () => {
  const {
    isCategoryListOpen,
    categoryListOpen,
    categoryListClose,
    products_loading,
    fetchProducts,
  } = useProductsContext();

  const handleClick = (isTrue) => {
    if (isTrue) {
      return categoryListClose();
    } else {
      return categoryListOpen();
    }
  };

  useEffect(() => {
    let url = `https://dummyjson.com/products/category/smartphones`;
    fetchProducts(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className=" h-auto px-[16px] max-w-screen-2xl mx-auto">
      <article className="pt-[80px] ">
        <h1 className=" text-lg xl:text-[64px] text-center font-playFair font-bold text-[#07484A] px-2">
          Explore by Category
        </h1>
        <div className=" mt-[36px] flex justify-between  xl:hidden ">
          <div className=" flex gap-[18px] rounded-[10px]  items-center bg-[#F0F0F0] py-[16px] px-2">
            <BiSearch size={30}></BiSearch>
            <input
              type="text"
              className="text-base bg-transparent placeholder:text-base "
              placeholder=" Search"
            />
          </div>

          <button onClick={() => handleClick(isCategoryListOpen)}>
            {isCategoryListOpen ? (
              <FaWindowClose
                size={30}
                className=" text-red-600"
              ></FaWindowClose>
            ) : (
              <img src={hamburger} alt="" />
            )}
          </button>
        </div>
      </article>

      {isCategoryListOpen && <CategoryList></CategoryList>}
      <div className="xl:hidden mt-[60px]">
        {products_loading ? (
          <h1>Loading ....</h1>
        ) : (
          <RenderingProducts></RenderingProducts>
        )}
      </div>

      <div className="hidden gap-x-20 mt-[60px] xl:grid grid-cols-3">
        <div>
          <XlCategoryList></XlCategoryList>
        </div>
        <div className="col-span-2">
          {products_loading ? (
            <h1 className=" text-center text-lg font-semibold">Loading ....</h1>
          ) : (
            <RenderingProducts></RenderingProducts>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreByCategory;
