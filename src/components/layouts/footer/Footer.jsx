//
import FooterBottom from "./FooterBottom";
import { FaLocationDot, FaPhone, FaPaypal } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
import { SiPayoneer } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-[50px] md:px-[100px] px-[50px]  p-[20px]  bg-[#292929] gap-5">
          <div className="">
            <h1 className="text-[25px] text-white font-bold relative mb-[30px]">
              Information
            </h1>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300">
              Home
            </h3>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300">
              About Us
            </h3>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300">
              Our Menu
            </h3>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300">
              Blog
            </h3>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300">
              Contact
            </h3>
          </div>

          <div>
            <h1 className="text-[25px] text-white font-bold relative mb-[30px]">
              Extras
            </h1>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300">
              Cart
            </h3>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300">
              Orders
            </h3>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300">
              Contact
            </h3>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300">
              Privacy Policy
            </h3>
          </div>

          <div>
            <h1 className="text-[25px] text-white font-bold relative mb-[30px]">
              Contact
            </h1>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300 flex justify-start items-center">
              <span className="me-2">
                <FaLocationDot />
              </span>
              <span> Egypt - Nasr City </span>
            </h3>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300 flex justify-start items-center">
              <span className="me-2">
                <FaPhone />
              </span>
              <span> 01128787412 </span>
            </h3>
            <h3 className="text-white hover:text-[#ffca3c] my-2 hover:translate-x-3 duration-300 flex justify-start items-center">
              <span className="me-2">
                <MdEmail />
              </span>
              <span> zidanam6@gmail.com </span>
            </h3>
          </div>

          <div>
            <h1 className="text-[25px] text-white font-bold relative mb-[30px]">
              We Accept
            </h1>
            <div className="flex justify-start items-center flex-wrap gap-5">
              <h3 className="text-white w-[80px] flex justify-center items-center border p-2 rounded-[10px]">
                <RiMastercardFill size={30} />
              </h3>
              <h3 className="text-white w-[80px] flex justify-center items-center border p-2 rounded-[10px]">
                <FaPaypal size={30} />
              </h3>
              <h3 className="text-white w-[80px] flex justify-center items-center border p-2 rounded-[10px]">
                <RiVisaLine size={30} />
              </h3>
              <h3 className="text-white w-[80px] flex justify-center items-center border p-2 rounded-[10px]">
                <SiPayoneer size={30} />
              </h3>
            </div>
          </div>
        </div>
        <div className="p-[40px] bg-[#222222] flex justify-between items-center flex-wrap gap-3">
          <FooterBottom />
        </div>
      </footer>
    </>
  );
}
