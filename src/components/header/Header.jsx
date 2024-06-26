"use client";
import React from "react";
import Container from "../container/Container";
import styles from "./Header.module.css";
import { useScrollDirection } from "../scrollDirection/ScrollDirection";
import BottomHeader from "./BottomHeader";
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useGlobalStates } from "@/src/globalStates";
import Image from "next/image";
import accountImg from "@/public/defaultPublisherImage.jpg";
import Link from "next/link";

function Header() {
  const { setPage } = useGlobalStates();
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
              <p>‘‘ أَدَبْ ,,</p>
            </div>
            <div className={styles.search}>
              <input type="text" placeholder="بحث" />
              <button>
                <FiSearch />
              </button>
            </div>
            <div className={styles.listIcons}>
              <ul>
                <li className={styles.home} onClick={() => setPage("Home")}>
                  <Link href="/">
                    <GoHomeFill />
                  </Link>
                </li>
                <li className={styles.add}>
                  <BiMessageSquareAdd />
                </li>
                <li>
                  <div
                    className={styles.account}
                    onClick={() => setPage("Account")}
                  >
                    <Link href="/account">
                      <Image src={accountImg} alt="none" fill />
                    </Link>
                  </div>
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
