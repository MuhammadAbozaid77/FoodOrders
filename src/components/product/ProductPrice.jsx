//
import { TiPlus } from "react-icons/ti";
import { useContext } from "react";
import { AppContextSlice } from "../../context/AppContext";
import { motion } from "framer-motion";

export default function ProductPrice({ item }) {
  const { handelSelectProduct } = useContext(AppContextSlice);

  return (
    <>
      <div className="flex items-center justify-between w-[100%] p-4 flex-col">
        <div className="w-[100%] flex  justify-between  flex-col">
          <div className="">
            <h1 className="text-[20px]"> {item.name} </h1>
          </div>
          <div className="flex justify-between items-center mt-[10px]">
            <h1 className="text-[25px] text-red-600 font-semibold">
              $ {item.price}
            </h1>
            <button
              onClick={() => handelSelectProduct(item)}
              className="rounded-[5px] bg-black hover:bg-slate-800 duration-150 text-white cursor-pointer w-[50px] flex justify-center items-center h-[30px]"
            >
              <TiPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
