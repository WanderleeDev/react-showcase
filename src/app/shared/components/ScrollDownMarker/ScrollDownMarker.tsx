import styles from "./style.module.css";

export default function ScrollDownMarker() {
  const arrows = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <div className={styles.scrollMarker}>
      <span className={styles["scrollMarker-text"]}>scroll down</span>
      <div className={styles.arrowAnimate}>
        {arrows.map((arrow) => (
          <div
            key={arrow}
            className={`${styles.arrow} ${styles['arrowSliding']}`}
            style={{ "--delay": `${arrow}s` } as React.CSSProperties}
          >
            <div className="arrow"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
