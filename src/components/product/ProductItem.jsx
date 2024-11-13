import ProductPrice from "./ProductPrice";
import { FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProductItem({ item, handelWishList }) {
  return (
    <>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="relative rounded-[10px] shadow-lg overflow-hidden  h-[380px] lg:w-[260px] md:w-[250px] w-[280px] flex justify-center flex-col border border-slate-300"
      >
        <div className="min-h-[250px] flex justify-center items-center border-b ">
          <img src={item?.pic} alt="" className="h-[100%] p-3" />
        </div>
        <div className="h-[100%] bg-white ">
          <ProductPrice item={item} />
        </div>
        <div
          className={`${
            item?.isWishListChecked
              ? "text-white bg-red-500"
              : "text-red-600 bg-white"
          } absolute top-2 right-2 w-[40px] h-[40px] border shadow border-gray-300  rounded-[10px] flex justify-center items-center cursor-pointer`}
          onClick={() => handelWishList(item)}
        >
          <FiHeart size={25} />
        </div>
      </motion.div>
    </>
  );
}
