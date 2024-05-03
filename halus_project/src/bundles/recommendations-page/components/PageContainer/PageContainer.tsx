import styles from './PageContainer.module.css'
import { AiForm } from "../AiForm/AiForm"
import { Content } from '../Content/Content'
import { useState } from 'react'
import monetizationData from '../../monetization-mock.data.json';
import audienceData from '../../audience-mock.data.json';

type MonetizationRecord = {
  Instagram: string;
  Facebook: string;
  Twitter: string;
  LinkedIn: string;
}

type AudienceRecord = {
  "Age range": string;
  "Geographic location": string;
  "Interests": string;
  "Common characteristics": string;
}

export function PageContainer() {
  const [AIText, setAIText] = useState<string[]>([]);
  const onClick = (value: string) => {
    if(value === 'monetization') {
      const result: string[] = [];
      const monetizationRecord: MonetizationRecord = monetizationData[Math.round((monetizationData.length-1) * Math.random())].monetization
      
      for (const media in monetizationRecord) {
        result.push(`${media}: ${monetizationRecord[media as keyof MonetizationRecord]}`)
      }

      setAIText(result);
    }
    else if(value === 'audience') {
      const result: string[] = [];
      const audienceRecord: AudienceRecord = audienceData[Math.round((audienceData.length-1) * Math.random())].audienceAnalysis
      
      for (const media in audienceRecord) {
        result.push(`${media}: ${audienceRecord[media as keyof AudienceRecord]}`)
      }

      setAIText(result);
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PromoPulse AI</h1>
      <AiForm onClick={ onClick } />
      <Content text={ AIText } />
    </div>
  )
}
