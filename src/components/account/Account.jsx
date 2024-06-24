import React from "react";
import styles from "./Account.module.css";
import Container from "../container/Container";
import { FaRegBookmark } from "react-icons/fa";
import PostsIcon from "../postsIcon/PostsIcon";
import Post from "../post/Post";
import Image from "next/image";
import accountImg from "@/public/defaultPublisherImage.jpg";

function Account() {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.personalInfo}>
              <div className={styles.numbers}>
                <div>
                  <h4 className={styles.posts}>المنشورات</h4>
                  <h4 className={styles.followers}>المتابعين</h4>
                  <h4 className={styles.following}>يتابع</h4>
                </div>
                <div>
                  <p className={styles.postsNum}>155</p>
                  <p className={styles.followersNum}>12</p>
                  <p className={styles.followingNum}>33</p>
                </div>
              </div>
              <div>
                <h3 className={styles.name}>علي احمد</h3>
                <p className={styles.username}>@rr4_5</p>
              </div>
              <div className={styles.bio}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                qui repellat eligendi.
              </div>
            </div>
            <div className={styles.avatar}>
              <Image src={accountImg} alt="none" fill />
            </div>
          </div>
          <div className={styles.posts}>
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <PostsIcon />
                <FaRegBookmark />
              </div>
            </div>
            <div className={styles.postsContainer}>
              <Post
                text={[
                  `كُنْ وَاثِقًا ، كُنْ مُؤْمِنًا ، كُنْ آمِنًا
`,
                  `كُنْ لَيِّنًا ، كُنْ دَائِمَ البَسَمَاتِ
`,
                  `كُنْ كَالـ شَذَا العِطْرِ المُعَطِرِ غَيْرِهِ
`,
                  `كُنْ شُعْلَةَ الإِيمَانِ فِي الظُلُمَات.
`,
                ]}
              />
              <Post
                text={[
                  `تَفَاَئلْ فَالصُبْحُ يَأْتِي مُشْرِقًا
`,
                  `مِنْ بَعْدِ لَيْلٍ مُظْلِمِ القَسَمَاتِ
`,
                  `وَاللهُ يَرْزُقُكَ فَلا تَكُ يَائِسًا
`,
                  `لاتُذْهِبَنْ العُمْرَ فِي حَسَرَات
`,
                ]}
              />
              <Post
                text={[
                  `كُنْ وَاثِقًا ، كُنْ مُؤْمِنًا ، كُنْ آمِنًا
`,
                  `كُنْ لَيِّنًا ، كُنْ دَائِمَ البَسَمَاتِ
`,
                  `كُنْ كَالـ شَذَا العِطْرِ المُعَطِرِ غَيْرِهِ
`,
                  `كُنْ شُعْلَةَ الإِيمَانِ فِي الظُلُمَات.
`,
                ]}
              />
              <Post
                text={[
                  `تَفَاَئلْ فَالصُبْحُ يَأْتِي مُشْرِقًا
`,
                  `مِنْ بَعْدِ لَيْلٍ مُظْلِمِ القَسَمَاتِ
`,
                  `وَاللهُ يَرْزُقُكَ فَلا تَكُ يَائِسًا
`,
                  `لاتُذْهِبَنْ العُمْرَ فِي حَسَرَات
`,
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Account;
