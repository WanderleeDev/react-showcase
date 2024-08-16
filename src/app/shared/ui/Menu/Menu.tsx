"use client";
/* eslint-disable @next/next/no-img-element */
import Home from "../../icons/Home";
import Project from "../../icons/Project";
import Presentation from "../../icons/Presentation";
import ScrollDownMarker from "../../components/ScrollDownMarker/ScrollDownMarker";
import ScrollTopButton from "../../components/ScrollTopButton";
import Angular from "../../icons/Angular";
import styles from "./styles.module.css";
import {
  CallbackParams,
  useIntersectionObserver,
} from "@/app/hooks/useIntersectionObserver";

interface Props {
  customClass?: string;
}

export default function Menu({ customClass }: Props) {
  const { isEntry } = useIntersectionObserver(
    "[data-section]",
    handleObserver,
    { threshold: 0.5 }
  );

  const navItems = [
    { name: "home", component: <Home /> },
    { name: "introduction", component: <Presentation /> },
    { name: "projects", component: <Project /> },
  ];

  function handleObserver({ isIntersecting, target }: CallbackParams) {
    if (!target || !isIntersecting || target.classList.contains("active-link"))
      return;

    const currentSection = target.getAttribute("data-section");
    const activeLink = document.querySelector(".menu-item.active-link");
    const newActiveLink = document.querySelector(
      `.menu-item[data-link="${currentSection}"]`
    );

    if (activeLink) activeLink.classList.remove("active-link");
    if (newActiveLink) newActiveLink.classList.add("active-link");
  }

  return (
    <div className={styles.menu}>
      <nav className={`${styles["nav"]} ${customClass || ""}`}>
        <ul className={styles["nav-list"]} data-link="home">
          {navItems.map(({ component, name }) => (
            <li
              key={name}
              className={`${styles["nav-listItem"]} menu-item`}
              data-link={name}
            >
              <a
                className={styles["nav-listLink"]}
                href={`#${name}`}
                title={`go to ${name}`}
              >
                {component}
              </a>
            </li>
          ))}
          <li className={styles["nav-listItem"]} data-link="angular projects">
            <a
              className={styles["nav-listLink"]}
              href="https://entry-page-angular.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="go to Angular projects"
            >
              <Angular />
            </a>
          </li>
        </ul>
      </nav>
      <ScrollDownMarker />
      <ScrollTopButton />
    </div>
  );
}
