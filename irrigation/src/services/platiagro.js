import axios from "axios";

import data from "./data_mock";

// Sort items by date (in-place)
data.sort((a, b) => new Date(a.Data).getTime() - new Date(b.Data).getTime());

let intervalId = null;

const connect = async (
  url,
  dispatch,
  onSensorMessage,
  onModelMessage,
) => {

  let i = 0;
  let date = data[i]["Data"];

  // Every 2 seconds, sends messages to sensor
  intervalId = setInterval(() => {
    const currentData = data
      .filter((d) => d["Data"] === date);

    currentData.forEach(async (d) => {
      const sensorMessage = { attrs: d };
      const sensor = d.Fruta;

      console.log(`Message from ${sensor} (sensor)`);
      onSensorMessage(dispatch, sensorMessage);

      const predictions = await getPredictions(url, d);
      const fruitMessage = { attrs: predictions };
      const fruit = d.Fruta;

      console.log(`Message from ${fruit} (fruit)`);
      onModelMessage(dispatch, fruitMessage);
    });

    // Finds next date
    while (++i < data.length) {
      if (data[i]["Data"] !== date) {
        date = data[i]["Data"];
        break;
      }
    }
    // After all data has been sent,
    // resets counter and starts all over again
    if (i === data.length) {
      i = 0;
      date = data[i]["Data"];
    }
  }, 10000);
};

const getPredictions = async (url, data) => {
  const response = await axios.post(
    url,
    {
      "data": {
        "ndarray": [Object.values(data)],
        "names": Object.keys(data)
      }
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  const responseData = response.data.data;
  const obj = {};
  for (let i = 0; i < responseData.names.length; i++) {
    obj[responseData.names[i]] = responseData.ndarray[0][i];
  }
  return obj;
};

const disconnect = () => {
  if (intervalId != null) {
    clearInterval(intervalId);
  }
};


export default {
  connect,
  disconnect,
};
