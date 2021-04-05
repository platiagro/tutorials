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
  const machineKey = Object.keys(message.attrs).find(k => k.endsWith("Maquina"));
  dispatch({
    type: actionTypes.SET_SENSOR_DATA,
    data: message.attrs,
    machine: message.attrs[machineKey],
  });
};

const onMachineMessage = (dispatch, message) => {
  const machineKey = Object.keys(message.attrs).find(k => k.endsWith("Maquina"));
  const scoreKey = Object.keys(message.attrs).find(k => k.endsWith("Sim"));
  dispatch({
    type: actionTypes.SET_MACHINE_DATA,
    data: message.attrs,
    machine: message.attrs[machineKey],
    score: message.attrs[scoreKey].toFixed(2),
  });
};

export const selectMachine = (machine) => {
  return {
    type: actionTypes.SELECT_MACHINE,
    machine: machine,
  }
};
