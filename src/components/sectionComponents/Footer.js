import React from "react";
import footerLogo from "../../assets/footer-logo.png";
import fb from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import ball from "../../assets/ball.png";
import twitter from "../../assets/twitter.png";
import FooterItem from "../subComponents/FooterItem";

const Footer = () => {
  return (
    <section className=" h-[400px] bg-[#F3F6F5]  flex flex-col justify-center px-24 ">
      <article className=" grid grid-cols-5  ">
        <div className="">
          <div>
            <img src={footerLogo} alt="" />
          </div>

          <div className=" flex w-full justify-between mt-6 ">
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
            <img src={insta} alt="" />
            <img src={ball} alt="" />
            <img src={twitter} alt="" />
          </div>

          <div className=" mt-4 space-y-2 text-[#07484A] ">
            <h1 className=" text-base font-bold">Address</h1>
            <p>+123 654 987</p>
            <p>877 The Bronx, NY</p>
            <p>14568, USA</p>
          </div>
        </div>
        <div className="  flex justify-center ">
          <FooterItem
            title={"My Account"}
            desc1={"Sign In"}
            desc2={"Register"}
            desc3={"Sizing"}
          ></FooterItem>
        </div>
        <div className="  flex justify-center ">
          <FooterItem
            title={"Help"}
            desc1={"Shipping"}
            desc2={"Return"}
            desc3={"Order Status"}
          ></FooterItem>
        </div>
        <div className="  flex justify-center ">
          <FooterItem
            title={"Shop"}
            desc1={"All Products"}
            desc2={"Bedroom"}
            desc3={"Dinning"}
          ></FooterItem>
        </div>
        <div className="  flex justify-center ">
          <FooterItem
            title={"Legal Stuff"}
            desc1={"Shopping & Delivery"}
            desc2={"Terms & Condition"}
            desc3={"Privacy & Policy"}
          ></FooterItem>
        </div>
      </article>
      <p className=" mt-6 text-[#07484A]  ">
        Copyright ©2020 INWOOD. All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
