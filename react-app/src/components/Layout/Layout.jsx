import { Link, Outlet, useLocation } from 'react-router-dom'
import styles from './Layout.module.css'

const ROUTE_LABELS = {
  '/read':    'Read',
  '/build':   'Build',
  '/workout': 'Workout',
  '/click':   'Click',
}

export default function Layout() {
  const { pathname } = useLocation()
  const label = ROUTE_LABELS[pathname] ?? 'Ujjwal Raj'

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Link to="/read" className={styles.logo}>
          {label}
        </Link>
        <nav className={styles.nav}>
          <Link to="/read">Read</Link>
          <Link to="/build">Build</Link>
          <Link to="/workout">Workout</Link>
          <Link to="/click">Click</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="https://www.linkedin.com/in/ujjwal-raj-0442461bb/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/_ujjwal___raj" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:ujjwal.dev.to@gmail.com">Email</a>
          <a href="https://topmate.io/ujjwalraj5798" target="_blank" rel="noopener noreferrer">Topmate</a>
        </div>
        <p className={styles.footerCopy}>© 2026 Ujjwal Raj</p>
      </footer>
    </div>
  )
}
