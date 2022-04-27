import React from "react";
import ExpenseManager from "./ExpenseManager";
import SankeyDiagram from "./SankeyDiagram";

const chartWidth = "100%";
const chartHeight = "200px";
const Main = () => {
  return (
    <div className="mx-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="py-3 px-5 bg-gray-50">
        Cash Inflow-Outflow Sankey Diagram
      </div>
      <ExpenseManager />
      <SankeyDiagram chartWidth={chartWidth} chartHeight={chartHeight} />
    </div>
  );
};

export default Main;
