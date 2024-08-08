"use client";
import { SubPanel } from "./subPanel";
import reactBanner from "/public/react-banner.webp";
import Image from "next/image";

export default function VideoGrid() {
  const panels = Array.from({ length: 16 }, (_, i) => i + 1);
  const markedPanels = [4, 6, 15];

  function markPanel(panel: number): number {
    return markedPanels.includes(panel) ? 1 : 0;
  }

  return (
    <div className="rounded-sm grid max-w-2xl bg-slate-800 md:min-h-64 w-full mx-auto grid-cols-4 relative px-4">
      <Image
        className="absolute h-full bg-cover object-cover px-4"
        src={reactBanner}
        alt="React banner"
      />
      {panels.map((panel) => (
        <SubPanel key={panel} countInitial={markPanel(panel)} />
      ))}
    </div>
  );
}
