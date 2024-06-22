import React from "react";
import styles from "./Input.module.css";
function Input({ placeholder, type }) {
  return (
    <>
      <input type={type} className={styles.input} placeholder={placeholder} />
    </>
  );
}

export default Input;
