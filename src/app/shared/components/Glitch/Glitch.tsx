import styles from "./styles.module.css";

interface Props {
  message: string;
}

export default function Glitch({ message }: Props) {
  return <div className={styles.title}>{message}</div>;
}
