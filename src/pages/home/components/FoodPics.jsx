//
import pic from "../../../assets/pic1.jpg";
import pic2 from "../../../assets/pic2.jpg";
import pic3 from "../../../assets/pic3.jpg";
import Container from "../../../components/ui/Container";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FoodPics() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <>
      <Container>
        <div className="flex justify-center items-center bg-slate-200 gap-10 md:p-[50px] sm:p-[40px] p-[20px] flex-wrap rounded-lg my-[50px]">
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className=" bg-white p-5 h-[200px] flex justify-end items-center relative rounded-lg shadow-lg border"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={pic}
              alt=""
              className={` h-[100%] transition-transform duration-300 ${
                isHovered ? "transform scale-xx " : ""
              }`}
            />

            <div className="absolute w-[180px] h-[100%] left-0 flex justify-center items-start flex-col px-5 z-20">
              <span className="font-bold text-red-500 leading-[20px]">
                Save 30%
              </span>
              <span className="font-bold text-slate-800 sm:text-[30px] text-[22px] sm:leading-[30px] leading-[20px]">
                Burgers Combo
              </span>
              <span className="sm:text-[14px] text-[12px] text-gray-500 font-bold sm:leading-[20px] leading-[15px]">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className=" bg-white p-5 h-[200px] flex justify-end items-center relative rounded-lg shadow-lg border"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <img
              src={pic2}
              alt=""
              className={` h-[100%] transition-transform duration-300 ${
                isHovered2 ? "transform scale-xx " : ""
              }`}
            />

            <div className="absolute w-[180px] h-[100%] left-0 flex justify-center items-start flex-col px-5 z-20">
              <span className="font-bold text-red-500 leading-[20px]">
                Save 30%
              </span>
              <span className="font-bold text-slate-800 sm:text-[30px] text-[22px] sm:leading-[30px] leading-[20px]">
                Burgers Combo
              </span>
              <span className="sm:text-[14px] text-[12px] text-gray-500 font-bold sm:leading-[20px] leading-[15px]">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className=" bg-white p-5 h-[200px] flex justify-end items-center relative rounded-lg shadow-lg border"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <img
              src={pic3}
              alt=""
              className={` h-[100%] transition-transform duration-300 ${
                isHovered3 ? "transform scale-xx " : ""
              }`}
            />

            <div className="absolute w-[180px] h-[100%] left-0 flex justify-center items-start flex-col px-5 z-20">
              <span className="font-bold text-red-500 leading-[20px]">
                Save 30%
              </span>
              <span className="font-bold text-slate-800 sm:text-[30px] text-[22px] sm:leading-[30px] leading-[20px]">
                Burgers Combo
              </span>
              <span className="sm:text-[14px] text-[12px] text-gray-500 font-bold sm:leading-[20px] leading-[15px]">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
}
