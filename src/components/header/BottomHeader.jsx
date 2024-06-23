import React from "react";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiMessageSquareAdd } from "react-icons/bi";
import styles from "./BottomHeader.module.css";
import { useGlobalStates } from "@/src/globalStates";
import accountImg from "@/public/defaultPublisherImage.jpg";
import Image from "next/image";

function BottomHeader() {
  const { setOpenAccount } = useGlobalStates();
  return (
    <div className={styles.bottomHeader}>
      <div className={styles.bottomHeaderContent}>
        <ul>
          <li className={styles.home} onClick={() => setOpenAccount(false)}>
            <GoHomeFill />
          </li>
          <li className={styles.search}>
            <FiSearch />
          </li>
          <li className={styles.add}>
            <BiMessageSquareAdd />
          </li>
          <li>
            <div
              className={styles.account}
              onClick={() => setOpenAccount(true)}
            >
              {" "}
              <Image src={accountImg} alt="none" fill />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomHeader;
