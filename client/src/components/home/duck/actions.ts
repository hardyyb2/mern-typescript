import types from "./actionTypes";

interface REQUEST_NAME_PROPS {
  type: string;
  payload: null;
}

const requestName = (): REQUEST_NAME_PROPS => ({
  type: types.REQUEST_NAME,
  payload: null,
});

interface RECEIVE_NAME_PROPS {
  type: string;
  payload: any;
}

const receiveName = (name: string, age: number): RECEIVE_NAME_PROPS => ({
  type: types.RECEIVE_NAME,
  payload: { name, age },
});

interface RECEIVE_NAME_ERROR_PROPS {
  type: string;
  payload: any;
}

const receiveNameError = (error: string): RECEIVE_NAME_ERROR_PROPS => ({
  type: types.RECEIVE_NAME_ERROR,
  payload: error,
});

interface SAVED_NAME_PROPS {
  type: string;
  payload: null;
}

const savedName = (): SAVED_NAME_PROPS => ({
  type: types.SAVED_NAME,
  payload: null,
});

export type HomeActionTypes =
  | REQUEST_NAME_PROPS
  | RECEIVE_NAME_PROPS
  | RECEIVE_NAME_PROPS
  | SAVED_NAME_PROPS;

const actions = {
  requestName,
  receiveName,
  receiveNameError,
  savedName,
};

export default actions;
