import { Footer } from "../../footer/footer"
import { Header } from "../../header/header"
import styles from './styles.module.css';

export function SignUpPage() {
  return (
    <div className={styles.sign_page__container}>
    <Header />
      <main className={styles.sign__container}>
        <h1>Sign Up</h1>
        <input className={styles.sign__input} placeholder="Username"></input>
        <input className={styles.sign__input} placeholder="Email"></input>
        <input className={styles.sign__input} placeholder="Password"></input>
        <button className={styles.sign__button}>Sign Up</button>
      </main>
    <Footer/>
</div>
  )
}
