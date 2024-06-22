import React from "react";
import styles from "./SignupForm.module.css";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";

function SignupForm({ Styles }) {
  return (
    <div className={styles.signupContainer1000px} style={Styles}>
      <div>
        <h2>‘‘ أَدَبْ ,,</h2>
        <p>أكبر منصة تواصل إجتماعي للشعر العربي</p>
      </div>
      <div className={styles.signup}>
        <h3>حساب جديد</h3>
        <Input placeholder={"أسم المستخدم"} type={"text"} />
        <Input placeholder={"اسمك الكامل"} type={"text"} />
        <Input placeholder={"البريد الالكتروني"} type={"email"} />
        <Input placeholder={"كلمة المرور"} type={"password"} />
        <Button
          text={"سجل"}
          Styles={{ backgroundColor: "#000", color: "#fff" }}
        />
      </div>
      <div>
        <div className={styles.loginGate}>
          <p>لديك حساب بالفعل؟</p>
          <h5>
            <Link href="/login">سجل دخولك</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
