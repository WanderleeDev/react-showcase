import { useState } from "react";
import myImage from "/public/static.webp";

interface Props {
  countInitial: number;
}

export function SubPanel({ countInitial }: Partial<Props>) {
  const [count, setCount] = useState(countInitial || 0);

  function handleSubPanelClick(): void {
    if (count === 1) return;

    setCount((prev) => prev + 1);
  }

  return (
    <div
      onClick={handleSubPanelClick}
      className={`bg-transparent grid place-content-center overflow-hidden border-slate-400 border-[.1rem] relative select-none hover:opacity-50 transition-opacity ${
        count === 2 ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {count === 1 && (
        <img
          className="absolute inset-0 h-full w-full"
          src={myImage.src}
          alt="Descripción de la imagen"
        />
      )}
    </div>
  );
}
