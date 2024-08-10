/* eslint-disable @next/next/no-img-element */
'use client'
import staticImage from "/public/static.webp";
import { Panel } from "../interfaces/Panel.interface";

interface Props {
  panel: Panel;
  onBreakPanel: (id: number) => void;
}

export function SubPanel({ panel, onBreakPanel }: Props) {
  const { isMark } = panel;

  function handleClick({ id, isMark }: Panel): void {
    if (isMark) return;

    onBreakPanel(id);
  }

  return (
    <div
      onClick={() => handleClick(panel)}
      className={`bg-transparent grid place-content-center overflow-hidden border-slate-400 border-[.1rem] relative select-none hover:opacity-50 transition-opacity ${
        isMark ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {isMark && (
        <img
          className="absolute inset-0 h-full w-full animate-fade-in animate-duration-200"
          src={staticImage.src}
          alt="Descripción de la imagen"
        />
      )}
    </div>
  );
}
