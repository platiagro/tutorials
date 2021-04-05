// ACTION TYPES
import actionTypes from './actionTypes';

import machines from "../machines_mock";

// INITIAL STATE
const initialState = {
  isConnected: false,

  url: null,

  selectedMachine: "Minerva",

  sensorData: Array.from(Array(machines.length), () => new Array(0)),
  machineData: Array.from(Array(machines.length), () => new Array(0)),

  score: null,
};

/**
 * reducer
 *
 * @param state
 * @param action
 */
const reducer = (state = initialState, action = undefined) => {
  const machineIndex = machines.indexOf(action.machine);
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
        (i === machineIndex) ? [...data, action.data] : data
      );
      return {
        ...state,
        sensorData: sensorData,
      };

    case actionTypes.SET_MACHINE_DATA:
      const machineData = state.machineData.map((data, i) =>
        (i === machineIndex) ? [...data, action.data] : data);
      const score = action.machine === state.selectedMachine ? action.score : state.score;
      return {
        ...state,
        machineData: machineData,
        score: score,
      };

    case actionTypes.SELECT_MACHINE:
      return {
        ...state,
        selectedMachine: action.machine,
      }

    // DEFAULT
    default:
      return state;
  }
};

// EXPORT
export default reducer;
