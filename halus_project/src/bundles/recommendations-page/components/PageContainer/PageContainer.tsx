import styles from './PageContainer.module.css'
import { AiForm } from "../AiForm/AiForm"
import { Content } from '../Content/Content'
import { useState } from 'react'

const recs = [
  'Experiment with brighter compositions to add vibrancy and allure to your images. Consider adjusting exposure settings or exploring different lighting conditions to capture the essence of your subjects in a more radiant and captivating manner.',
              'Enhance your audience engagement by establishing a consistent posting schedule. Aim to share your photography work on a daily basis to maintain a regular presence and keep your followers intrigued and connected to your evolving portfolio.',
             'Explore the potential of posting during the evening hours to leverage the enchanting ambiance of twilight and dusk. Experiment with capturing the interplay of natural and artificial light to create captivating and atmospheric photographs that resonate with your audience\'s emotions and experiences.'
]

export function PageContainer() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // make ai request 
    e.preventDefault();
    setRecommendations(recs);
    (e.target as HTMLFormElement).reset();
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AI Recommendations</h1>
      <AiForm onSubmit={ onSubmit} />
      <Content text={recommendations } />
    </div>
  )
}
