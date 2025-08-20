"use client";
import Headers from "./components/headers";
import SalesOverviewLayout from "./components/salesOverviewComponent/SalesOverviewLayout";
import OtherOverviews from "./components/OtherOverviews";
import UrbanCarosel from "./components/UrbanCarosel";

export default function Home() {
  return (
    <div className="font-nunito-sans bg-[#F9FAFB] min-h-screen">
      <Headers />

      <main className="w-full px-4 sm:px-6 lg:w-[90%] lg:mx-auto mt-5">
        <h1 className="text-xl sm:text-2xl lg:text-[25px] font-semibold mb-4 sm:mb-5">Welcome, Ahmed</h1>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <SalesOverviewLayout />
          <OtherOverviews />
        </div>
        <UrbanCarosel/>
      </main>
    </div>
  );
}