import styles from "./page.module.css";
import Image from "next/image";
import login from "@/public/login.jpeg";
import LoginForm from "@/src/components/forms/LoginForm";

export default function Auth() {
  return (
    <div className={styles.main}>
      <div className={styles.background}>
        <Image src={login} alt="none" fill />
      </div>
      <div className={styles.loginForm1000px}>
        <LoginForm />
      </div>
      <div className={styles.loginForm500px}>
        <div className={styles.blur}>
          <LoginForm
            Styles={{
              height: "60vh",
              backgroundColor: "transparent",
              width: "80%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
