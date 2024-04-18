import { useContext } from "react";
import { Footer } from "../../footer/footer"
import { Header } from "../../header/header"
import authApi from "../api/auth.api";
import styles from './styles.module.css';
import { userContext } from "../context/user-context";

export function SignInPage() {
  const userContextValue = useContext(userContext);

  async function signIn() {
    await authApi.signIn();
    userContextValue?.updateUserFromLocalStorage();
  }

  return (
      <div className={styles.sign_page__container}>
          <Header />
            <main className={styles.sign__container}>
              <h1>Sign In</h1>
              <input className={styles.sign__input} placeholder="Email"></input>
              <input className={styles.sign__input} placeholder="Password"></input>
              <button className={styles.sign__button} onClick={signIn}>Sign In</button>
            </main>
          <Footer/>
    </div>
  )
}
