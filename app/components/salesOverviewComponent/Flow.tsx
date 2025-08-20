import React from "react";
import { imageBank } from "../../utils/images";
import Image from "next/image";

function Flow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
    {/* Card 1 */}
<div className="border border-gray-200 rounded-2xl p-4 sm:p-5 text-left min-h-[120px] flex flex-col justify-between">
  <h2 className="text-[#4545FE] text-lg sm:text-xl md:text-2xl font-bold break-words leading-tight">
    ₦120,000,000.00
  </h2>
  <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 mt-3">
    <span className="font-medium text-sm text-gray-700 whitespace-nowrap flex-shrink-0">
      Total Inflow
    </span>
    <span className="flex items-center text-[#12B76A] gap-1 flex-shrink-0">
      <Image 
        src={imageBank.GreenArrowUp} 
        alt="Green Arrow Up" 
        width={16} 
        height={16}
        className="w-4 h-4 flex-shrink-0"
      />
      <span className="text-xs font-medium whitespace-nowrap">
        2.5%
      </span>
    </span>
  </div>
</div>

      {/* Card 2 */}
      <div className="border border-gray-200 rounded-2xl p-4 sm:p-5 text-left">
        <h2 className="text-[#12B76A] text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 break-words">
          ₦50,000,000.00
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="font-medium text-sm sm:text-base text-gray-700 whitespace-nowrap">
            MMR
          </span>
          <span className="flex items-center text-[#12B76A] gap-1">
            <Image 
              src={imageBank.GreenArrowUp} 
              alt="Green Arrow Up" 
              width={16} 
              height={16}
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
            />
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
              2.5%
            </span>
          </span>
        </div>
      </div>

   {/* Card 3 */}
<div className="border border-gray-200 rounded-2xl p-4 sm:p-5 text-left">
  <h2 className="text-[#14B8A6] text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 break-words">
    ₦200,000,000.00
  </h2>
  <div className="flex flex-col xs:flex-row xs:items-center gap-1 sm:gap-2">
    <span className="font-medium text-xs sm:text-sm text-gray-700 break-words max-w-[120px] sm:max-w-none">
      Commission Revenue
    </span>
    <span className="flex items-center text-[#14B8A6] gap-1 flex-shrink-0">
      <Image 
        src={imageBank.DeepGreenArrowDown} 
        alt="Green Arrow Down" 
        width={16} 
        height={16}
        className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
      />
      <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
        0.5%
      </span>
    </span>
  </div>
</div>

      {/* Card 4 */}
      <div className="border border-gray-200 rounded-2xl p-4 sm:p-5 text-left">
        <h2 className="text-[#F04438] text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 break-words">
          ₦100,000,000.00
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="font-medium text-sm sm:text-base text-gray-700 whitespace-nowrap">
            GMV
          </span>
          <span className="flex items-center text-[#F04438] gap-1">
            <Image 
              src={imageBank.RedArrowDown} 
              alt="Red Arrow Down" 
              width={16} 
              height={16}
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
            />
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
              0.5%
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Flow;