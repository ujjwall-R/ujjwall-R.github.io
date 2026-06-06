import { Link } from 'react-router-dom'
import styles from '../Placeholder.module.css'

export default function Build() {
  return (
    <div className={styles.page}>
      <span className={styles.label}>Coming Soon</span>
      <h1 className={styles.title}>Build</h1>
      <p className={styles.subtitle}>
        Projects, experiments, and things I've built. This section is being crafted.
      </p>
      <Link to="/" className={styles.homeLink}>← Home</Link>
    </div>
  )
}
