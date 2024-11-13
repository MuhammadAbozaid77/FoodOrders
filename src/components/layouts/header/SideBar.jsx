//
import { FaPhone } from "react-icons/fa";
import { FiUser, FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContextSlice } from "../../../context/AppContext";
import { useContext } from "react";

export default function SideBar({ setShowSideBar }) {
  const { setShowWishList, setShowSearchPage, showUserAuth, cartArray } =
    useContext(AppContextSlice);

  const list = {
    visible: { x: 0 },
    hidden: { x: -100 },
  };

  const item = {
    visible: { x: 0 },
    hidden: { x: -100 },
  };

  const phoneUpper = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 100, opacity: 0 },
  };

  return (
    <>
      <div className="w-[100%]">
        <div className="flex justify-end items-center text-white w-[100%] p-[20px]">
          <span
            className="hover:bg-red-500 hover:text-black  p-2 rounded-full cursor-pointer"
            onClick={() => setShowSideBar(false)}
          >
            <TfiClose size={20} />
          </span>
        </div>
        <div className="p-[20px]">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={list}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white flex justify-start flex-col gap-3 text-[20px]"
          >
            <motion.li variants={item}>
              <Link
                to={"/home"}
                className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
              >
                Home
              </Link>
            </motion.li>

            <motion.li variants={item}>
              <Link
                to={""}
                className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
              >
                About
              </Link>
            </motion.li>

            <motion.li variants={item}>
              <Link
                to={"/shop"}
                className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
              >
                Menu
              </Link>
            </motion.li>

            <motion.li variants={item}>
              <Link
                to={"/orders"}
                className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
              >
                Orders
              </Link>
            </motion.li>

            <motion.li variants={item}>
              <Link
                to={""}
                className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
              >
                Location
              </Link>
            </motion.li>

            <motion.li variants={item}>
              <Link
                to={"/contact"}
                className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
              >
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={phoneUpper}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="p-[20px] border-t mt-[30px]">
            <h1 className="text-[12px]  text-[#b9b9b9]">
              Order Online or Call Now:
            </h1>
            <div className="flex justify-start items-center text-green-500">
              <FaPhone size={20} />
              <span className="font-bold  mx-1"> +01033998557 </span>
            </div>
          </div>

          <div className="p-[20px] border-b border-t text-white flex justify-between items-center">
            <span
              className="hover:bg-[#ffca3c] duration-150 p-2 rounded-full hover:text-black"
              onClick={() => showUserAuth(true)}
            >
              <FiUser size={25} />
            </span>
            <span
              className="hover:bg-[#ffca3c] duration-150 p-2 rounded-full hover:text-black"
              onClick={() => setShowWishList(true)}
            >
              <FiHeart size={25} />
            </span>
            <Link
              to={"/cart"}
              className="hover:bg-[#ffca3c] duration-150 p-2 rounded-full hover:text-black relative"
            >
              <FiShoppingBag size={25} />
              {cartArray?.length > 0 && (
                <span className="w-[15px] h-[15px] bg-red-600 text-[10px] text-white rounded-full top-0 -right-[5px] absolute flex justify-center items-center">
                  {cartArray?.length}
                </span>
              )}
            </Link>
            <span
              className="hover:bg-[#ffca3c] duration-150 p-2 rounded-full hover:text-black"
              onClick={() => setShowSearchPage(true)}
            >
              <FiSearch size={25} />
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
}
