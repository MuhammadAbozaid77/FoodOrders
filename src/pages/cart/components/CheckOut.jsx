import CheckForm from "./CheckForm";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";

export default function CheckOut({ onCloseModal }) {
  return (
    <>
      <div>
        <div className="fixed inset-0 h-[100vh] bg-black/90 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="w-[400px] h-[550px] bg-white p-3 rounded-[10px]"
          >
            <div>
              <div className="flex justify-end">
                <div className="flex justify-end items-center">
                  <span
                    onClick={onCloseModal}
                    className="border p-2 flex justify-center items-center rounded-full hover:bg-red-700 bg-red-600  duration-150 text-white"
                  >
                    <TfiClose size={20} />
                  </span>
                </div>
              </div>
              <CheckForm />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
