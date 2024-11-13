//
import { FaPhone } from "react-icons/fa";
import { FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { AppContextSlice } from "../../../context/AppContext";
import { useContext } from "react";

export default function HeaderBottom() {
  const {
    cartArray,
    setShowSearchPage,
    setShowWishList,
    wishListArray,
    searchData,
  } = useContext(AppContextSlice);
  const { pathname } = useLocation();

  return (
    <>
      <div className="w-[200px] h-[50px] bg-white border rounded-full flex justify-center flex-col items-center shadow">
        <h1 className="text-[12px]  text-[#4b4b4b]">
          Order Online or Call Now:
        </h1>
        <div className="flex justify-center items-center text-[#4b4b4b]">
          <FaPhone size={20} />
          <span className="font-bold  mx-1"> +01033998557 </span>
        </div>
      </div>
      <div className="w-[200px] h-[50px] bg-white border rounded-full flex justify-center gap-3 items-center shadow">
        {/* <Link
          // to={""}
          onClick={handelShowUserAuth}
          className={`hover:bg-[#ffca3c] rounded-full duration-150 p-2 ${
            pathname === "/login" ? "bg-[#ffca3c]" : ""
          }`}
        >
          <FiUser size={20} />
        </Link> */}
        <div
          className="hover:bg-[#ffca3c] rounded-full duration-150 p-2 relative"
          onClick={() => setShowWishList(true)}
        >
          <FiHeart size={20} />
          {wishListArray?.length > 0 && (
            <span className="w-[15px] h-[15px] bg-red-600 text-[10px] text-white rounded-full top-0 -right-[5px] absolute flex justify-center items-center">
              {wishListArray?.length}
            </span>
          )}
        </div>
        <Link
          to={"/cart"}
          className={`hover:bg-[#ffca3c] relative rounded-full duration-150 p-2 ${
            pathname === "/cart" ? "bg-[#ffca3c]" : ""
          }`}
        >
          <FiShoppingBag size={20} />
          {cartArray?.length > 0 && (
            <span className="w-[15px] h-[15px] bg-red-600 text-[10px] text-white rounded-full top-0 -right-[5px] absolute flex justify-center items-center">
              {cartArray?.length}
            </span>
          )}
        </Link>
        <div
          className="hover:bg-[#ffca3c] rounded-full duration-150 p-2 relative"
          onClick={() => setShowSearchPage(true)}
        >
          <FiSearch size={20} />
          {searchData?.length > 0 && (
            <span className="w-[15px] h-[15px] bg-red-600 text-[10px] text-white rounded-full top-0 -right-[1px] absolute flex justify-center items-center">
              {searchData?.length}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
