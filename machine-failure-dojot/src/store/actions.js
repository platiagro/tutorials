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

export const setConfig = (url, sensor, machine) => (dispatch) => {
  dojot.connect(url, sensor, machine, dispatch, onSensorMessage, onMachineMessage)
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
    sensor: sensor,
    machine: machine,
  };
};

const onSensorMessage = (dispatch, message) => {
  dispatch({
    type: actionTypes.SET_SENSOR_DATA,
    data: message.attrs,
  });
};

const onMachineMessage = (dispatch, message) => {
  dispatch({
    type: actionTypes.SET_MACHINE_DATA,
    data: message.attrs,
    score: message.attrs["AutoMLCLassifier_predict_proba_Sim"].toFixed(2),
  });
};
