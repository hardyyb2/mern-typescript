import types from "./actionTypes";
import { HomeActionTypes } from "./actions";
import { HomeState } from "./types";

const INITIAL_STATE: HomeState = {
  name: "",
  age: 0,
  loading: false,
  error: null,
};

const homeReducer = (
  state: HomeState = INITIAL_STATE,
  action: HomeActionTypes
) => {
  const { type, payload } = action;

  switch (type) {
    case types.REQUEST_NAME:
      return {
        ...state,
        loading: true,
      };

    case types.RECEIVE_NAME:
      const { name, age = 0 } = payload;
      return {
        ...state,
        name,
        age,
        loading: false,
      };

    case types.RECEIVE_NAME_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case types.SAVED_NAME:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default homeReducer;
