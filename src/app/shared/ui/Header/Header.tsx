import ReactLogo from "../../components/ReactLogo";
import Title from "../../typography/Title";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header id="home" className={styles.header} data-section="home">
      <div className={styles["animate-icon"]}>
        <div className={styles["animate-subContainer"]}>
          <ReactLogo />
        </div>
      </div>
      <Title
        customClass="animate-fade-in-up animate-delay-400"
        title="My React projects"
        level={1}
      />
    </header>
  );
}
