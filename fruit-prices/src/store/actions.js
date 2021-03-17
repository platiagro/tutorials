import { message } from "antd";

import actionTypes from "./actionTypes";

import platiagro from "../services/platiagro";

import fruits from "../fruits_mock";

export const connect = () => {
  return {
    type: actionTypes.CONNECT,
  };
};

export const disconnect = () => {
  platiagro.disconnect();

  return {
    type: actionTypes.DISCONNECT,
  };
};

export const setConfig = (url) => (dispatch) => {
  platiagro.connect(url, dispatch, onSensorMessage, onModelMessage)
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

const onModelMessage = (dispatch, message) => {
  const Fruta = message.attrs.Fruta;
  const fruitIndex = fruits.findIndex(fruit => fruit === Fruta);

  if (fruitIndex > -1) {
    dispatch({
      type: actionTypes.ADD_PREDICTION,
      data: message.attrs,
      index: fruitIndex,
    });
  }
};

export const selectFruit = (fruits) => {
  return {
    type: actionTypes.SELECT_FRUIT,
    fruits: fruits,
  };
};
