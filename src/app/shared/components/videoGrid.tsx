"use client";
import { SubPanel } from "./subPanel";
import { usePanelManager } from "@/app/hooks/usePanelManager";
import Image from "next/image";
import reactBanner from "/public/react-banner.webp";

export default function VideoGrid() {
  const MAX_PANELS = 16;
  const { markPanel, panels } = usePanelManager(MAX_PANELS);

  return (
    <>
      <div className="rounded-sm grid max-w-2xl bg-slate-800 md:min-h-64 w-full mx-auto grid-cols-4 relative px-4">
        <Image
          className="absolute h-full bg-cover object-cover px-4"
          src={reactBanner}
          alt="React banner"
        />
        {panels.map((panel) => (
          <SubPanel onBreakPanel={markPanel} key={panel.id} panel={panel} />
        ))}
      </div>
    </>
  );
}
