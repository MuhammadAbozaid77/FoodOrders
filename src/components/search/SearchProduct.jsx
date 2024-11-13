// import ProductItem from "../product/ProductItem";
import SearchItem from "./SearchItem";

//
export default function SearchProduct({ data }) {
  // console.log(data);
  return (
    <>
      <div className="lg:w-[850px] w-[100%] mt-[50px] grid md:grid-cols-2  grid-cols-1 gap-2 ">
        {data?.map((item, index) => (
          <SearchItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
