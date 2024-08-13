import styles from './styles.module.css'

export default function ArrowDownAnimate() {
  return (
    <a className={styles.link} href="#project">
      <span className={styles['link-arrow']}>
        <span></span>
        <span></span>
      </span>
      <span className={styles['link-line']}></span>
      <span className={styles['link-text']}>Projects</span>
    </a>
  );
}
