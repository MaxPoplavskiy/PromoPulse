import { Footer } from "../footer/footer"
import { Header } from "../header/header"
import styles from './RecommendationsPage.module.css'

import { PageContainer } from "./components/PageContainer/PageContainer"
export function RecommendationsPage() {
  return (
    <div className={styles.container}>
      <Header />
      <PageContainer/>
      <Footer/>
    </div>
  )
}
