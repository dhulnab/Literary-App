import React from "react";
import Container from "../container/Container";
import styles from "./Header.module.css";
import { CiHome } from "react-icons/ci";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";



function Header() {
  return (
    <>
      <div className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <ul>
              <li className={styles.home}>
              <GoHomeFill />

              </li>
              <li className={styles.search}>
                <FiSearch/>
              </li>
              <li className={styles.add}>
                <BiMessageSquareAdd />
              </li>
              <li>
                <div className={styles.account}></div>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
