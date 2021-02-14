import { ChangeEvent, FC } from "react";

import styles from "./Input.module.css";

interface IProps {
  type?: string;
  placeholder?: string;
  value: string | number;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({
  type = "text",
  placeholder,
  value,
  name,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder ?? `Enter ${name}...`}
      value={value}
      name={name}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default Input;
