import { useContext, useState } from "react";
import { Footer } from "../../footer/footer"
import { Header } from "../../header/header"
import authApi from "../api/auth.api";
import styles from './styles.module.css';
import { userContext } from "../context/user-context";

export function SignUpPage() {
  const userContextValue = useContext(userContext);

  const [name, setName] = useState('');

  async function signUp() {
    await authApi.signUp(name);
    userContextValue?.updateUserFromLocalStorage();
  }

  return (
    <div className={styles.sign_page__container}>
    <Header />
      <main className={styles.sign__container}>
        <h1>Sign Up</h1>
        <input className={styles.sign__input} placeholder="Username" onChange={(event) => setName(event.target.value)}></input>
        <input className={styles.sign__input} placeholder="Email"></input>
        <input className={styles.sign__input} placeholder="Password"></input>
        <button className={styles.sign__button} onClick={signUp}>Sign Up</button>
      </main>
    <Footer/>
</div>
  )
}
