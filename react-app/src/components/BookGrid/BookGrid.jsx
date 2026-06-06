import { useState } from 'react'
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

function sortBooks(list, sortKey) {
  if (!sortKey) return list
  return [...list].sort((a, b) => b.ratings[sortKey] - a.ratings[sortKey])
}

function Shelf({ label, books, onSelect }) {
  return (
    <div className={styles.shelf}>
      <h3 className={styles.shelfTitle}>{label}</h3>
      <div className={styles.track}>
        {books.map((book) => (
          <div key={book.title} className={styles.cardWrap}>
            <BookCard {...book} onClick={() => onSelect(book)} />
          </div>
        ))}
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
