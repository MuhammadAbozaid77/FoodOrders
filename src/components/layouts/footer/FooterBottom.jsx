//
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
export default function FooterBottom() {
  return (
    <>
      <div className="flex justify-start items-center gap-3 text-[#aeaeae]">
        <span className="hover:text-gray-500 duration-100 cursor-pointer">
          <FaFacebookF size={18} />
        </span>
        <span className="hover:text-gray-500 duration-100 cursor-pointer">
          <FaTwitter size={18} />
        </span>
        <span className="hover:text-gray-500 duration-100 cursor-pointer">
          <FaYoutube size={18} />
        </span>
        <span className="hover:text-gray-500 duration-100 cursor-pointer">
          <FaInstagram size={18} />
        </span>
      </div>
      <div className="text-[#aeaeae] text-[12px]">
        Project by
        <span className="text-[#cf2e2e] hover:underline mx-1">
          Muhammad Abozaid
        </span>
        | © 2024 All rights reserved!
      </div>
    </>
  );
}
