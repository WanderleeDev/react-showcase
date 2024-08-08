import { useState } from "react";
import myImage from "/public/static.webp";

export function SubPanel() {
  const [count, setCount] = useState(0);
  
  function handleSubPanelClick(): void {
    if (count === 1) return;

    setCount((prev) => prev + 1);
  }

  return (
    <div
      onClick={handleSubPanelClick}
      className={`bg-transparent grid place-content-center overflow-hidden relative select-none ${
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