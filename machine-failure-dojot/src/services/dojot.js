import axios from "axios";
import io from "socket.io-client";

// import data from "./data_mock";

// Sort items by date
// data.sort((a, b) => new Date(a.Data).getTime() - new Date(b.Data).getTime());

let client = null;

const connect = async (
  url,
  sensor,
  machine,
  dispatch,
  onSensorMessage,
  onMachineMessage,
) => {
  const authURL = `${url}auth`;
  const authToken = await getAuthToken(authURL);

  const socketIOTokenURL = `${url}stream/socketio`;
  const socketIOToken = await getSocketIOToken(socketIOTokenURL, authToken.jwt);

  const urlObj = new URL(url);
  const socketIOURL = `${urlObj.protocol}//${urlObj.hostname}`;

  client = io(socketIOURL, {
    path: `${urlObj.pathname}socket.io`,
    query: {
      token: socketIOToken.token,
    },
  });

  client.on(sensor, (message) => {
    console.log(`Message from ${sensor} (sensor)`);
    console.log(message);
    onSensorMessage(dispatch, message);
  });

  client.on(machine, (message) => {
    console.log(`Message from ${machine} (machine)`);
    console.log(message);
    onMachineMessage(dispatch, message);
  });

  // let i = 0;
  // let date = data[i]["Data"];

  // // Every 2 seconds, sends messages to sensor
  // setInterval(() => {
  //   const currentData = data
  //     .filter((d) => d["Data"] === date)
  //     .map(Object.values);

  //   currentData.forEach((d) => {
  //     console.log(`Sent message to ${sensor}`);
  //     console.log(d);
  //     client.emit(sensor, JSON.stringify(d));
  //   });

  //   // Finds next date
  //   while (++i < data.length) {
  //     if (data[i]["Data"] !== date) {
  //       date = data[i]["Data"];
  //       break;
  //     }
  //   }
  //   // After all data has been sent,
  //   // resets counter and starts all over again
  //   if (i === data.length) {
  //     i = 0;
  //     date = data[i]["Data"];
  //   }
  // }, 2000);
};

const getAuthToken = async (url) => {
  const authResponse = await axios.post(
    url,
    { username: "admin", passwd: "admin" },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  const authJson = authResponse.data;
  return authJson;
};

const getSocketIOToken = async (url, jwtToken) => {
  const tokenResponse = await axios.get(url, {
    headers: { Authorization: `Bearer ${jwtToken}` },
    timeout: 5000,
  });
  const tokenJson = tokenResponse.data;
  return tokenJson;
};


const disconnect = () => {
  if (client != null) {
    client.close();
  }
};


export default {
  connect,
  disconnect,
};
