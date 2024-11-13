import { createContext, useEffect, useState } from "react";
import { productsJson } from "../assets/categoriesData";
import { toast } from "react-toastify";

export let AppContextSlice = createContext(0);

export default function AppContextProvider({ children }) {
  // --------------------------------User-------------------------------------------
  const [userData, setuserData] = useState("");
  // -------------------------------------------------------------------------------
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [showWishList, setShowWishList] = useState(false);
  const [showOpenCheckout, setShowOpenCheckout] = useState(false);
  const [showUserAuth, setShowUserAuth] = useState(false);
  // ---------------------------------- Data Structure -----------------------------------
  const [searchData, setSearchData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const [cartArray, setCartArray] = useState([]);
  const [wishListArray, setWishListArray] = useState(() => {
    const newData = localStorage.getItem("order-wishlist");
    return JSON.parse(newData);
  });
  const [total, setTotal] = useState(0);

  // ---------------------------------- Notifications  -----------------------------------
  const notifySuccess = () => toast.success("New Product Add In Your Order");
  const notifyaddWhishlist = () => toast.success("Product Add To Wishlist");
  const notifyRemoveWhishlist = () =>
    toast.error("Product Remove From Wishlist");
  const notifySuccessOrder = () => toast.success("You Order Is Drived");
  const notifyError = () => toast.error("product Removed from You Order");

  // -------------------------------------------------------------------------------
  const handelShowUserAuth = () => {
    setShowUserAuth((prev) => !prev);
  };
  // ---------------------------------- Selected Category and Products -------------------------------------------------------------
  const handelSelectedCat = (args) => {
    const categoryProducts = productsJson?.filter(
      (el) => el?.category === args
    );
    setProductsData(categoryProducts);
  };
  // ---------------------------------------------------------------------
  const handelSelectProduct = (args) => {
    // return true or false
    const findObject = cartArray?.find((index) => index.id === args.id);
    if (findObject) {
      setCartArray(
        cartArray?.map((obj) =>
          obj.id === args.id ? { ...obj, quantity: obj.quantity + 1 } : obj
        )
      );
    } else {
      setCartArray((prev) => [...prev, { ...args, quantity: 1 }]);
      notifySuccess();
    }
  };
  // ------------------------------------------------------------ Cart Logic -------------------------------------------------------

  const handelIncreaseProduct = (args) => {
    if (args.quantity >= 1) {
      setCartArray(
        cartArray?.map((targetIncease) =>
          targetIncease.id === args.id
            ? { ...targetIncease, quantity: targetIncease.quantity + 1 }
            : targetIncease
        )
      );
    }
  };
  const handelDescreaseProduct = (args) => {
    if (args.quantity === 1) {
      setCartArray(
        cartArray.filter((targetIncease) => targetIncease.id !== args.id)
      );
      notifyError();
    }
    if (args.quantity > 1) {
      setCartArray(
        cartArray.map((targetIncease) =>
          targetIncease.id === args.id
            ? { ...targetIncease, quantity: targetIncease.quantity - 1 }
            : targetIncease
        )
      );
    }
  };

  const handelRemoveProduct = (args) => {
    let cartAfterRemove = cartArray.filter((el) => {
      return el.id !== args.id;
    });
    setCartArray(cartAfterRemove);
    notifyError();
  };

  const handelTotal = () => {
    const totalPrice = cartArray.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      // Add the item total to the overall total
      return total + itemTotal;
    }, 0);
    setTotal(totalPrice);
  };

  const handelShowCheckoutModal = () => {
    setShowOpenCheckout((prev) => !prev);
  };

  // ---------------------------------- Order List -----------------------------------
  const handelSubmitOrder = (args) => {
    setOrderList((prev) => [...prev, args]);
    notifySuccessOrder();
    setShowOpenCheckout(false);
  };

  // ----------------------------------  WishList -----------------------------------

  const handelWishList = (args) => {
    const updatedWishListArray = wishListArray?.find(
      (index) => index.id === args.id
    );

    if (updatedWishListArray) {
      const newFiltered = wishListArray.filter((item) => item.id !== args.id);
      setWishListArray(newFiltered);
      notifyRemoveWhishlist();
    } else {
      setWishListArray((prev) => [...prev, args]);
      notifyaddWhishlist();
    }
  };

  // ------------------------------------------ All Effects --------------------------------------------

  // Select Category Products
  useEffect(() => {
    handelSelectedCat(selectedCategory);
  }, [selectedCategory]);
  // ------------------------------------------------------------------------
  // Select Order List
  useEffect(() => {
    const orderListData = localStorage.getItem("order-list");
    if (orderListData) {
      setOrderList(JSON.parse(orderListData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("order-list", JSON.stringify(orderList));
    setCartArray([]);
  }, [orderList]);
  // ------------------------------------------------------------------------
  // Update wishlist List In Local Storage
  useEffect(() => {
    localStorage.setItem("order-wishlist", JSON.stringify(wishListArray));
  }, [wishListArray]);
  // ------------------------------------------------------------------------
  // Merged Poducts and Wishlist
  useEffect(() => {
    const mergedData = productsData?.map((item) => {
      const wishlistItem = wishListArray?.find((w) => w.id === item.id);
      return wishlistItem
        ? { ...item, isWishListChecked: true }
        : { ...item, isWishListChecked: false };
    });
    setProductsData(mergedData);
  }, [wishListArray]);

  return (
    <>
      <AppContextSlice.Provider
        value={{
          selectedCategory,
          productsData,
          cartArray,
          total,
          setSelectedCategory,
          handelSelectedCat,
          handelSelectProduct,
          handelIncreaseProduct,
          handelDescreaseProduct,
          handelTotal,
          handelRemoveProduct,
          handelShowUserAuth,
          showUserAuth,
          handelShowCheckoutModal,
          showOpenCheckout,
          handelSubmitOrder,
          orderList,
          showSideBar,
          setShowSideBar,
          setShowSearchPage,
          showSearchPage,
          showWishList,
          setShowWishList,
          handelWishList,
          wishListArray,
          setSearchData,
          searchData,
          userData,
          setuserData,
        }}
      >
        {children}
      </AppContextSlice.Provider>
    </>
  );
}
