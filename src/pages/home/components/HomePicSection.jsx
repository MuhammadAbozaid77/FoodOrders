//
import { useNavigate } from "react-router-dom";
import pic44 from "../../../assets/socialmedia/pic44.jpg";
import { motion, useScroll } from "framer-motion";
import Container from "../../../components/ui/Container";

export default function HomePicSection() {
  const navigate = useNavigate();

  const handelNavigate = () => {
    navigate("/orders");
  };
  return (
    <Container>
      <div className="w-[100%] flex justify-between items-center lg:h-[450px] h-auto gap-5 lg:flex-row flex-col">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="h-[100%]  rounded-[20px] w-[100%]"
        >
          <h1 className="md:text-[50px] text-[30px] text-red-500 font-bold block">
            Fatest Delivery
          </h1>
          <h1 className="md:text-[30px] text-[20px] text-gray-500 font-bold block leading-[25px]">
            Easy PickUp
          </h1>
          <p className="text-gray-500  mt-3 md:text-[18px] text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            ullam, laborum voluptas impedit in placeat? Veritatis qui officia
            tempore suscipit placeat, enim delectus, perspiciatis, voluptate
            commodi numquam quam inventore quasi ducimus ex et recusandae eos
            itaque veniam perferendis ratione doloremque voluptates! Atque
            neque, a facere aliquam eum placeat commodi! Mollitia.
          </p>
          <button
            onClick={handelNavigate}
            className="my-3 transition-colors py-2 text-[25px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[5px]  rounded-tl-[5px]  bg-red-500 text-white font-bold px-5 shadow hover:bg-red-600 duration-150 "
          >
            Order Now
          </button>
        </motion.div>
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="lg:h-[100%] h-[400px]  overflow-hidden  w-[100%]  flex justify-center items-center"
        >
          <img src={pic44} alt="" className="h-[100%]" />
        </motion.div>
      </div>
    </Container>
  );
}
