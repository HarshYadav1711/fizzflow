import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fizzflow Hero",
  description: "Minimal scroll-driven hero with GSAP ScrollTrigger."
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
