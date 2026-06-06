import { Link, Outlet, useLocation } from 'react-router-dom'
import styles from './Layout.module.css'

const ROUTE_LABELS = {
  '/':        'Home',
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
        <Link to="/" className={styles.logo}>
          {label}
        </Link>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
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
        <p>© 2026 Ujjwal Raj</p>
      </footer>
    </div>
  )
}
