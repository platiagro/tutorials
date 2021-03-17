import React from "react";
import PropTypes from "prop-types";

import { Skeleton } from "antd";
import { Line } from "react-chartjs-2";

import data from "./chart_mock";

const LatestPricesChart = (props) => {
  // const { data } = props;
  if (!data || data.length === 0) {
    return <Skeleton active />;
  }
  return (
    <>
      <Line
        data={data}
        height={50}
        options={{
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
            }
          },
          elements: {
            point: { radius: 5 }
          },
          showLine: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              gridLines: {
                display: false,
                drawBorder: false
              },
              type: "time",
              time: {
                parser: "YYYY-MM-DD",
                unit: "day",
                unitStepSize: 1,
                displayFormats: {
                  "day": "DD/MM/YYYY"
                }
              }
            }],
            yAxes: [{
              ticks: {
              },
              display: false,
              gridLines: {
                display: false,
                drawBorder: false
              }
            }]
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.yLabel;
              }
            }
          }
        }}
      />
    </>
  );
};

LatestPricesChart.propTypes = {
  data: PropTypes.array,
};

export default LatestPricesChart;
