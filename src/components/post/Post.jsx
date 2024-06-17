"use client";
import React, { useState } from "react";
import styles from "./Post.module.css";
import { LuHeartHandshake } from "react-icons/lu";
import { RiShareCircleFill } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import Container from "../container/Container";
import background from "@/public/background.jpg";
import Image from "next/image";
import defaultPublisher from "@/public/defaultPublisherImage.jpg";

function Post({ publisher, text, img }) {
  const defaultName = "علي إبن ابي طالب";
  const [publisherName, setPublisher] = useState(
    publisher ? publisher : defaultName
  );
  const [poem, setPoem] = useState(text);
  return (
    <div className={styles.postContainer}>
      <Container>
        <div className={styles.publisher}>
          <div>
            <Image src={img ? img : defaultPublisher} alt="publisher"  width={40} height={40}/>
          </div>
          <p>{publisherName}</p>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.background}>
            <Image src={background} alt="background" fill />
          </div>
          {poem ? (
            <div className={styles.content}>
              <div className={styles.text}>
                <p className={styles.first}>{poem[0]}</p>
                <p className={styles.second}>{poem[1]} </p>
              </div>
              <div className={styles.text}>
                <p className={styles.first}>{poem[2]} </p>
                <p className={styles.second}>{poem[3]} </p>
              </div>
            </div>
          ) : (
            <div className={styles.content}>
              <div className={styles.text}>
                <p className={styles.first}>
                  كُنْ وَاثِقًا ، كُنْ مُؤْمِنًا ، كُنْ آمِنًا
                </p>
                <p className={styles.second}>
                  كُنْ لَيِّنًا ، كُنْ دَائِمَ البَسَمَاتِ
                </p>
              </div>
              <div className={styles.text}>
                <p className={styles.first}>
                  كُنْ وَاثِقًا ، كُنْ مُؤْمِنًا ، كُنْ آمِنًا
                </p>
                <p className={styles.second}>
                  كُنْ لَيِّنًا ، كُنْ دَائِمَ البَسَمَاتِ
                </p>
              </div>
            </div>
          )}
        </div>
        <div className={styles.action}>
          <ul className={styles.subActionList}>
            <li>
              <LuHeartHandshake />
            </li>
            <li>
              <RiShareCircleFill />
            </li>
          </ul>
          <ul>
            <li>
              <FaRegBookmark />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Post;
