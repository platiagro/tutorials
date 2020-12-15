import React from "react";
import PropTypes from "prop-types";

import { Skeleton } from "antd";
import { Bubble } from "react-chartjs-2";

import machines from "../MachineContent/machines_mock";

// import data from './chart_mock';

const colors = [
  [
    "rgba(224, 162, 22, 0.1)",
    "rgba(224, 162, 22, 0.3)",
    "rgba(224, 162, 22, 0.5)",
    "rgba(224, 162, 22, 0.7)",
    "rgba(224, 162, 22, 1.0)",
  ],
  [
    "rgba(46, 184, 166, 0.1)",
    "rgba(46, 184, 166, 0.3)",
    "rgba(46, 184, 166, 0.5)",
    "rgba(46, 184, 166, 0.7)",
    "rgba(46, 184, 166, 1.0)",
  ],
  [
    "rgba(0, 148, 173, 0.1)",
    "rgba(0, 148, 173, 0.3)",
    "rgba(0, 148, 173, 0.5)",
    "rgba(0, 148, 173, 0.7)",
    "rgba(0, 148, 173, 1.0)",
  ],
  [
    "rgba(250, 126, 25, 0.1)",
    "rgba(250, 126, 25, 0.3)",
    "rgba(250, 126, 25, 0.5)",
    "rgba(250, 126, 25, 0.7)",
    "rgba(250, 126, 25, 1.0)",
  ],
];

const prepareData = (rawData) => {
  const preparedData = { datasets: [] };

  const machineIndex = 0;

  preparedData.datasets.push({
    label: machines[machineIndex],
    backgroundColor: colors[machineIndex % colors.length],
    borderColor: "rgba(0, 0, 0, 0.0)",
    data: rawData.slice(-5).map((prediction) => {
      const yKey = Object.keys(prediction).find(k => k.endsWith("Sim"));
      const y = prediction[yKey];
      const r = 155 * y ** 3 - 268 * y ** 2 + 150 * y + 12.5;
      return { x: machineIndex + 1, y: y, r: r };
    }),
  });

  return preparedData;
};

const FailureChart = (props) => {
  const { data } = props;
  if (!data || data.length === 0) {
    return <Skeleton active />;
  }
  const preparedData = prepareData(data);
  return (
    <Bubble
      data={preparedData}
      height={300}
      options={{
        animation: {
          duration: 0,
        },
        title: {
          display: true,
          text: " ",
          lineHeight: 2.5,
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              maxBarThickness: 42,
              gridLines: {
                display: false,
              },
              ticks: {
                min: 0,
                max: 9,
                fontColor: "#333",
                fontFamily: "Open Sans",
                fontSize: 14,
                callback: function (value, index, values) {
                  if (value === 0 || value > 8) {
                    return "";
                  }
                  return machines[index - 1];
                },
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: "#333",
                fontFamily: "Open Sans",
                fontSize: 14,
                beginAtZero: true,
                stepSize: 0.2,
                min: 0,
                max: 1.0,
              },
            },
          ],
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return (
                "Score: " + tooltipItem.yLabel.toFixed(2).replace(".", ",")
              );
            },
          },
        },
      }}
    />
  );
};

FailureChart.propTypes = {
  data: PropTypes.array,
};

export default FailureChart;
