//
import { motion } from "framer-motion";
import WishListItem from "./WishListItem";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { useContext } from "react";
import { AppContextSlice } from "../../context/AppContext";

export default function WishListProducts() {
  const { wishListArray} = useContext(AppContextSlice);

  return (
    <>
      {wishListArray?.length === 0 ? (
        <>
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="lg:w-[850px] w-[100%]  mt-[50px] flex justify-center items-center flex-col"
          >
            <span className="text-gray-300 ">
              <BsFillBox2HeartFill size={100} />
            </span>
            <h1 className="text-[20px] mt-[10px] text-gray-500">
              No Items Founded
            </h1>
          </motion.div>
        </>
      ) : (
        <div className="lg:w-[850px] w-[100%] mt-[50px] grid md:grid-cols-2  grid-cols-1 gap-2  ">
          {wishListArray?.map((item, index) => (
            <WishListItem
              item={item}
              key={index}
            />
          ))}
        </div>
      )}
    </>
  );
}
