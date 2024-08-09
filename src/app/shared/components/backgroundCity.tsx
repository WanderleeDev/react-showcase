'use client'
import { Toaster } from "sonner";
import Image from "next/image";
import city from "/public/city.webp";


export default function BackgroundCity() {
  return (
    <>
      <Image className="fixed left-0 h-full -z-10" src={city} alt="city" />
      <Image className="fixed right-0 h-full -z-10" src={city} alt="city" />
      <Toaster richColors />
    </>
  );
}
