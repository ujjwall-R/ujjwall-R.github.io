import styles from './ToBeRead.module.css'

export default function ToBeRead() {
  return (
    <div className={styles.card}>
      <img
        src="/images/onemorepage-logo.svg"
        alt=""
        aria-hidden="true"
        className={styles.art}
      />
      <div className={styles.body}>
        <h3 className={styles.heading}>Curious what I&apos;m reading next?</h3>
        <p className={styles.text}>
          My entire to-be-read list lives at{' '}
          <span className={styles.url}>onemorepage.online</span> — a place to
          build and share your own reading shelf.
        </p>
      </div>
      <div className={styles.actions}>
        <a
          href="https://onemorepage.online/u/ujjwal"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryBtn}
        >
          See my shelf <span aria-hidden="true">›</span>
        </a>
        <a
          href="https://www.onemorepage.online"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryBtn}
        >
          Create your own
        </a>
      </div>
    </div>
  )
}
