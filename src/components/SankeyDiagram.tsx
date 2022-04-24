import React from "react";
import Chart from "react-google-charts";

const data = [
  ["From", "To", "Transaction Value"],
  ["Salary", "Bills", 5000],
  ["Stocks", "Nothing", 1000],
  ["Bills", "Phone", 2000],
  ["Bills", "Electricity", 1000],
  ["Bills", "Groceries", 2000],
  ["Stocks", "Home Loan", 10000],
];
const colors = [
  "#a6cee3",
  "#b2df8a",
  "#fb9a99",
  "#fdbf6f",
  "#cab2d6",
  "#ffff99",
  "#1f78b4",
  "#33a02c",
];

const options = {
  height: 400,
  sankey: {
    node: {
      colors: colors,
    },
    link: {
      colorMode: "gradient",
      colors: colors,
    },
  },
};
const SankeyDiagram = () => {
  return (
    <div>
      <Chart
        chartType="Sankey"
        width="100%"
        height="200px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default SankeyDiagram;
