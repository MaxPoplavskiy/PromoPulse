import { useState } from "react";
import { Footer } from "../../footer/footer"
import { Header } from "../../header/header"
import authApi from "../api/auth.api";
import styles from './styles.module.css';

export function SignUpPage() {
  const [name, setName] = useState('');

  function signUp() {
    authApi.signUp(name);
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
