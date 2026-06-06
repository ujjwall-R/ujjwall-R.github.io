import { useMemo } from 'react'
import styles from './Workout.module.css'
import { activities, staticStats, punchConfig, collageImages } from '../../data/sweatData'

function useDaysPunched() {
  return useMemo(() => {
    const start = new Date(punchConfig.startDate)
    const now   = new Date()
    const weeks = (now - start) / (1000 * 60 * 60 * 24 * 7)
    return Math.floor(weeks * punchConfig.avgDaysPerWeek)
  }, [])
}

export default function Workout() {
  const daysPunched = useDaysPunched()

  return (
    <div className={styles.page}>

      {/* ── Hero with collage background ── */}
      <section className={styles.hero}>
        <div className={styles.collage} aria-hidden="true">
          {collageImages.map(img => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={styles.collageImg}
              style={img.cropFace ? { objectPosition: 'center 65%' } : undefined}
            />
          ))}
        </div>
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Active life</p>
          <h1 className={styles.heroTitle}>Sweat.</h1>
          <div className={styles.activities}>
            {activities.map(a => (
              <span key={a.name} className={styles.activityPill}>
                {a.icon} {a.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {/* Dynamic punched days */}
          <div className={styles.statCard}>
            <span className={styles.statValue}>{daysPunched}</span>
            <span className={styles.statLabel}>Days punched since Dec 2025</span>
          </div>

          {/* Static stats */}
          {staticStats.map(s => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
