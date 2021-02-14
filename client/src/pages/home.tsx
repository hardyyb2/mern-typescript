import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch as Dispatch } from "redux-thunk";

import { Input } from "../common";

import { IState } from "../store";
import { homeOperations, HomeActionTypes } from "../store/ducks";

import styles from "../styles/PageStyles/Home.module.css";

const HomeComponent: React.FC<{}> = () => {
  const { error, name, age } = useSelector((state: IState) => state.home);

  const dispatch: Dispatch<HomeActionTypes, {}, any> = useDispatch();

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    dispatch(homeOperations.checkDetails());
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newName) {
      return setErr("Please enter Name");
    } else if (!newAge) {
      return setErr("Please enter Age");
    }
    dispatch(homeOperations.addName(newName, parseInt(newAge)));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErr("");
    const elem = event.target.name;
    const val = event.target.value;
    if (elem === "name") {
      setNewName(val);
    } else if (elem === "age") {
      setNewAge(val);
    }
  };

  const handleDeleteName = () => {
    dispatch(homeOperations.deleteName(name));
    // .then(() => {
    //   setNewAge("");
    //   setNewName("");
    // });
  };

  return (
    <div className={styles.root}>
      {name ? (
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            Welcome, {name} ( {age} )
          </div>
          <button onClick={handleDeleteName} className={styles.button}>
            Delete
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input value={newName} name="name" onChange={handleChange} />
          <Input value={newAge} name="age" onChange={handleChange} />

          <button type="submit" className={styles.button}>
            Submit
          </button>
          <div className={styles.error}>
            {err} <br /> {error}
          </div>
        </form>
      )}
    </div>
  );
};

export default HomeComponent;
