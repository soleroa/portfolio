import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { KeyboardFocus } from "@/components/KeyboardFocus";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Soledad Roa — Full-Stack Developer",
  description:
    "Portfolio of Soledad Roa — full-stack developer and Systems Engineering student building thoughtful, scalable web applications.",
  keywords: [
    "Soledad Roa",
    "full-stack developer",
    "front-end",
    "back-end",
    "JavaScript",
    "Angular",
    "React",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <KeyboardFocus />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
