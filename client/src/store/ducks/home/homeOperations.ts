import { ThunkDispatch as Dispatch } from "redux-thunk";

import actions, { HomeActionTypes } from "./homeActions";
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../../utils/functions";
import { ClientLibrary } from "../../../lib";
import { USER_DETAILS_KEY } from "../../../utils/constants";

const db = new ClientLibrary();

const DEFAULT_ERR_MESSAGE = "Some Error Occurred";

const fetchName = (name: string) => async (
  dispatch: Dispatch<HomeActionTypes, {}, any>
) => {
  dispatch(actions.requestName());

  try {
    const {
      data: { data },
    } = await db.getName(name);

    dispatch(actions.receiveName(data.name, data.age));
  } catch (err) {
    const { error = DEFAULT_ERR_MESSAGE } = err;

    dispatch(actions.receiveNameError(error));
  }
};

const addName = (name: string, age: number) => async (
  dispatch: Dispatch<HomeActionTypes, {}, any>
) => {
  dispatch(actions.requestName());

  try {
    await db.createName(name, age);
    saveToLocalStorage(USER_DETAILS_KEY, { name, age });

    dispatch(actions.receiveName(name, age));
  } catch (err) {
    const { error = DEFAULT_ERR_MESSAGE } = err;

    dispatch(actions.receiveNameError(error));
  }
};

const deleteName = (name: string) => async (
  dispatch: Dispatch<HomeActionTypes, {}, any>
) => {
  dispatch(actions.requestName());
  try {
    await db.deleteName(name);
    deleteFromLocalStorage(USER_DETAILS_KEY);

    dispatch(actions.deletedName());
  } catch (err) {
    const { error = DEFAULT_ERR_MESSAGE } = err;

    dispatch(actions.receiveNameError(error));
  }
};

const checkDetails = () => async (
  dispatch: Dispatch<HomeActionTypes, {}, any>
) => {
  dispatch(actions.requestName());
  try {
    const userDetails = getFromLocalStorage(USER_DETAILS_KEY);
    dispatch(
      actions.receiveName(userDetails?.name || "", userDetails?.age || 0)
    );
  } catch (err) {
    const { error = DEFAULT_ERR_MESSAGE } = err;

    dispatch(actions.receiveNameError(error));
  }
};

const operations = {
  fetchName,
  addName,
  deleteName,
  checkDetails,
};

export default operations;
