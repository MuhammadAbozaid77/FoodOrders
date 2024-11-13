import { useContext } from "react";
import { AppContextSlice } from "../../context/AppContext";
import { motion } from "framer-motion";
//

export default function SearchItem({ item }) {
  const { handelSelectProduct } = useContext(AppContextSlice);

  return (
    <>
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="h-[80px] shadow-lg  border mb-2 rounded-[10px] p-2 w-[100%] flex items-center justify-start gap-5"
      >
        <div className="flex justify-center items-center h-[100%] w-[100px] border-t border-gray-100 shadow-md">
          <img src={item.pic} alt="" className=" h-[100%]" />
        </div>
        <div className="flex justify-between items-center w-[100%]">
          <div className="flex justify-center items-start flex-col">
            <span className="font-semibold"> {item.name} </span>
            <span className="text-[25px] font-semibold text-red-500">
              ${item.price}
            </span>
          </div>
          <div className="p-3">
            <button
              className="border p-1 w-[100px] rounded-[10px] bg-red-600 hover:bg-red-700 duration-150 text-white text-[20px]"
              onClick={() => handelSelectProduct(item)}
            >
              Add
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
