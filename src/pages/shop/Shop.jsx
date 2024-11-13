import { useContext, useEffect, useState } from "react";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import { AppContextSlice } from "../../context/AppContext";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import Container from "../../components/ui/Container";

export default function Shop() {
  const { productsData, handelSelectedCat, selectedCategory } =
    useContext(AppContextSlice);
  const [loading, setLoading] = useState(true); // Add a loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      handelSelectedCat(selectedCategory);
      setLoading(false); // Set loading to false after 3 seconds
    }, 1000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []);

  return (
    <>
      <Container>
        {loading ? (
          <div className="mt-[50px] w-[100%] flex justify-center">
            <SpinnerLoading />
          </div>
        ) : (
          <div className="py-[50px]">
            <Category />
            <Product productsData={productsData} />
          </div>
        )}
      </Container>
    </>
  );
}
