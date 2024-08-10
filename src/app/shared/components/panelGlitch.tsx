/* eslint-disable @next/next/no-img-element */
import Glitch from "./glitch/glitch";
import staticImage from "/public/static.webp";

export default function PanelGlitch() {
  return (
    <div className="absolute z-10 inset-0 bg-black grid place-content-center animate-fade-in animate-duration-200 select-none pointer-events-none">
      <Glitch message="No signal" />
      <img
        className="absolute inset-0 h-full w-full opacity-20"
        src={staticImage.src}
        alt="Descripción de la imagen"
      />
    </div>
  );
}
