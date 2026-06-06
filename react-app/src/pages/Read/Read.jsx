import BookGrid from '../../components/BookGrid/BookGrid'
import BlogRow from '../../components/BlogRow/BlogRow'
import UrlCycler from '../../components/UrlCycler/UrlCycler'
import JoinClub from '../../components/JoinClub/JoinClub'
import { blogs } from '../../data/blogs'
import styles from './Read.module.css'

export default function Read() {
  return (
    <div className={styles.page}>
      {/* Animated URL hero */}
      <UrlCycler />

      {/* Profile header */}
      <section className={styles.profile}>
        <div className={styles.profileInner}>
          <img
            src="/images/photo.webp"
            alt="Ujjwal Raj"
            className={styles.avatar}
          />
          <div>
            <h1 className={styles.name}>From the Library of Ujjwal Raj</h1>
            <p className={styles.bio}>
              Engineer. I have worked at startups and Big Tech, on systems, security, and AI.
            </p>
            <p className={styles.bio}>
              I enjoy reading and teaching, both software and physics, and love sharing what I learn.
              I read books, review them, and maintain this library as a living record of everything I have worked through.
            </p>
            <p className={styles.bio}>
              Welcome to my library. Feel free to reach out if you'd like to discuss ideas,
              learn together, or collaborate on something meaningful.
            </p>
            <div className={styles.profileContacts}>
              <a href="https://www.linkedin.com/in/ujjwal-raj-0442461bb/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/_ujjwal___raj" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="mailto:ujjwal.dev.to@gmail.com">Email</a>
              <a href="https://topmate.io/ujjwalraj5798" target="_blank" rel="noopener noreferrer">Topmate</a>
            </div>
          </div>
        </div>
      </section>

      {/* Reading club CTA */}
      <JoinClub />

      <div className={styles.content}>
        {/* Books section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Books</h2>
          <BookGrid />
        </section>

        <hr className={styles.divider} />

        {/* Blogs section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Blogs</h2>
          <div className={styles.blogList}>
            {blogs.map((b) => (
              <BlogRow key={b.link} {...b} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
