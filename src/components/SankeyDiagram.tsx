import React, { useState } from "react";
import Chart from "react-google-charts";

import { useFetchSankeyDataQuery } from "../features/sankeySlice";

const sankeyData = [
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
interface SankeyProps {
  chartWidth: string;
  chartHeight: string;
}
interface Sankey {}

const SankeyDiagram: React.FC<SankeyProps> = ({ chartHeight, chartWidth }) => {
  const { isLoading, error, data } = useFetchSankeyDataQuery(undefined, {
    selectFromResult: ({ data, error, isLoading }) => ({
      data: data?.map((item: Sankey) => Object.values(item)),
      error,
      isLoading,
    }),
  });
  type data = [];
  const formattedData = [["From", "To", "Transaction Value"], ...(data ?? [])];
  console.log(formattedData);
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Chart
            chartType="Sankey"
            width={chartWidth}
            height={chartHeight}
            data={formattedData}
            options={options}
          />
        </>
      ) : null}
    </div>
  );
};

export default SankeyDiagram;
