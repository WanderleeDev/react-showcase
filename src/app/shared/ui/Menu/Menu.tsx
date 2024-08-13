/* eslint-disable @next/next/no-img-element */
import Home from "../../icons/Home";
import Project from "../../icons/Project";
import Contact from "../../icons/Contact";
import Presentation from "../../icons/Presentation";
import ScrollDownMarker from "../../components/ScrollDownMarker/ScrollDownMarker";
import styles from "./styles.module.css";

interface Props {
  customClass?: string;
}

export default function Menu({ customClass }: Props) {
  const navItems = [
    { name: "home", component: <Home /> },
    { name: "introduction", component: <Presentation /> },
    { name: "projects", component: <Project /> },
    { name: "contact", component: <Contact /> },
  ];

  return (
    <div className="fixed flex flex-col items-center justify-self-end -translate-x-4 gap-12">
      <nav
        className={`${styles["nav"]} ${styles["u-shadow-2"]} ${customClass}`}
      >
        <ul className={styles["nav-list"]} data-link="home">
          {navItems.map(({ component, name }) => (
            <li key={name} className={styles["nav-listItem"]} data-link={name}>
              <a
                className={styles["nav-listLink"]}
                href={`#${name}`}
                title={`go to ${name}`}
              >
                {component}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ScrollDownMarker />
    </div>
  );
}
