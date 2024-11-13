import AppContextProvider from "./../context/AppContext";
import { ToastContainer } from "react-toastify";
import ReactQueryProvider from "./ReactQueryProvider";
import RoutesProvider from "./RoutesProvider";
import AppNavigations from "./AppNavigations";

export default function AppProvider() {
  return (
    <ReactQueryProvider>
      <ToastContainer position="top-center" theme="colored" />
      <AppContextProvider>
        <RoutesProvider>
          <AppNavigations />
        </RoutesProvider>
      </AppContextProvider>
    </ReactQueryProvider>
  );
}
