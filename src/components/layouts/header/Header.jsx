//

import HeaderBottom from "./HeaderBottom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="relative border-b  h-[180px]">
        <div className="flex justify-center items-center h-[80px] bg-red-500 lg:px-[100px] px-[20px]">
          <Navbar />
        </div>
        <div className="h-[100px] lg:px-[100px] px-[20px] hidden md:flex justify-between items-center ">
          <HeaderBottom />
        </div>
      </header>
    </>
  );
}
