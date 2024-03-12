import { Footer } from "../footer/footer"
import { Header } from "../header/header"
import { Task } from './components/Task/Task'
import styles from './Planner.module.css'
import calendar from '../../assets/images/calendar.png'
import progressBar from '../../assets/images/progress-bar.png'

export function PlannerPage() {
  return (
    <div className={styles.page}>
      <Header/>
      <div className={styles.plannerContainer}>
        <div className={styles.progressBarContainer}>
          <img src={progressBar} alt="Progress Bar" className={styles.progressBarImg} />
        </div>
        <div className={styles.calendarContainer}>
          <img src={calendar} alt="Calendar" className={styles.calendar} />
        </div>
        <div className={styles.tasksContainer}>
          <Task />
          <Task />
          <Task />
          <button className={styles.showMore}>Show More</button>
        </div>
      
      </div>
      <Footer/>
    </div>
  )
}


