import { Saira_Stencil_One } from "next/font/google";
import BackgroundCity from "./shared/components/BackgroundCity";
import "./globals.css";
import { METADATA_PAGE } from "@/config/MetaConfig";

const saira = Saira_Stencil_One({ subsets: ["latin"], weight: "400" });

export const metadata = METADATA_PAGE;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.className} bg-[#05253E] min-h-dvh`}>
        <BackgroundCity />
        {children}
      </body>
    </html>
  );
}
