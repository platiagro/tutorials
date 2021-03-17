// ACTION TYPES
import actionTypes from "./actionTypes";

// INITIAL STATE
const initialState = {
  isConnected: false,

  url: null,

  sensorData: [],
  predictionList: [],
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

    case actionTypes.ADD_PREDICTION:
      return {
        ...state,
        predictionList: [
          ...state.predictionList,
          action.data,
        ],
      }

    // DEFAULT
    default:
      return state;
  }
};

// EXPORT
export default reducer;
