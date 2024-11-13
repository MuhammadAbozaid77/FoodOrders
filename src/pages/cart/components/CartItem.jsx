//
import { IoMdClose } from "react-icons/io";
import { LuPlus, LuMinus } from "react-icons/lu";
import { AppContextSlice } from "../../../context/AppContext";
import { useContext } from "react";

export default function CartItem({ item }) {
  const { handelIncreaseProduct, handelDescreaseProduct, handelRemoveProduct } =
    useContext(AppContextSlice);
  return (
    <>
      <div className="flex justify-start items-center border rounded-[5px] bg-gray-100 hover:bg-gray-200 duration-150 gap-3 p-3">
        <div className="h-[100px] w-[150px] rounded-[10px]  flex justify-center items-center">
          <img
            src={item.pic}
            alt=""
            className="rounded w-[100%] h-[100%] border"
          />
        </div>
        <div className="w-[100%] flwx justify-center items-center flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[18px] text-gray-600 font-semibold">
                {item.name}
              </h1>
              <span> </span>
            </div>
            <span
              className="text-red-500 rounded cursor-pointer border border-gray-600 hover:bg-red-500 hover:text-white duration-150"
              onClick={() => handelRemoveProduct(item)}
            >
              <IoMdClose size={25} />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <button
                className="border p-2 rounded bg-slate-500 duration-150 hover:bg-slate-700 text-white"
                onClick={() => handelDescreaseProduct(item)}
              >
                <LuMinus size={15} />
              </button>
              <div className=" p-2 rounded text-[25px] font-semibold">
                {item.quantity}
              </div>
              <button
                className="border p-2 rounded  bg-red-500 hover:bg-red-700 duration-150 text-white"
                onClick={() => handelIncreaseProduct(item)}
              >
                <LuPlus size={15} />
              </button>
            </div>
            <span className="text-red-500 font-semibold text-[25px]">
              $ {item.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
