/* eslint-disable @next/next/no-img-element */
import Glitch from "../components/Glitch/Glitch";
import staticImage from "/public/static.webp";

export default function PanelGlitch() {
  return (
    <div className="absolute z-10 inset-0 bg-black grid place-content-center animate-fade-in animate-duration-200 select-none pointer-events-none">
      <Glitch message="No signal" />
      <span className="absolute -z-10 bottom-1 right-2 font-light text-sm tracking-wider text-white/80">Self-healing system is faulty</span>
      <img
        className="absolute z-10 inset-0 h-full w-full opacity-30"
        src={staticImage.src}
        alt="Descripción de la imagen"
      />
    </div>
  );
}
