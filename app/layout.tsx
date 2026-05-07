import type { Metadata } from "next";
import "./globals.css";
import { Schibsted_Grotesk, Geist } from "next/font/google";
import { Martian_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The hub for every event you musn`t miss`",
};

const SchibstedGrotesk = Schibsted_Grotesk({
  weight: "400",
  subsets: ["latin"],
});
const MartianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martin-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`min-h-full  ${SchibstedGrotesk.className} ${MartianMono.variable} dark`}
      >
        <div className="absolute -z-40 inset-0 top-0 ">
          <LightRays></LightRays>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
