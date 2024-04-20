import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="text-primary-black">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
