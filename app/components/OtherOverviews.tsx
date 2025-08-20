import React from "react";
import { imageBank } from "../utils/images";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function OtherOverviews() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 w-full lg:w-[30%]">
      {/* Listings Overview Card */}
      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex justify-between items-center p-5 bg-[#F9FAFB] rounded-t-3xl">
          <div className="flex items-center gap-3">
            <Image
              src={imageBank.ListingsOverviewIcon}
              alt="Listings Overview"
              width={24}
              height={24}
              className="w-6 h-6 text-blue-500"
            />
            <h3 className="text-lg font-semibold text-gray-900">Listings Overview</h3>
          </div>
          <button className="text-[#4545FE] flex items-center gap-2  font-medium hover:cursor-pointer hover:underline transition-all duration-200 text-sm whitespace-nowrap">
            View all <ArrowRight size={14}/>
          </button>
        </div>
        
        <div className="border-t border-gray-100" />
        
        <div className="grid grid-cols-3 gap-4 p-6">
          <div className="text-center lg:text-left">
            <h4 className="text-gray-600 text-sm font-medium mb-2">Total</h4>
            <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold">1.8k</h2>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="text-gray-600 text-sm font-medium mb-2">Active</h4>
            <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold">80</h2>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="text-gray-600 text-sm font-medium mb-2">Archived</h4>
            <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold">1k</h2>
          </div>
        </div>
      </div>

      {/* Users Overview Card */}
      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex justify-between items-center p-5 bg-[#F9FAFB] rounded-t-3xl">
          <div className="flex items-center gap-3">
            <Image
              src={imageBank.UsersOverviewIcon}
              alt="Users Overview"
              width={24}
              height={24}
              className="w-6 h-6 text-blue-500"
            />
            <h3 className="text-lg font-semibold text-gray-900">Users Overview</h3>
          </div>
         <button className="text-[#4545FE] flex items-center gap-2  font-medium hover:cursor-pointer hover:underline transition-all duration-200 text-sm whitespace-nowrap">
            View all <ArrowRight size={14}/>
          </button>
        </div>
        
        <div className="border-t border-gray-100" />
        
        <div className="grid grid-cols-3 gap-4 p-6">
          <div className="text-center lg:text-left">
            <h4 className="text-gray-600 text-sm font-medium mb-2">Total</h4>
            <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold">1.8k</h2>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="text-gray-600 text-sm font-medium mb-2">Active</h4>
            <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold">80</h2>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="text-gray-600 text-sm font-medium mb-2">Archived</h4>
            <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold">1k</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherOverviews;