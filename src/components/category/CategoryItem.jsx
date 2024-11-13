import { useContext } from "react";
import { AppContextSlice } from "../../context/AppContext";
import { motion } from "framer-motion";

export default function CategoryItem({ item }) {
  const { setSelectedCategory, selectedCategory } = useContext(AppContextSlice);

  return (
    <>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        onClick={() => setSelectedCategory(item.name)}
        className={` ${
          selectedCategory === item.name
            ? "border-[5px] border-red-600"
            : "border-gray-400"
        } w-[180px] h-[200px] rounded-[30px] border  hover:bg-gray-100 duration-150  flex justify-center flex-col overflow-hidden cursor-pointer`}
      >
        <div className="min-h-[150px] flex justify-center items-center">
          <img src={item.pic} alt="" className="h-[100%] p-3" />
        </div>
        <div
          className={` ${
            selectedCategory === item.name ? "bg-red-600" : "bg-gray-500"
          } h-[100%] flex justify-center items-center font-bold capitalize text-gray-100 text-[22px]   hover:bg-red-600 duration-150`}
        >
          <h3> {item.name} </h3>
        </div>
      </motion.div>
    </>
  );
}
