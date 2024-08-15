'use client'
import VideoGrid from "./shared/ui/VideoGrid/VideoGrid";
import Header from "./shared/ui/Header/Header";
import TextAnimate from "./shared/components/TextAnimate/TextAnimate";
import Menu from "./shared/ui/Menu/Menu";
import Footer from "./shared/ui/Footer";

export default function Home() {
  const containerClass =
    "text-slate-100 grid grid-cols-1 gap-8 min-h-dvh max-w-7xl mx-auto border-x-4 border-dashed bg-[#011722] pt-4 h-full w-full";
  const presentation =
    "I encourage you to take a look at my journey with React and Next.js through these mini projects that I've developed. Each one shows my commitment and the skills I have developed.";

  return (
    <main className={containerClass}>
      <Menu />
      <Header />
      <TextAnimate
        customClass="text-transparent backdrop-blur-sm max-w-4xl justify-self-center"
        text={presentation}
        type="banner"
      />
      <div id="projects" className="min-h-dvh content-center" data-section="projects">
        <VideoGrid />
      </div>
      <Footer />
    </main>
  );
}
