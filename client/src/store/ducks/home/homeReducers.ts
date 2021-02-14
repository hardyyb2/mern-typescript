import constants from "./homeConstants";
import { HomeActionTypes } from "./homeActions";
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
    case constants.REQUEST_NAME:
      return {
        ...state,
        loading: true,
      };

    case constants.RECEIVE_NAME:
      const { name, age = 0 } = payload;
      return {
        ...state,
        name,
        age,
        loading: false,
      };

    case constants.RECEIVE_NAME_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case constants.DELETED_NAME:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default homeReducer;
