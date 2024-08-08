"use client";
import { SubPanel } from "./subPanel";

export default function VideoGrid() {
  const panels = Array.from({ length: 16 }, (_, i) => i + 1);
  return (
    <div className="border-2 border-slate-600 rounded-sm grid max-w-2xl bg-slate-800 gap-[1px] min-h-64 w-full mx-auto grid-cols-4">
      {panels.map((panel) => (
        <SubPanel key={panel} />
      ))}
    </div>
  );
}
