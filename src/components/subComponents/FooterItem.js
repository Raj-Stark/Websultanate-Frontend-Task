import React from "react";

const FooterItem = ({ title, desc1, desc2, desc3 }) => {
  return (
    <article className=" space-y-2 text-[#07484A]">
      <h1 className=" text-base font-bold  mb-6">{title}</h1>
      <p>{desc1}</p>
      <p>{desc2}</p>
      <p>{desc3}</p>
    </article>
  );
};

export default FooterItem;
