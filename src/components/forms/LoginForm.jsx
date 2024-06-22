import Link from "next/link";
import Button from "./Button";
import Input from "./Input";
import styles from "./LoginForm.module.css";

function LoginForm({ Styles }) {
  return (
    <>
      <div className={styles.loginContainer1000px} style={Styles}>
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
        <div>
          <div className={styles.signupGate}>
            <p>ليس لديك حساب؟</p>
            <h5>
              <Link href="/signup">انشاء حساب</Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
