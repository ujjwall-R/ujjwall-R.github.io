import styles from './BookCard.module.css'

function Stars({ value }) {
  return (
    <span className={styles.stars}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < value ? styles.starFilled : styles.starEmpty}>
          {i < value ? '★' : '☆'}
        </span>
      ))}
    </span>
  )
}

export default function BookCard({ title, about, ratings, tags, image, category, onClick }) {
  return (
    <div className={styles.card} onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={image} alt={title} className={styles.cover} loading="lazy" />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.ratings}>
          {Object.entries(ratings).map(([label, val]) => (
            <div key={label} className={styles.ratingRow}>
              <span className={styles.ratingLabel}>{label}:</span>
              <Stars value={val} />
            </div>
          ))}
        </div>
        <div className={styles.tags}>
          {tags.slice(0, 3).map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
