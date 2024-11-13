import { useContext } from "react";
import CartItem from "./CartItem";
import { AppContextSlice } from "../../../context/AppContext";

//
export default function CartItems() {
  const { cartArray } = useContext(AppContextSlice);
  // console.log(cartArray);

  return (
    <>
      <div className="font-semibold flex justify-start items-center relative text-[25px] mb-5">
        <span> Cart </span>
        <span className="mx-3 text-red-500">( {cartArray.length} )</span>
        <span className="absolute top-10 left-2 w-[70px] h-[4px] bg-red-500 rounded"></span>
      </div>
      <div className="flex flex-col gap-2">
        {cartArray?.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
