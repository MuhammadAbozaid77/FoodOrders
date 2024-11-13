//
import { useContext } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { AppContextSlice } from "../../../context/AppContext";
import CartModal from "./CartModal";

export default function CartDetails() {
  const { total, handelShowCheckoutModal } = useContext(AppContextSlice);
  return (
    <>
      <div>
        <h1 className="font-semibold text-[20px] text-gray-700">
          Bill Details
        </h1>
        <div className="flex justify-between items-center mt-5">
          <span className="font-semibold text-gray-600"> Item total </span>
          <span className="font-semibold text-red-500"> $00.00 </span>
        </div>
        <div className="flex justify-between items-center mt-5">
          <span className="font-semibold text-gray-600">Delivery Charges </span>
          <span className="font-semibold text-red-500"> $00.50 </span>
        </div>
        <div className="flex justify-between items-center mt-5">
          <span className="font-semibold text-gray-600">
            Govt Taxes & Other Charges
          </span>
          <span className="font-semibold text-red-500"> $1.08 </span>
        </div>
        <div className="flex justify-between items-center mt-5 border-t pt-3">
          <span className="font-semibold text-gray-800 text-[20px]">Total</span>
          <span className="font-semibold text-red-500 text-[25px]">
            ${total === 0 ? "00.00" : total}
          </span>
        </div>

        <CartModal />

        {/* <button
          onClick={() => handelShowCheckoutModal()}
          className=" p-3 w-[100%] bg-red-500 hover:bg-red-700 duration-150 text-white my-5 font-semibold  
          flex justify-center items-center rounded-[10px] cursor-pointer"
        >
          <span className="text-[20px]"> Check Orders</span>
          <span className="mx-2">
            <MdKeyboardDoubleArrowRight size={30} />
          </span>
        </button> */}
      </div>
    </>
  );
}
