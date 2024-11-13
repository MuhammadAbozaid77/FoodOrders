//
import { useContext } from "react";
import { useState } from "react";
import { AppContextSlice } from "../../../context/AppContext";

export default function CheckForm() {
  const { handelSubmitOrder, cartArray, total } = useContext(AppContextSlice);
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (userName && userLocation) {
      handelSubmitOrder({
        userName,
        userLocation,
        cartArray,
        total,
        userId: id,
      });
    } else {
      return;
    }
  };
  return (
    <div className="w-[100%] px-[30px] py-5">
      <form onSubmit={handelSubmit} className="w-[100%]">
        <div className="mb-2">
          <label htmlFor="" className="font-semibold text-gray-600">
            UserName
          </label>
          <input
            type="text"
            className="border w-[100%] shadow p-3 text-gray-500 rounded-[10px] text-[16px]"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {!userName && (
            <span className="text-red-600 text-[14px] font-semibold">
              You Shoul fill This input
            </span>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="" className="font-semibold text-gray-600">
            Location
          </label>
          <input
            type="text"
            className="border w-[100%] shadow p-3 text-gray-500 rounded-[10px] text-[16px]"
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}
          />
          {!userLocation && (
            <span className="text-red-600 text-[14px] font-semibold">
              You Shoul fill This input
            </span>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="" className="font-semibold text-gray-600">
            Orders
          </label>
          <div className="border w-[100%] shadow p-2 rounded-[10px] min-h-[150px] max-h-[200px] overflow-y-auto flex flex-col">
            {cartArray?.map((item, index) => (
              <div key={index} className=" p-1 flex justify-start items-center">
                <span className="w-[30px] h-[30px] rounded-[10px] bg-green-700 text-white p-2 flex justify-center items-center font-semibold">
                  {item.quantity}
                </span>
                <span className="ms-2 p-2 w-[100%] h-[30px] flex justify-start items-center font-semibold ">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-[100%] mt-2 bg-transparent duration-150 hover:bg-green-600 text-green-700 shadow text-[20px] font-semibold hover:text-white py-3 px-4 border border-green-700 hover:border-transparent rounded-[10px]"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
