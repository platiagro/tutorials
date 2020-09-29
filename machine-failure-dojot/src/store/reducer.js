// ACTION TYPES
import actionTypes from './actionTypes';

// INITIAL STATE
const initialState = {
  isConnected: false,

  url: null,
  sensor: null,
  machine: null,

  sensorData: [],
  machineData: [],

  score: null,
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
        sensor: action.sensor,
        machine: action.machine,
      };

    case actionTypes.SET_SENSOR_DATA:
      return {
        ...state,
        sensorData: [
          ...state.sensorData,
          action.data,
        ],
      }

    case actionTypes.SET_MACHINE_DATA:
      return {
        ...state,
        machineData: [
          ...state.machineData,
          action.data,
        ],
        score: action.score,
      }

    // DEFAULT
    default:
      return state;
  }
};

// EXPORT
export default reducer;
