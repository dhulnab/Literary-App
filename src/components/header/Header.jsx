"use client";
import React from "react";
import Container from "../container/Container";
import styles from "./Header.module.css";
import { CiHome } from "react-icons/ci";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { useScrollDirection } from "../scrollDirection/ScrollDirection";

function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <div
        className={styles.topHeader}
        style={{
          transform:
            scrollDirection === "down" ? "translateY(-105%)" : "translateY(0)",
        }}
      >
        <Container>
          <div className={styles.topHeaderContent}>
            <p>‘‘ أَدْبْ ,,</p>
          </div>
        </Container>
      </div>
      <div className={styles.bottomHeader}>
        <Container>
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
        </Container>
      </div>
    </>
  );
}

export default Header;
