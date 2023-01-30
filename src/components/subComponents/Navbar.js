import React from "react";
import hamburger from "../../assets/hamburger-icon.svg";
import cartimg from "../../assets/cart-icon.svg";
import lens from "../../assets/lens-icon.svg";
import logo from "../../assets/main-logo.svg";
import { useProductsContext } from "../../Context/ProductsContext";

const Navbar = () => {
  const { cart } = useProductsContext();

  console.log(cart);
  return (
    <article className="flex h-20 justify-between items-center  px-[16px] bg-[#C4C4C4]">
      <div className="xl:hidden">
        <img src={hamburger} alt="" />
      </div>
      <div>
        <img src={logo} alt="" />
      </div>

      <ul className="hidden xl:flex font-playFair text-base  space-x-10 text-[#07484A]  ">
        <li className="hover:font-bold hover:underline underline-offset-8 ">
          Home
        </li>
        <li className="hover:font-bold hover:underline underline-offset-8 ">
          Products
        </li>
        <li className="hover:font-bold hover:underline underline-offset-8 ">
          Categories
        </li>
        <li className="hover:font-bold hover:underline underline-offset-8 ">
          About
        </li>
        <li className="hover:font-bold hover:underline underline-offset-8 ">
          Contact Us
        </li>
      </ul>

      <div className="flex gap-[12px] xl:gap-10">
        <span>
          <img src={lens} alt="" />
        </span>

        <span className=" relative">
          <div className=" absolute -top-6 left-4 p-1 text-white bg-red-600 rounded-full ">
            {cart.length}
          </div>
          <img src={cartimg} alt="" />
        </span>
      </div>
    </article>
  );
};

export default Navbar;
