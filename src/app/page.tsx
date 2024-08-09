'use client'
import Image from "next/image";
import reactIcon from "/public/react.svg";
import VideoGrid from "./shared/components/videoGrid";
import Title from "./shared/components/Typography/Title";

export default function Home() {
  return (
    <main className="min-h-dvh text-slate-100 grid grid-cols-1 max-w-7xl mx-auto border-x-4 border-dashed bg-[#05253E] py-4" style={{
      borderStyle: ''
    }}>
      <header className="mx-auto select-none">
        <Image className="size-28 md:size-36 xl:size-52 animate-rotate-360 animate-iteration-count-infinite animate-duration-[7s] justify-self-center content-center radial p-2 rounded-[50%] border-[#05253E] border-2 mx-auto" src={reactIcon} alt="react icon" />
        <Title title="Mis proyectos react"  />
      </header>
      <VideoGrid />
    </main>
  );
}
