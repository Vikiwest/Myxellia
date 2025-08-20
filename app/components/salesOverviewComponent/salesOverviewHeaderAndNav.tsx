import React from "react";

function salesOverviewHeaderAndNav() {
  return (
    <div className="border-t border-r border-l border-gray-200 rounded-tl-3xl rounded-tr-3xl px-4 sm:px-6 py-3 bg-white">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-lg sm:text-[20px] font-semibold">Sales Overview</h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <button className="border border-gray-200 rounded-3xl px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-[15px] font-medium hover:cursor-pointer hover:bg-gray-100 w-full sm:w-auto text-center">
          View Transaction
        </button>
      </div>
      <div className="flex justify-start sm:justify-end gap-2 sm:gap-4 mt-4">
        <button className="hover:bg-gray-100 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 hover:cursor-pointer text-xs sm:text-base">
          1 Week
        </button>
        <button className="hover:bg-gray-100 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 hover:cursor-pointer text-xs sm:text-base">
          1 Month
        </button>
        <button className="hover:bg-gray-100 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 hover:cursor-pointer text-xs sm:text-base">
          1 Year
        </button>
      </div>
    </div>
  );
}

export default salesOverviewHeaderAndNav;