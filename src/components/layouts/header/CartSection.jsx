//
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CartSection({ cartArray, handelShowUserAuth }) {
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <div
          onClick={handelShowUserAuth}
          className="w-[40px] h-[40px] border  flex justify-center items-center bg-gray-500 hover:bg-gray-600 duration-150 text-white rounded-[5px]"
        >
          <FaUser size={20} />
        </div>
        <Link
          to={"/cart"}
          className="w-[40px] h-[40px] border  flex justify-center items-center bg-gray-500 hover:bg-gray-600 duration-150 text-white rounded-[5px] relative"
        >
          <FaCartShopping size={20} />
          {cartArray?.length === 0 ? (
            <></>
          ) : (
            <span className="absolute w-[22px] h-[22px] rounded-full -top-[10px] -right-[10px] bg-red-500 border  flex justify-center items-center text-[12px] font-semibold">
              {cartArray?.length}
            </span>
          )}
        </Link>
      </div>
    </>
  );
}
