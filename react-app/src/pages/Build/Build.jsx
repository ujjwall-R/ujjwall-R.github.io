import { Link } from 'react-router-dom'
import styles from '../Placeholder.module.css'

export default function Build() {
  return (
    <div className={styles.page}>
      <span className={styles.label}>Coming Soon</span>
      <h1 className={styles.title}>Build</h1>
      <p className={styles.subtitle}>
        I am an engineer with experience working across the spectrum, from fast-paced
        startups to Fortune 100 Big Tech companies, building systems that handle
        millions of users, designing intelligent, data-driven solutions, and tackling
        challenges in security and distributed systems.
      </p>
      <p className={styles.subtitle}>
        Projects, experiments, and things I've built. This section is being crafted.
      </p>
      <Link to="/" className={styles.homeLink}>← Home</Link>
    </div>
  )
}
