"use client";
import styles from "./page.module.css";
import Header from "../components/header/Header";
import Post from "../components/post/Post";
import Account from "../components/account/Account";
import { useGlobalStates } from "../globalStates";

export default function Home() {
  const { openAccount } = useGlobalStates();
  return (
    <div className={styles.main}>
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
  );
}
