"use client";
import ListInfo from "../components/ListInfo";
import Author from "../components/Author";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

interface Props {
  customStyle: string;
}

export default function Footer() {
  const { isEntry } = useIntersectionObserver("#footer", handleObserver);
  const socialMedia = [
    {
      name: "GitHub",
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    {
      name: "LinkedIn",
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    {
      name: "Gmail",
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
  ];
  const others = [
    {
      name: "Angular projects",
      link: "https://entry-page-angular.vercel.app/",
    },
    {
      name: "Ubuntu Desktop",
      link: "https://wanderlee-porfolio.vercel.app/home",
    },
    {
      name: "My porfolio",
      link: "https://wanderlee-porfolio-virid.vercel.app/",
    },
  ];

  function handleObserver(isIntersecting: boolean): void {
    const logoElement: HTMLElement | null = document.querySelector("#logo");
    const scrollMarker: HTMLElement | null =
      document.querySelector("#scroll-marker");
    const scrollTopButton: HTMLElement | null =
      document.querySelector("#scrollTop-button");
    const isOpacity = isIntersecting ? "0" : "1";

    if (!logoElement || !scrollMarker || !scrollTopButton) return;

    logoElement.style.setProperty("opacity", isOpacity, "important");
    scrollMarker.style.opacity = isOpacity;
    scrollMarker.style.pointerEvents = isIntersecting ? "none" : "auto";
    scrollTopButton.style.opacity = isIntersecting ? "1" : "0";
  }

  return (
    <footer
      id="footer"
      className="flex flex-col justify-end p-[2rem_0_6rem_0] bg-gradient-to-b from-[#011720] to-[#034668] xs:p-[2rem_1rem] gap-8 lg:gap-20 px-4"
    >
      <div className="flex justify-evenly gap-4 flex-col sm:flex-row">
        <ListInfo dataInfo={others} title="Other projects" />
        <ListInfo dataInfo={socialMedia} title="My Networks" />
        <ListInfo dataInfo={socialMedia} title="Contact me" />
      </div>
      <Author />
    </footer>
  );
}
