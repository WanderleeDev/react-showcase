"use client";
import ListInfo from "../components/ListInfo";
import Author from "../components/Author";
import { CallbackParams, useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { socialMedia } from "@/data/socialMedia";
import { otherProjects } from "@/data/otherProjects";

export default function Footer() {
  const { isEntry } = useIntersectionObserver("#footer", handleObserver);
  const social = socialMedia;
  const others = otherProjects;

  function toggleStyles(element: HTMLElement, isEntry: boolean): void {
    element.style.setProperty("opacity", `${isEntry ? "0" : "1"}`, "important");
    element.style.pointerEvents = isEntry ? "none" : "auto";
  }

  function handleObserver({ isIntersecting }: CallbackParams): void {
    const logoElement: HTMLElement | null = document.querySelector("#logo");
    const scrollMarker: HTMLElement | null =
      document.querySelector("#scroll-marker");
    const scrollTopButton: HTMLElement | null =
      document.querySelector("#scrollTop-button");

    if (!logoElement || !scrollMarker || !scrollTopButton) return;

    toggleStyles(scrollMarker, isIntersecting);
    toggleStyles(scrollTopButton, !isIntersecting);
    toggleStyles(logoElement, isIntersecting);
  }

  return (
    <footer
      id="footer"
      className="flex flex-col justify-end p-[2rem_0_6rem_0] bg-gradient-to-b from-[#011720] to-[#034668] xs:p-[2rem_1rem] gap-8 lg:gap-20 px-4"
    >
      <div className="flex justify-evenly gap-4 flex-col sm:flex-row">
        <ListInfo dataInfo={others} title="Other projects" />
        <ListInfo dataInfo={social} title="My Networks" />
        <ListInfo dataInfo={social} title="Contact me" />
      </div>
      <Author />
    </footer>
  );
}
