//
import { TfiClose } from "react-icons/tfi";
import WishListProducts from "./WishListProducts";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { AppContextSlice } from "../../context/AppContext";
import { useContext } from "react";

export default function WhishList({ setShowWishList }) {
  const { wishListArray, handelWishList } = useContext(AppContextSlice);

  return (
    <>
      <div className="p-[50px]">
        <div className="flex justify-end items-center">
          <span
            className="border p-2 flex justify-center items-center rounded-full bg-[#ffca3c] hover:bg-[#e6bd4e]  duration-150"
            onClick={() => setShowWishList(false)}
          >
            <TfiClose size={20} />
          </span>
        </div>

        <div className="flex justify-center items-center">
          <span className="text-red-500 text-[40px]">
            <BsFillBox2HeartFill />
          </span>
          <span className="text-[30px] mx-5 text-gray-600 font-bold">
            WishList Products
          </span>
        </div>

        <div className="flex justify-center items-center">
          <WishListProducts
            data={wishListArray}
            handelWishList={handelWishList}
          />
        </div>
      </div>
    </>
  );
}
