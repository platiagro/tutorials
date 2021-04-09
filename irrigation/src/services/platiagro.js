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

  // Every 2 seconds, sends messages to sensor
  intervalId = setInterval(async () => {
    const d = data[i];
    const sensorMessage = { attrs: d };
    const sprinkler = i % 18;

    console.log(`Message from ${sprinkler} (sensor); ${i} of ${data.length}`);
    onSensorMessage(dispatch, sensorMessage, sprinkler);

    const predictions = await getPredictions(url, d);
    const sprinklerMessage = { attrs: predictions };

    console.log(`Message from ${sprinkler} (sprinkler); ${i} of ${data.length}`);
    onModelMessage(dispatch, sprinklerMessage, sprinkler);

    if (i < data.length) {
      i++;
    } else {
      i = 0;
    }
  }, 2000);
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
