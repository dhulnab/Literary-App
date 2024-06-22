import React from "react";
import styles from "./Button.module.css";
function Button({ text, Styles }) {
  return (
    <>
      <button className={styles.button} style={Styles}>
        {text}
      </button>
    </>
  );
}

export default Button;
