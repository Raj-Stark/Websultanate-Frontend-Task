import { useProductsContext } from "../../Context/ProductsContext";
import OnlyProduct from "./OnlyProduct";

const RenderingProducts = () => {
  const { products } = useProductsContext();

  return (
    <div className=" h-auto grid   justify-items-center gap-y-16  xl:grid-cols-2    ">
      {products.map((item, index) => {
        return <OnlyProduct key={index} data={item}></OnlyProduct>;
      })}
    </div>
  );
};

export default RenderingProducts;
