import React from "react";
import SalesOverviewHeaderAndNav from "./salesOverviewHeaderAndNav";
import ChartAndFlow from "./chartAndFLow";

function SalesOverviewLayout() {
  return (
    <div className="w-full lg:w-[70%]">
      <div>
        <SalesOverviewHeaderAndNav />
      </div>
      <div>
        <ChartAndFlow />
      </div>
    </div>
  );
}

export default SalesOverviewLayout;