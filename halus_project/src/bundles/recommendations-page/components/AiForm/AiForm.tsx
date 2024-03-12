import React from 'react'
import styles from './AiForm.module.css'

 interface SubmitFunction {
  (event: React.FormEvent<HTMLFormElement>): void; // Define the function signature
}

export function AiForm({ onSubmit }: { onSubmit: SubmitFunction }) {
  return (
    <div>
      <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
        <input type="text" placeholder="Enter request" className={styles.input} />
        <button type="submit" className={styles.btn}>Get Started</button>
      </form>
    </div>
  );
}
