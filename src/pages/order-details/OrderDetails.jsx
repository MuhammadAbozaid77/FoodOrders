import { useContext } from "react";
import { AppContextSlice } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import OrderDetailsLeft from "./components/OrderDetailsLeft";
import OrderDetailsRight from "./components/OrderDetailsRight";
//
export default function OrderDetails() {
  const { orderList } = useContext(AppContextSlice);
  const { id } = useParams();
  const data = orderList.filter((item) => {
    return item.userId === id;
  });
  return (
    <>
      <div className="w-[100%] lg:px-[100px] md:px-[50px] sm:px-[30px] px-[20px] mt-[50x] py-5">
        <div className="flex justify-between items-start lg:flex-row flex-col">
          <OrderDetailsLeft
            total={data[0]?.total}
            userId={data[0]?.userId}
            userLocation={data[0]?.userLocation}
            userName={data[0]?.userName}
          />
          <OrderDetailsRight data={data[0]?.cartArray} />
        </div>
      </div>
    </>
  );
}
