import React from 'react';

import { Bubble } from 'react-chartjs-2';

import machines from '../MachineContent/machines_mock';

// import chart_mock from './chart_mock';

const FailureChart = (props) => {
  const { data } = props;
  return (
    <>
      <Bubble
        data={data}
        height={300}
        options={{
          animation: {
            duration: 0
          },
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              maxBarThickness: 42,
              gridLines: {
                display: false
              },
              ticks: {
                min: 0,
                max: 9,
                fontColor: '#333',
                fontFamily: 'Open Sans',
                fontSize: 14,
                callback: function(value, index, values) {
                  if (value === 0 || value > 8) {
                    return '';
                  }
                  return machines[index - 1];
                }
              }
            }],
            yAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: '#333',
                fontFamily: 'Open Sans',
                fontSize: 14,
                beginAtZero: true,
                stepSize: 0.2,
                min: 0,
                max: 1.0,
              }
            }]
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                return 'Score: ' + tooltipItem.yLabel.toFixed(2).replace('.', ',');
              }
            }
          }
        }}
      />
    </>
  );
};

export default FailureChart;
