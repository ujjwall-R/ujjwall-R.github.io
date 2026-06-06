import { useEffect } from 'react'
import styles from './BookModal.module.css'

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

export default function BookModal({ book, onClose }) {
  // close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* Hero image */}
        <div className={styles.hero}>
          <img src={book.image} alt={book.title} className={styles.heroImg} />
          <div className={styles.heroGradient} />
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            ✕
          </button>
          <div className={styles.heroMeta}>
            <h2 className={styles.title}>{book.title}</h2>
            <div className={styles.tags}>
              <span className={styles.tag}>{book.category === 'NonTech' ? 'Non-Tech' : 'Tech'}</span>
              {book.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className={styles.body}>
          <p className={styles.about}>{book.about}</p>

          <div className={styles.ratingsBlock}>
            {Object.entries(book.ratings).map(([label, val]) => (
              <div key={label} className={styles.ratingRow}>
                <span className={styles.ratingLabel}>{label}</span>
                <Stars value={val} />
                <span className={styles.ratingNum}>{val}/5</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
