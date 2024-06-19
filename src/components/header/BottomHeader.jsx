import React from "react";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiMessageSquareAdd } from "react-icons/bi";
import styles from "./BottomHeader.module.css";

function BottomHeader() {
  return (
    <div className={styles.bottomHeader}>
      <div className={styles.bottomHeaderContent}>
        <ul>
          <li className={styles.home}>
            <GoHomeFill />
          </li>
          <li className={styles.search}>
            <FiSearch />
          </li>
          <li className={styles.add}>
            <BiMessageSquareAdd />
          </li>
          <li>
            <div className={styles.account}></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomHeader;
