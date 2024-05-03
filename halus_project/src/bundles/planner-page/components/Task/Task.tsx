import styles from './Task.module.css'
import { CgProfile } from "react-icons/cg";

type Properties = {
  taskName?: string,
  due: string
}

export function Task({taskName, due}: Properties) {
  return (
    <div className={styles.taskContainer}>
        <div className={styles.taskInfo}>
              <p className={styles.taskName}>{taskName}</p>
              <p className={styles.taskDeadline}>Due: {due}</p>

              <div className={styles.authorContainer}>
                  <CgProfile className={styles.emptyPicture} />
                  <p className={styles.assignedName}>Rebecca Moore</p>
              </div>
          </div>
          <div className={styles.taskStatusContainer}>
              <p className={styles.taskType}>Reminder</p>
              <p className={styles.taskStatus}>Ended</p>
          </div>
    </div>
  )
}
