import { Link } from 'react-router-dom'
import styles from './SectionTile.module.css'

export default function SectionTile({ name, slug, description, status, heroImage }) {
  const isPlaceholder = status === 'placeholder'

  return (
    <Link
      to={slug}
      className={`${styles.tile} ${isPlaceholder ? styles.tilePlaceholder : ''}`}
      style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
    >
      {isPlaceholder && (
        <span className={styles.badge}>Coming Soon</span>
      )}
      <div className={styles.overlay}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  )
}
