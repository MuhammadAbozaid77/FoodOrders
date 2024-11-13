//
import { MdDeliveryDining } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbTimeDuration45 } from "react-icons/tb";
import { FaStore } from "react-icons/fa6";

export default function WhatWeAre() {
  return (
    <>
      <div className="w-[100%] md:px-[100px] px-[20px] py-2  mt-[50px]  pt-[50px] ">
        <div className="flex justify-center items-center lg:flex-row flex-col w-[100%]">
          <span className="font-bold sm:text-[40px] text-[25px] ">
            What We Serve Beside
          </span>
          <span className="font-bold sm:text-[40px] text-[25px] text-red-500  mx-2">
            Delicious Food
          </span>
        </div>
        <div className="flex justify-center items-center ">
          <p className="mb-3 text-gray-500 dark:text-gray-400 font-semibold md:w-[700px] w-[100%] text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
            sint nulla consectetur accusantium tempora qui! Omnis odio eligendi
            aperiam? Esse harum et, id veritatis quam minus ratione dolorum
            animi. Adipisci!
          </p>
        </div>
      </div>

      <div className="flex sm:gap-5 gap-2 flex-wrap justify-center  py-[50px]">
        <div className="border p-3 lg:w-[220px] sm:w-[160px] w-[140px] sm:h-[150px] h-[100px] rounded-[10px] flex justify-center items-center flex-col hover:bg-gray-100 duration-150">
          <span className="text-red-500 sm:text-[50px] text-[35px]">
            <TbTimeDuration45 />
          </span>
          <span className="text-[16px] mt-2 font-semibold text-gray-600">
            Fast Delivery
          </span>
        </div>

        <div className="border p-3 lg:w-[220px] sm:w-[160px] w-[140px] sm:h-[150px] h-[100px] rounded-[10px] flex justify-center items-center flex-col hover:bg-gray-100 duration-150">
          <span className="text-red-500 sm:text-[50px] text-[35px]">
            <MdDeliveryDining />
          </span>
          <span className="text-[16px]  mt-2 font-semibold text-gray-600">
            Fast Delivery
          </span>
        </div>

        <div className="border p-3 lg:w-[220px] sm:w-[160px] w-[140px] sm:h-[150px] h-[100px] rounded-[10px] flex justify-center items-center flex-col hover:bg-gray-100 duration-150">
          <span className="text-red-500 sm:text-[50px] text-[35px]">
            <FaStore />
          </span>
          <span className="text-[16px]  mt-2 font-semibold text-gray-600">
            Fast Delivery
          </span>
        </div>

        <div className="border p-3 lg:w-[220px] wsm:-[156px]  w-[140px] sm:h-[150px] h-[100px] rounded-[10px] flex justify-center items-center flex-col hover:bg-gray-100 duration-150">
          <span className="text-red-500 sm:text-[50px] text-[35px]">
            <GiForkKnifeSpoon />
          </span>
          <span className="text-[16px] mt-2 font-semibold text-gray-600">
            Fast Delivery
          </span>
        </div>
      </div>
    </>
  );
}
