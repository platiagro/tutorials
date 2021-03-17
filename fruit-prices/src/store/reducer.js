// ACTION TYPES
import actionTypes from "./actionTypes";

import fruits from "../fruits_mock";

// INITIAL STATE
const initialState = {
  isConnected: false,

  url: null,

  sensorData: [],
  predictionList: new Array(fruits.length).fill(null).map(n => []),

  selectedFruits: [],
};

/**
 * reducer
 *
 * @param state
 * @param action
 */
const reducer = (state = initialState, action = undefined) => {
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
      return {
        ...state,
        sensorData: [
          ...state.sensorData,
          action.data,
        ],
      }

    case actionTypes.SELECT_FRUIT:
      return {
        ...state,
        selectedFruits: action.fruits,
      }

    case actionTypes.ADD_PREDICTION:
      return {
        ...state,
        predictionList: [
          ...state.predictionList.slice(0, action.index),
          [...state.predictionList[action.index], action.data],
          ...state.predictionList.slice(action.index)
        ],
      }

    // DEFAULT
    default:
      return state;
  }
};

// EXPORT
export default reducer;
