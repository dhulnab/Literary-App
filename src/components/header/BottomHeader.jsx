import React from "react";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiMessageSquareAdd } from "react-icons/bi";
import styles from "./BottomHeader.module.css";
import { useGlobalStates } from "@/src/globalStates";
import accountImg from "@/public/defaultPublisherImage.jpg";
import Image from "next/image";
import Link from "next/link";

function BottomHeader() {
  const { setPage } = useGlobalStates();
  return (
    <div className={styles.bottomHeader}>
      <div className={styles.bottomHeaderContent}>
        <ul>
          <li className={styles.home} onClick={() => setPage("Home")}>
            <Link href="/">
              <GoHomeFill />
            </Link>
          </li>
          <li className={styles.search}>
            <FiSearch />
          </li>
          <li className={styles.add}>
            <BiMessageSquareAdd />
          </li>
          <li>
            <div className={styles.account} onClick={() => setPage("Account")}>
              <Link href="/account">
                <Image src={accountImg} alt="none" fill />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomHeader;
