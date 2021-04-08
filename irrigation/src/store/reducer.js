// ACTION TYPES
import actionTypes from "./actionTypes";

import sprinklers from "../sprinklers_mock";

// INITIAL STATE
const initialState = {
  isConnected: false,

  url: null,

  sensorData: Array.from(Array(sprinklers.length), () => new Array(0)),
  predictionData: Array.from(Array(sprinklers.length), () => new Array(0)),

  precipitationData: [0.0, 0.0, 0.0, 0.0],

  irrigationMinimum: 5,

  precipitationProba: null,
};

const sprinklerToMicroclimateSensor = {
  0: 0,
  1: 0,
  2: 0,
  3: 1,
  4: 1,
  5: 1,
  6: 0,
  7: 0,
  8: 2,
  9: 3,
  10: 3,
  11: 1,
  12: 2,
  13: 2,
  14: 2,
  15: 3,
  16: 3,
  17: 3,
};

/**
 * reducer
 *
 * @param state
 * @param action
 */
const reducer = (state = initialState, action = undefined) => {
  const sprinkerIndex = sprinklers.indexOf(action.sprinkler);
  const microclimateSensorIndex = sprinklerToMicroclimateSensor[sprinkerIndex];
  switch (action.type) {
    case actionTypes.CONNECT:
      return {
        ...state,
        isConnected: true,
      }

    case actionTypes.DISCONNECT:
      return {
        ...state,
        isConnected: false,
      }

    case actionTypes.SET_CONFIG:
      return {
        ...state,
        url: action.url,
      };

    case actionTypes.SET_SENSOR_DATA:
      const sensorData = state.sensorData.map((data, i) =>
        (i === sprinkerIndex) ? [...data, action.data] : data
      );
      const precipitationData = state.precipitationData.map((data, i) =>
        (i === microclimateSensorIndex) ? action.data.Precipitacao : data
      );
      const precipitationProba = action.data.ProbabilidadePrecipitacao;
      return {
        ...state,
        sensorData: sensorData,
        precipitationData: precipitationData,
        precipitationProba: precipitationProba,
      };

    case actionTypes.SET_SPRINKLER_DATA:
      const predictionData = state.predictionData.map((data, i) =>
        (i === sprinkerIndex) ? [...data, action.data] : data);
      return {
        ...state,
        predictionData: predictionData,
      };

    case actionTypes.SET_IRRIGATION_MINIMUM:
      return {
        ...state,
        irrigationMinimum: action.minimum,
      };

    // DEFAULT
    default:
      return state;
  }
};

// EXPORT
export default reducer;
