import { Footer } from "../footer/footer"
import { Header } from "../header/header"
import { Task } from './components/Task/Task'
import styles from './Planner.module.css'
import calendar from '../../assets/images/calendar.png'
import progressBar from '../../assets/images/progress-bar.png'
import mockData from './mock.data.json';
import { useEffect, useState } from "react"

type ContentPlan = {
  Monday: string,
  Tuesday: string,
  Wednesday: string,
  Thursday: string,
  Friday: string,
}

export function PlannerPage() {
  const [contentPlan, setContentPlan] = useState<ContentPlan>();

  useEffect(() => {
    setContentPlan(mockData[Math.round((mockData.length-1) * Math.random())].contentPlan)
  }, [])
  
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

          <Task taskName={contentPlan?.Monday} due="Monday"/>
          <Task taskName={contentPlan?.Tuesday} due="Tuesday" />
          <Task taskName={contentPlan?.Wednesday} due="Wednesday" />
          <Task taskName={contentPlan?.Thursday} due="Thursday" />
          <Task taskName={contentPlan?.Friday} due="Friday" />
          <button className={styles.showMore}>Show More</button>
        </div>
      
      </div>
      <Footer/>
    </div>
  )
}


