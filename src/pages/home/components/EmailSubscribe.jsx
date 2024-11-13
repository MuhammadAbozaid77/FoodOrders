//
import { IoFastFoodOutline } from "react-icons/io5";

export default function EmailSubscribe() {
  return (
    <>
      <div className="bg-[#FFCA3C] h-[350px]">
        <div className="relative h-[80px] w-full md:p-[50px] p-[20px] mt-[150px] flex justify-center items-start ">
          <div className="absolute flex justify-center items-center w-[150px] h-[150px]  text-[#95601c] -top-[75px] rounded-full bg-[#FFCA3C]">
            <IoFastFoodOutline size={100} />
          </div>
        </div>
        <div className="md:p-[50px] p-[20px]">
          <h1 className="text-[#22272d] text-[30px] font-semibold text-center">
            Love Burgers? Like Deals?
          </h1>
          <p className="text-[#95601c] text-center text-[18px] font-semibold">
            Be the first to know about our newest menu items and latest offers.
          </p>
          <div className="mt-[20px] flex justify-center">
            <div className="flex justify-center items-center w-[500px] h-[60px] rounded-[10px] border p-2 bg-white gap-2">
              <input className="w-[100%] h-[100%]" />
              <span className="w-[100px] border h-[100%] rounded-[10px] flex justify-center items-center text-white bg-[#f2002d] font-semibold">
                Submit
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
