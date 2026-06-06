import styles from './Build.module.css'
import { companies, projects, stats } from '../../data/buildData'

export default function Build() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Software Engineer</p>
          <h1 className={styles.heroTitle}>I build things<br />that scale.</h1>
          <p className={styles.heroSub}>
            Engineer with experience working across the spectrum, from fast-paced startups
            to Fortune 100 Big Tech companies, building systems that handle millions of users,
            designing intelligent, data-driven solutions, and tackling challenges in security
            and distributed systems.
          </p>
          <div className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.content}>

        {/* ── Where I've worked ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Where I've worked</h2>
          <div className={styles.logoStrip}>
            {companies.map(c => (
              <div key={c.name} className={styles.logoItem}>
                <img src={c.logo} alt={c.name} className={styles.companyLogo} />
                {c.current && <span className={styles.currentBadge}>Current</span>}
              </div>
            ))}
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Projects ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.projectGrid}>
            {projects.map(p => (
              <div key={p.name} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectName}>{p.name}</h3>
                  <span className={styles.projectPeriod}>{p.period}</span>
                </div>
                <p className={styles.projectDesc}>{p.description}</p>
                <div className={styles.projectFooter}>
                  <div className={styles.tags}>
                    {p.tags.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      {p.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>


      </div>
    </div>
  )
}
