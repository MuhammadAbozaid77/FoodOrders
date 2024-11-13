//
import { useContext, useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { MdFastfood } from "react-icons/md";
import { productsJson } from "../../assets/categoriesData";
import SearchProduct from "./SearchProduct";
import { AppContextSlice } from "../../context/AppContext";

export default function Search() {
  const { searchData, setSearchData, setShowSearchPage } =
    useContext(AppContextSlice);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const searchedData = productsJson.filter((item) =>
      item?.category.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") {
      setSearchData([]);
    } else {
      setSearchData(searchedData);
    }
  }, [searchText]);

  return (
    <>
      <div className="p-[50px]">
        <div className="flex justify-end items-center">
          <span
            className="border p-2 flex justify-center items-center rounded-full bg-[#ffca3c] hover:bg-[#e6bd4e]  duration-150"
            onClick={() => setShowSearchPage(false)}
          >
            <TfiClose size={20} />
          </span>
        </div>

        <div className="flex items-center max-w-sm mx-auto">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <MdFastfood size={25} />
            </div>
            <input
              type="search"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search a Product"
              required
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="p-2 ms-2 text-sm font-medium text-black bg-[#ffca3c] rounded-lg border border-[#ffca3c] hover:bg-[#bd9937] duration-150"
          >
            Search
          </button>
        </div>

        <div className="flex justify-center items-center">
          <SearchProduct data={searchData} />
        </div>
      </div>
    </>
  );
}
