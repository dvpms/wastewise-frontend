import Hero from "@/components/sections/Hero";
import Info from "@/components/sections/Info";
import Upload from "@/components/sections/Upload";
import Link from "next/link";
import React from "react";

// Komponen utama untuk Halaman Depan

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <Info />
      <Upload />
    </main>
  );
}
