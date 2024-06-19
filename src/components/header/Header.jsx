"use client";
import React from "react";
import Container from "../container/Container";
import styles from "./Header.module.css";
import { useScrollDirection } from "../scrollDirection/ScrollDirection";
import BottomHeader from "./BottomHeader";
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { BiMessageSquareAdd } from "react-icons/bi";

function Header() {
  const scrollDirection = useScrollDirection();
  return (
    <>
      <div
        className={styles.header}
        style={{
          transform:
            scrollDirection === "down" ? "translateY(-105%)" : "translateY(0)",
        }}
      >
        <Container>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <p>‘‘ أَدْبْ ,,</p>
            </div>
            <div className={styles.search}>
              <input type="text" placeholder="بحث" />
              <button>
                <FiSearch />
              </button>
            </div>
            <div className={styles.listIcons}>
              <ul>
                <li className={styles.home}>
                  <GoHomeFill />
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
        </Container>
      </div>
      <div>
        <BottomHeader />
      </div>
    </>
  );
}

export default Header;
