import React from 'react'
import styles from './Content.module.css'

interface ContentProps {
  text: string[];
}

export function Content({ text }: ContentProps) {
  return (
    <div>
      <ol className={styles.recs}>
      {text.map((rec: string) => {
        return (
          <li className={styles.text }>{ rec }</li>
        )
      })}
        </ol>
          
    </div>
  )
}
