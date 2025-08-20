import React from "react";
import Chart from "./Chart";
import Flow from "./Flow";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ChartAndFlow() {
  return (
    <div className="mx-auto flex flex-col lg:flex-row gap-4 lg:gap-6 py-3 px-4 sm:px-6 items-center border border-gray-200 rounded-br-3xl rounded-bl-3xl bg-white">
      {/* Chart with arrows */}
      <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[300px] flex items-center justify-center">
        {/* Left Arrow */}
        <button className="absolute left-0 z-10 bg-white shadow-md rounded-full p-1 sm:p-2 hover:bg-gray-100 hover:cursor-pointer">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>

        <Chart />

        {/* Right Arrow */}
        <button className="absolute right-0 z-10 bg-white shadow-md rounded-full p-1 sm:p-2 hover:bg-gray-100 hover:cursor-pointer">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>
      </div>

      {/* Flow takes the rest */}
      <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
        <Flow />
      </div>
    </div>
  );
}

export default ChartAndFlow;