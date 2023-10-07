import { useState } from "react";
import styles from "../styles/login.module.css";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Login submitted:", { email, password, rememberMe });
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />{" "}
              Remember me
            </label>
          </div>
          <button className={styles.button} type="submit">
            <Link href="/dashboard">Login</Link>
          </button>
          <p>
            Don't have an account? Sign up{" "}
            <Link style={{ color: "blue" }} href="/signup">
              here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
