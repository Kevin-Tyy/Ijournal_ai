import type { Metadata } from "next";
import "./globals.css";
import Progressbar from "@/providers/progressbar";


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
      <body className="overflow-x-hidden">
        <Progressbar>{children}</Progressbar>
      </body>
    </html>
  );
}
