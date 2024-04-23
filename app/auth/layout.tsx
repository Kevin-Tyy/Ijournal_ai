import PageTransition from "@/providers/pageTransition";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
