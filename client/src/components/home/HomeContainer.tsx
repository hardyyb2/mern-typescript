import { ThunkDispatch as Dispatch } from "redux-thunk";
import { connect } from "react-redux";

import HomeComponent from "./HomeComponent";
import { homeOperations } from "./duck";

import { IState } from "../../store";
import { HomeActionTypes } from "./duck/actions";

const mapStateToProps = (state: IState) => {
  const { name, age, error, loading } = state.home;
  return {
    name,
    age,
    error,
    loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<HomeActionTypes, {}, any>) => {
  const fetchNameConnect = (name: string) =>
    dispatch(homeOperations.fetchName(name));
  const addNameConnect = (name: string, age: number) =>
    dispatch(homeOperations.addName(name, age));

  return {
    fetchNameConnect,
    addNameConnect,
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
