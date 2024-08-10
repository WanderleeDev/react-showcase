"use client";
import { SubPanel } from "./subPanel";
import { usePanelManager } from "@/app/hooks/usePanelManager";
import Image from "next/image";
import reactBanner from "/public/react-banner.webp";
import PanelGlitch from "./panelGlitch";

export default function VideoGrid() {
  const MAX_PANELS = 16;
  const { markPanel, panels, brokenPanels } = usePanelManager(MAX_PANELS);

  return (
    <div className="rounded-sm grid max-w-2xl bg-slate-800 md:min-h-64 w-full mx-auto grid-cols-4 relative">
      {MAX_PANELS === brokenPanels && <PanelGlitch />}

      {MAX_PANELS > brokenPanels && (
        <Image
          className="absolute h-full object-cover"
          src={reactBanner}
          alt="React banner"
        />
      )}

      {MAX_PANELS > brokenPanels &&
        panels.map((panel) => (
          <SubPanel onBreakPanel={markPanel} key={panel.id} panel={panel} />
        ))}
    </div>
  );
}
