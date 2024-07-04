// "use client";
// import { useEffect } from "react";

import Hero from "@/components/Hero";
import Reliable from "@/components/Reliable";
import Esteemed from "@/components/Esteemed";
import OurServices from "@/components/OurServices";
import Statistics from "@/components/Statistics";
import ReliableCompany from "@/components/ReliableCompany";
import Form from "@/components/Form";
import Gallery from "@/components/Gallery";

export default function page() {

  // useEffect(() => {
  //   // @ts-ignore
  //   let scroll;
  //   // @ts-ignore
  //   import("locomotive-scroll").then((locomotiveModule) => {
  //     scroll = new locomotiveModule.default({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true,
  //       smoothMobile: false,
  //       resetNativeScroll: true
  //     });
  //   });

  //   // `useEffect`'s cleanup phase
  //   return () => {
  //     // @ts-ignore
  //     if (scroll) scroll.destroy();
  //   }
  // });

  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Reliable Section */}
      <Reliable />
      {/* Our Esteemed Clients */}
      <Esteemed />
      {/* Our Services */}
      <OurServices />
      {/* Gallery  */}
      <Gallery />
      {/* Statistics */}
      <Statistics />
      {/* Reliable Company */}
      <ReliableCompany />
      {/* Help you get started */}
      <Form />
    </>
  );

}
