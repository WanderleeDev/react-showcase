import ReactLogo from "../../components/ReactLogo";
import Title from "../../typography/Title";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header} id="home">
      <div className={styles['animate-icon']}>
        <div className={styles['animate-subContainer']}>
        <ReactLogo />
        </div>
      </div>
      <div className="animate-fade-in-up animate-delay-400">
        <Title title="My React projects" level={1} />
      </div>
    </header>
  );
}
