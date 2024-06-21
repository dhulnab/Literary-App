import Input from "@/src/components/form/Input";
import styles from "./page.module.css";
import Button from "@/src/components/form/Button";
import Image from "next/image";
import login from "@/public/login.jpeg";
import Link from "next/link";

export default function Auth() {
  return (
    <div className={styles.main}>
      <div className={styles.background}>
        <Image src={login} alt="none" fill />
      </div>
      <div className={styles.loginContainer}>
        <div>
          <h2>‘‘ أَدَبْ ,,</h2>
          <p>أكبر منصة تواصل إجتماعي للشعر العربي</p>
        </div>
        <div className={styles.login}>
          <h3>سجل دخولك</h3>
          <Input placeholder={"أسم المستخدم"} type={"text"} />
          <Input placeholder={"كلمة المرور"} type={"password"} />
          <Button
            text={"دخول"}
            Styles={{ backgroundColor: "#000", color: "#fff" }}
          />
        </div>
        <div className={styles.signupGate}>
          <p>ليس لديك حساب؟</p>
          <h5>
            <Link href="#">
              انشاء حساب
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
