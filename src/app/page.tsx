"use client";
import VideoGrid from "./shared/ui/VideoGrid";
import Header from "./shared/ui/Header";
import Paragraph from "./shared/typography/Paragraph";
import TextAnimate from "./shared/components/TextAnimate/TextAnimate";

export default function Home() {
  const containerClass =
    "text-slate-100 grid grid-cols-1 gap-8 min-h-dvh max-w-7xl mx-auto border-x-4 border-dashed bg-[#011722] py-4 h-full";
  const presentation =
    "I encourage you to take a look at my journey with React and Next.js through these mini projects that I've developed. Each one shows my commitment and the skills I have developed.";

  return (
    <main className={containerClass}>
      <Header />
      <div className="px-4 flex flex-col text-center gap-4 max-w-4xl justify-self-center">
        <TextAnimate>
          <Paragraph type="banner" text={presentation} />
        </TextAnimate>
        <VideoGrid />
      </div>
    </main>
  );
}
