import { useState, useRef } from 'react'
import { books } from '../../data/books'
import BookCard from '../BookCard/BookCard'
import BookModal from '../BookModal/BookModal'
import styles from './BookGrid.module.css'

const SORTS = [
  { value: '',                        label: 'Default' },
  { value: 'Beginner friendly',       label: 'Beginner Friendly' },
  { value: 'Conceptual depth',        label: 'Conceptual Depth' },
  { value: 'Practical applicability', label: 'Practical Applicability' },
]

const SHELVES = [
  { key: 'Tech',    label: 'Tech Books' },
  { key: 'NonTech', label: 'Non-Tech Books' },
]

const SCROLL_BY = 600

function sortBooks(list, sortKey) {
  if (!sortKey) return list
  return [...list].sort((a, b) => b.ratings[sortKey] - a.ratings[sortKey])
}

function Shelf({ label, books, onSelect }) {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * SCROLL_BY, behavior: 'smooth' })
  }

  return (
    <div className={styles.shelf}>
      <div className={styles.shelfHeader}>
        <h3 className={styles.shelfTitle}>{label}</h3>
        <span className={styles.shelfHint}>tap on any to see what I think</span>
      </div>

      <div className={styles.trackWrap}>
        {/* left fade + arrow */}
        <div className={`${styles.fade} ${styles.fadeLeft}`}>
          <button className={styles.arrow} onClick={() => scroll(-1)} aria-label="Scroll left">
            ‹
          </button>
        </div>

        <div className={styles.track} ref={trackRef}>
          {books.map((book) => (
            <div key={book.title} className={styles.cardWrap}>
              <BookCard {...book} onClick={() => onSelect(book)} />
            </div>
          ))}
        </div>

        {/* right fade + arrow */}
        <div className={`${styles.fade} ${styles.fadeRight}`}>
          <button className={styles.arrow} onClick={() => scroll(1)} aria-label="Scroll right">
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default function BookGrid() {
  const [sortKey, setSortKey] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <span className={styles.sortLabel}>Sort by</span>
        {SORTS.map((s) => (
          <button
            key={s.value}
            className={`${styles.sortBtn} ${sortKey === s.value ? styles.sortBtnActive : ''}`}
            onClick={() => setSortKey(s.value)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {SHELVES.map(({ key, label }) => {
        const shelfBooks = sortBooks(
          books.filter((b) => b.category === key),
          sortKey
        )
        return (
          <Shelf
            key={key}
            label={label}
            books={shelfBooks}
            onSelect={setSelectedBook}
          />
        )
      })}

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  )
}
