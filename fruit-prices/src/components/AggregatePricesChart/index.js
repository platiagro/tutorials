import React from "react";
import PropTypes from "prop-types";

import { Skeleton } from "antd";
import { Bar } from "react-chartjs-2";

// import data from "./chart_mock";
import fruits from "../../fruits_mock";

const fruitIndexList = fruits.map(fruit => {
  return fruits.indexOf(fruit);
});

const AggregatePricesChart = (props) => {
  const { data } = props;

  if (!data || data.length === 0) {
    return <Skeleton active />;
  }

  const aggregateData = { labels: [], datasets: [] };
  aggregateData.labels = fruits;
  aggregateData.datasets = aggregateData.datasets.concat([{
    label: "Venda acumulada",
    backgroundColor: "#975FE4",
    data: fruits.map((fruit, index) => {
      const fruitIndex = fruitIndexList[index];
      // Predicted_price * Producao_estimada
      return data[fruitIndex].slice(-15).reduce((sum, p, idx) => sum + p * data[fruitIndex][idx][4], 0) / 2.0;
    })
  }, {
    label: "Custo acumulado",
    backgroundColor: "#550055",
    data: fruits.map((fruit, index) => {
      const fruitIndex = fruitIndexList[index];
      // defensivos_unidade_hc * 5
      return data[fruitIndex].slice(-15).reduce((sum, p) => sum + p[12] * 10, 0);
    })
  }]);

  return (
    <>
      <Bar
        data={aggregateData}
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
