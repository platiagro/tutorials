import React from "react";
import PropTypes from "prop-types";

import { Skeleton } from "antd";
import { Bar } from "react-chartjs-2";

import data from "./chart_mock";

const AggregatePricesChart = (props) => {
  // const { data } = props;
  if (!data || data.length === 0) {
    return <Skeleton active />;
  }
  return (
    <>
      <Bar
        data={data}
        options={{
          legend: {
            labels: {
              fontFamily: "Open Sans",
              fontSize: 14
            }
          },
          cornerRadius: 2,
          scales: {
            xAxes: [{
              maxBarThickness: 42,
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#333",
                fontFamily: "Open Sans",
                fontSize: 14
              }
            }],
            yAxes: [{
              gridLines: {
                display: false
              },
              min: 0,
              ticks: {
                fontColor: "#333",
                fontFamily: "Open Sans",
                fontSize: 14,
                beginAtZero: true,
              }
            }]
          }
        }}
      />
    </>
  );
};

AggregatePricesChart.propTypes = {
  data: PropTypes.array,
};

export default AggregatePricesChart;
