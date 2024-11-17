import { useContext, useEffect, useState } from "react";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import { AppContextSlice } from "../../context/AppContext";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import Container from "../../components/ui/Container";

export default function Shop() {
  const { handelSelectedCat, selectedCategory } = useContext(AppContextSlice);
  const [loading, setLoading] = useState(true); // Add a loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      handelSelectedCat(selectedCategory);
      setLoading(false); // Set loading to false after 3 seconds
    }, 500); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []);

  if (loading) return <SpinnerLoading />;
  return (
    <>
      <Container>
        <Category />
        <Product />
      </Container>
    </>
  );
}
