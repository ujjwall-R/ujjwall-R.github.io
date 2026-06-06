import SectionTile from '../../components/SectionTile/SectionTile'
import styles from './Home.module.css'

const sections = [
  {
    name: 'Read',
    slug: '/read',
    description: 'Books, blogs, and everything worth reading.',
    status: 'active',
    heroImage: null,
  },
  {
    name: 'Build',
    slug: '/build',
    description: 'Projects, experiments, and things I\'ve built.',
    status: 'placeholder',
    heroImage: null,
  },
  {
    name: 'Workout',
    slug: '/workout',
    description: 'Fitness routines, progress, and learnings.',
    status: 'placeholder',
    heroImage: null,
  },
  {
    name: 'Click',
    slug: '/click',
    description: 'Photography, visual stories, and moments.',
    status: 'placeholder',
    heroImage: null,
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.profileRow}>
            <img
              src="/images/photo.webp"
              alt="Ujjwal Raj"
              className={styles.avatar}
            />
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>From the Library of Ujjwal Raj</h1>
              <p className={styles.heroBio}>
                Engineer with experience across startups and Fortune 100 companies, building
                systems that handle millions of users. I enjoy reading, teaching, and sharing
                ideas across software, physics, and design. This is my corner of the internet.
              </p>
              <div className={styles.heroLinks}>
                <a href="https://www.linkedin.com/in/ujjwal-raj-0442461bb/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/_ujjwal___raj" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="mailto:ujjwal.dev.to@gmail.com">Email</a>
                <a href="https://topmate.io/ujjwalraj5798" target="_blank" rel="noopener noreferrer">Topmate</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Grid */}
      <section className={styles.sections}>
        <h2 className={styles.sectionsHeading}>Explore</h2>
        <div className={styles.grid}>
          {sections.map((s) => (
            <SectionTile key={s.slug} {...s} />
          ))}
        </div>
      </section>
    </div>
  )
}
