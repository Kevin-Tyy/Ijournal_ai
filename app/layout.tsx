import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Progressbar from "@/providers/progressbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ijournal AI",
  description: "Ijournal AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Progressbar>{children}</Progressbar>
      </body>
    </html>
  );
}
