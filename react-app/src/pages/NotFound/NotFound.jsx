import { Link } from 'react-router-dom'
import styles from '../Placeholder.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <span className={styles.errorCode}>404</span>
      <p className={styles.subtitle}>
        This page doesn't exist. Maybe it's coming soon, or maybe you took a wrong turn.
      </p>
      <Link to="/" className={styles.homeLink}>Go to Home</Link>
    </div>
  )
}
