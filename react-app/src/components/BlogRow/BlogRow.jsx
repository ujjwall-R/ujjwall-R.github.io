import styles from './BlogRow.module.css'

export default function BlogRow({ title, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.row}
    >
      <img src={image} alt={title} className={styles.thumbnail} loading="lazy" />
      <span className={styles.title}>{title}</span>
    </a>
  )
}
