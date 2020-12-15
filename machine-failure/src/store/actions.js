import { message } from "antd";

import actionTypes from "./actionTypes";

import dojot from "../services/dojot";

export const connect = () => {
  return {
    type: actionTypes.CONNECT,
  };
};

export const disconnect = () => {
  dojot.disconnect();

  return {
    type: actionTypes.DISCONNECT,
  };
};

export const setConfig = (url) => (dispatch) => {
  dojot.connect(url, dispatch, onSensorMessage, onMachineMessage)
    .then(() => {
      console.log(`Conectado a: ${url}`);
      dispatch(connect());
    })
    .catch((e) => {
      console.log(e);
      message.error(`Não foi possível conectar-se a: ${url}`);
    });

  return {
    type: actionTypes.SET_CONFIG,
    url: url,
  };
};

const onSensorMessage = (dispatch, message) => {
  dispatch({
    type: actionTypes.SET_SENSOR_DATA,
    data: message.attrs,
  });
};

const onMachineMessage = (dispatch, message) => {
  const scoreKey = Object.keys(message.attrs).find(k => k.endsWith("Sim"));
  dispatch({
    type: actionTypes.SET_MACHINE_DATA,
    data: message.attrs,
    score: message.attrs[scoreKey].toFixed(2),
  });
};
