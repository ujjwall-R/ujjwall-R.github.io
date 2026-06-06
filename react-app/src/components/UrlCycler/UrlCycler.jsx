import { useState, useEffect } from 'react'
import styles from './UrlCycler.module.css'

const BASE    = 'ujjwalraj.com'
const SLUGS   = ['/read', '/build', '/sweat', '/click']
const TYPE_MS = 80   // ms per character typed
const DEL_MS  = 50   // ms per character deleted
const PAUSE   = 1600 // ms to hold before deleting

export default function UrlCycler() {
  const [slugIndex, setSlugIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing') // 'typing' | 'pause' | 'deleting'

  useEffect(() => {
    const target = SLUGS[slugIndex]

    if (phase === 'typing') {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          TYPE_MS
        )
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('pause'), PAUSE)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pause') {
      setPhase('deleting')
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          DEL_MS
        )
        return () => clearTimeout(t)
      } else {
        setSlugIndex((i) => (i + 1) % SLUGS.length)
        setPhase('typing')
      }
    }
  }, [displayed, phase, slugIndex])

  return (
    <div className={styles.wrap}>
      <p className={styles.url}>
        <span className={styles.base}>{BASE}</span>
        <span className={styles.slug}>{displayed}</span>
        <span className={styles.cursor}>|</span>
      </p>
    </div>
  )
}
