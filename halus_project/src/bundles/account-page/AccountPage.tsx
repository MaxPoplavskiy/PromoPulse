import { useContext } from "react";
import authApi from "../auth/api/auth.api";
import { Footer } from "../footer/footer"
import { Header } from "../header/header"
import styles from './styles.module.css';
import { userContext } from "../auth/context/user-context";

export function AccountPage() {
  const userContextValue = useContext(userContext);

  function logOut() {
    authApi.logOut();
    userContextValue?.updateUserFromLocalStorage();
  }

  return (
    <div className={styles.account__container}>
    <Header />
      <main className={styles.account_content__container}>
        <h1>Account</h1>
        <button className={styles.account__button} onClick={logOut}>Log out</button>
      </main>
    <Footer/>
</div>
  )
}
