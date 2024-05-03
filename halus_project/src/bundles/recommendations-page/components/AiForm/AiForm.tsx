import styles from './AiForm.module.css'

type Properties = {
  onClick: (value: string) => void; // Define the function signature
}

export function AiForm({ onClick }: Properties) {
  return (
    <div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <button onClick={() => onClick('monetization')} className={styles.btn}>Analyze monetization</button>
        <button onClick={() => onClick('audience')} className={styles.btn}>Analyze my audience</button>
      </form>
    </div>
  );
}
