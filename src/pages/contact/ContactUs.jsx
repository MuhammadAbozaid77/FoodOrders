//
import Contacts from "./Contacts";
import ContactEmail from "./ContactEmail";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <>
      <div className="md:p-[50px] sm:p-[40px] p-[20px]">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="w-[100%]"
        >
          <Contacts />
        </motion.div>
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="w-[100%]"
        >
          <ContactEmail />
        </motion.div>
      </div>
    </>
  );
}
