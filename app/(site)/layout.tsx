import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "@/providers/pageTransition";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      <main className="text-primary-black">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </PageTransition>
  );
}
