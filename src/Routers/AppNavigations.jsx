//
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../components/ui/PageNotFound";

//
import AppLayout from "./AppLayout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import ContactUs from "../pages/contact/ContactUs";
import Cart from "../pages/cart/Cart";
import Orders from "../pages/orders/Orders";
import Location from "../pages/location/Location";
import About from "../pages/about/About";
import OrderDetails from "../pages/order-details/OrderDetails";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import ProtectedRouting from "./ProtectedRouting";

//
export default function AppNavigations() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<ContactUs />} />
          <Route
            path="orders"
            element={
              <ProtectedRouting>
                <Orders />
              </ProtectedRouting>
            }
          />
          <Route
            path="orderdetails/:id"
            element={
              <ProtectedRouting>
                <OrderDetails />
              </ProtectedRouting>
            }
          />
          <Route
            path="cart"
            element={
              <ProtectedRouting>
                <Cart />
              </ProtectedRouting>
            }
          />
          <Route path="location" element={<Location />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
