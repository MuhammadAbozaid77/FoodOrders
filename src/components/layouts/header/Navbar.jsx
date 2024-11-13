import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

import { AppContextSlice } from "../../../context/AppContext";
import { logoutFunction } from "../../../data/apiAuth";

export default function Navbar() {
  const { setShowSideBar, userData, setuserData } = useContext(AppContextSlice);
  const UserKeyCode = localStorage.getItem("UserKey");

  const handelLogout = () => {
    logoutFunction();
    setuserData(null);
  };

  return (
    <>
      <div className="flex justify-between items-center md:p-[20px] px-[30px] w-[100%] relative">
        <div className="md:w-[250px]  w-[120px] md:flex justify-center items-center">
          <img src={logo} alt="" className="w-[50%]" />
        </div>
        <ul className="hidden md:flex justify-center items-center gap-5 font-semibold  text-white uppercase text-[18px] w-[100%]">
          <NavLink to={""}> Home </NavLink>
          <NavLink to={"/about"}> About </NavLink>
          <NavLink to={"/shop"}> Menu </NavLink>
          {UserKeyCode && <NavLink to={"/orders"}> Orders </NavLink>}
          {UserKeyCode && <NavLink to={"/location"}> Location </NavLink>}
          <NavLink to={"/contact"}> Contact </NavLink>
        </ul>
        <ul className="hidden md:flex justify-start items-center gap-5 font-semibold  text-white hover:text-gray-600 uppercase text-[18px] ">
          <div className="bg-white  duration-150 text-gray-400 hover:text-gray-600 font-bold p-2 rounded flex justify-between items-center">
            <NavLink to={"login"}>
              <FaUser size={25} />
            </NavLink>
            {userData && <span className="text-[14px] mx-2">{userData}</span>}
          </div>
          {userData && (
            <button
              className="bg-white  duration-150 text-gray-400 hover:text-red-600 font-bold p-2 rounded"
              onClick={handelLogout}
            >
              <span>
                <MdOutlineLogout size={25} />
              </span>
            </button>
          )}
        </ul>

        <div
          className="flex justify-center items-center md:hidden w-[50px] h-[50px] bg-black rounded-full text-white cursor-pointer"
          onClick={() => setShowSideBar(true)}
        >
          <GiHamburgerMenu size={30} />
        </div>
      </div>
    </>
  );
}
