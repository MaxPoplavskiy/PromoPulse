import styles from './Task.module.css'
import { CgProfile } from "react-icons/cg";


export function Task() {
  return (
    <div className={styles.taskContainer}>
        <div className={styles.taskInfo}>
              <p className={styles.taskName}>Review text for nex post by Sunday</p>
              <p className={styles.taskDeadline}>Due date: December 23, 2018</p>

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
