import React from 'react'
import styles from './AiForm.module.css'

export function AiForm() {
  return (
    <div>
        <form className={styles.form}>
        <input type="text" placeholder='Enter request' className={styles.input} />
              <button type='submit' className={styles.btn} >Get Started</button>
        </form>
    </div>
  )
}
