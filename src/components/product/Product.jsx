//
import ProductItem from "./ProductItem";
import { MdFastfood } from "react-icons/md";
import { useContext } from "react";
import { AppContextSlice } from "../../context/AppContext";
import { motion } from "framer-motion";

export default function Product() {
  const { productsData } = useContext(AppContextSlice);

  return (
    <>
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="flex justify-start gap-3 items-center border-t mt-[50px] pt-[30px] border-gray-300"
      >
        <span className="text-red-600 sm:text-[80px] text-[45px]">
          <MdFastfood />
        </span>
        <h1 className="mb-2 font-bold sm:text-[40px] text-[30px]  my-5 text-gray-700">
          Products
        </h1>
      </motion.div>
      <div className="flex gap-3 flex-wrap lg:justify-start justify-center mt-[30px]">
        {productsData?.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
