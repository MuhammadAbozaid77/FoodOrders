// //
import WhatWeAre from "./components/WhatWeAre";
import HomePicSection from "./components/HomePicSection";
import DownloadApp from "./components/DownloadApp";
import EmailSubscribe from "./components/EmailSubscribe";
import FoodPics from "./components/FoodPics";
import CategoryHome from "./components/CategoryHome";

export default function Home() {
  return (
    <>
      <div className="mt-[50px]">
        <FoodPics />
        <CategoryHome />
        <HomePicSection />
        <DownloadApp />
        <WhatWeAre />
        <EmailSubscribe />
      </div>
    </>
  );
}
