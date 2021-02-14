import { FC, ReactNode } from "react";

import styles from "./Layout.module.css";

interface IProps {
  children?: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.mention}>
        <a
          href="https://www.linkedin.com/in/hardik-badola-738341197/"
          target="_blank"
          rel="noreferrer"
        >
          Contact Creator : Hardik Badola
        </a>
      </div>
      <div className={styles.layoutContainer}>{children}</div>
    </div>
  );
};

export default Layout;
