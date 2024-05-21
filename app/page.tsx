import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";


export default function page() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <main className="text-center">
        <h3>Since 1990</h3>
        <h1 className="tex">
          India's most reliable corrosion prevention service company
        </h1>
      </main>
    </>
  );
}
