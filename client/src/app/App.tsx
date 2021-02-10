import { Routes } from "../Routes";

import styles from "./App.module.css";

const App: React.FC<{}> = () => {
  return (
    <div className={styles.App}>
      <Routes />
    </div>
  );
};

export default App;
