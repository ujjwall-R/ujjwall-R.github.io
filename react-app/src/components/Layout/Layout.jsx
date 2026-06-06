import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          From the Library of Ujjwal Raj
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
        <p>© 2026 Ujjwal Raj</p>
      </footer>
    </div>
  )
}
