import { Link } from 'react-router-dom'
import styles from '../Placeholder.module.css'

export default function Click() {
  return (
    <div className={styles.page}>
      <span className={styles.label}>Coming Soon</span>
      <h1 className={styles.title}>Click</h1>
      <p className={styles.subtitle}>
        Photography, visual stories, and moments captured. This section is loading up.
      </p>
      <Link to="/" className={styles.homeLink}>← Home</Link>
    </div>
  )
}
