import { Footer } from "../../footer/footer"
import { Header } from "../../header/header"
import styles from './styles.module.css';

export function SignInPage() {
  return (
      <div className={styles.sign_page__container}>
          <Header />
            <main className={styles.sign__container}>
              <h1>Sign In</h1>
              <input className={styles.sign__input} placeholder="Email"></input>
              <input className={styles.sign__input} placeholder="Password"></input>
              <button className={styles.sign__button}>Sign In</button>
            </main>
          <Footer/>
    </div>
  )
}
