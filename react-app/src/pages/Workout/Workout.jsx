import { Link } from 'react-router-dom'
import styles from '../Placeholder.module.css'

export default function Workout() {
  return (
    <div className={styles.page}>
      <span className={styles.label}>Coming Soon</span>
      <h1 className={styles.title}>Sweat</h1>
      <p className={styles.subtitle}>
        Fitness routines, progress, and what I've learned along the way. More to come.
      </p>
      <Link to="/" className={styles.homeLink}>← Home</Link>
    </div>
  )
}
