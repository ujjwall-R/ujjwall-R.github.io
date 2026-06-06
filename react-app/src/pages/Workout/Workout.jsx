import { useMemo } from 'react'
import styles from './Workout.module.css'
import { activities, staticStats, punchConfig, collageImages } from '../../data/sweatData'

function useGymStats() {
  return useMemo(() => {
    const start     = new Date(punchConfig.startDate)
    const now       = new Date()
    const totalDays = Math.floor((now - start) / (1000 * 60 * 60 * 24))
    const weeks     = totalDays / 7
    const punched   = Math.floor(weeks * punchConfig.avgDaysPerWeek)
    return { punched, totalDays }
  }, [])
}

export default function Workout() {
  const { punched, totalDays } = useGymStats()

  const allStats = [
    { value: `${punched}/${totalDays}`, label: 'Days in gym' },
    ...staticStats,
  ]

  return (
    <div className={styles.page}>

      {/* ── Hero with collage background ── */}
      <section className={styles.hero}>
        <div className={styles.collage} aria-hidden="true">
          {[...collageImages, ...collageImages].map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className={styles.collageImg}
              style={{ objectPosition: img.objectPosition }}
            />
          ))}
        </div>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroTop}>
            <p className={styles.eyebrow}>Active life</p>
            <h1 className={styles.heroTitle}>Sweat.</h1>
            <p className={styles.heroSub}>The work doesn't stop at the desk.</p>
            <div className={styles.activities}>
              {activities.map(a => (
                <span key={a.name} className={styles.activityPill}>
                  {a.icon} {a.name}
                </span>
              ))}
            </div>
          </div>

          {/* Stats bar inside hero */}
          <div className={styles.statsBar}>
            {allStats.map(s => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
