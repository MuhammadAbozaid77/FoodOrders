import { Link } from "react-router-dom";
import { categoriesData } from "../../../assets/categoriesData";
import CategoryItem from "../../../components/category/CategoryItem";
import Container from "../../../components/ui/Container";
import { motion } from "framer-motion";
import { MdFastfood } from "react-icons/md";

export default function CategoryHome() {
  return (
    <Container>
              <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="flex justify-start gap-3 items-center"
      >
        <span className="text-red-600 sm:text-[80px] text-[45px]">
          <MdFastfood />
        </span>
        <h1 className="mb-2 font-bold sm:text-[40px] text-[30px] my-5 text-gray-700">
          Categories
        </h1>
      </motion.div>

      <div className="my-[50px]">
        <div className="flex lg:justify-start justify-center items-center gap-5 flex-wrap mt-[30px]">
          {categoriesData?.map((item, index) => (
            <Link to={"/shop"} key={index}>
              <CategoryItem item={item} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
