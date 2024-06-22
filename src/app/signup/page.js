import styles from "./page.module.css";
import Image from "next/image";
import signup from "@/public/login.jpeg";
import SignupForm from "@/src/components/forms/SignupForm";

export default function Auth() {
  return (
    <div className={styles.main}>
      <div className={styles.background}>
        <Image src={signup} alt="none" fill />
      </div>
      <div className={styles.signupForm1000px}>
        <SignupForm />
      </div>
      <div className={styles.signupForm500px}>
        <div className={styles.blur}>
          <SignupForm
            Styles={{
              height: "82vh",
              backgroundColor: "transparent",
              width: "80%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
