import { useState } from 'react'
import styles from './JoinClub.module.css'

// ── Google Form config ────────────────────────────────────────
// Replace these two values with your own:
//   FORM_ID  → the long ID in your form URL:
//              https://docs.google.com/forms/d/e/<FORM_ID>/viewform
//   ENTRY_ID → the entry field ID from the form source, e.g. "entry.123456789"
const FORM_ID  = '1FAIpQLSdGZmDPR-zvlmn2kVpCH-kPBfb9s66BF9NCuuPZt72ltTiQvg'
const ENTRY_ID = 'entry.1770641203'
const ACTION   = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`
// ─────────────────────────────────────────────────────────────

const BACKGROUNDS = [
  '/images/ddia.png',
  '/images/systemDesign.png',
  '/images/carch.png',
  '/images/llm.png',
  '/images/0to1.png',
  '/images/artofstat.png',
  '/images/twa.png',
  '/images/bcsd.png',
]

export default function JoinClub() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'done' | 'error'
  const [touched, setTouched] = useState(false)

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  async function handleSubmit(e) {
    e.preventDefault()
    setTouched(true)
    if (!isValid) return

    setStatus('loading')
    const body = new FormData()
    body.append(ENTRY_ID, email)

    try {
      // no-cors: we can't read the response, but the data goes through
      await fetch(ACTION, { method: 'POST', mode: 'no-cors', body })
      setStatus('done')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.hero}>
      {/* Book cover strip */}
      <div className={styles.bookStrip} aria-hidden="true">
        {BACKGROUNDS.map((src) => (
          <img key={src} src={src} alt="" className={styles.stripImg} />
        ))}
      </div>

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>Just One More Page</h2>
        <p className={styles.sub}>
          A reading club for curious minds. New reads, shared notes, and the joy of one more chapter.
        </p>

        {status === 'done' ? (
          <p className={styles.success}>
            You're in! Welcome to the club.
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.inputWrap}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                className={`${styles.input} ${touched && !isValid && email ? styles.inputError : ''}`}
                disabled={status === 'loading'}
                aria-label="Email address"
              />
              <button
                type="submit"
                className={styles.btn}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Joining…' : 'Join the Club'}
                {status !== 'loading' && <span className={styles.arrow}>›</span>}
              </button>
            </div>
            {touched && !isValid && email && (
              <p className={styles.hint}>Please enter a valid email address.</p>
            )}
            {status === 'error' && (
              <p className={styles.hint}>Something went wrong. Try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
