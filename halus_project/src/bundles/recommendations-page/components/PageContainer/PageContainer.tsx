import styles from './PageContainer.module.css'
import { AiForm } from "../AiForm/AiForm"
import { Content } from '../Content/Content'

export function PageContainer() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AI Recommendations</h1>
      <AiForm />
      <Content/>
    </div>
  )
}
