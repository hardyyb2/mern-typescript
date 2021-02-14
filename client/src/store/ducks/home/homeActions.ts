import constants from "./homeConstants";

interface REQUEST_NAME_PROPS {
  type: string;
  payload: null;
}

const requestName = (): REQUEST_NAME_PROPS => ({
  type: constants.REQUEST_NAME,
  payload: null,
});

interface RECEIVE_NAME_PROPS {
  type: string;
  payload: any;
}

const receiveName = (name: string, age: number): RECEIVE_NAME_PROPS => ({
  type: constants.RECEIVE_NAME,
  payload: { name, age },
});

interface RECEIVE_NAME_ERROR_PROPS {
  type: string;
  payload: any;
}

const receiveNameError = (error: string): RECEIVE_NAME_ERROR_PROPS => ({
  type: constants.RECEIVE_NAME_ERROR,
  payload: error,
});

interface DELETED_NAME_PROPS {
  type: string;
  payload: null;
}

const deletedName = () => ({
  type: constants.DELETED_NAME,
  payload: null,
});

export type HomeActionTypes =
  | REQUEST_NAME_PROPS
  | RECEIVE_NAME_PROPS
  | RECEIVE_NAME_PROPS
  | DELETED_NAME_PROPS;

const actions = {
  requestName,
  receiveName,
  receiveNameError,
  deletedName,
};

export default actions;
