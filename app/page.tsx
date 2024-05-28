import Carousel from "@/components/Carousel";
import ClientCard from "@/components/ClientCard";
import EmblaCarousel from "@/components/EmblaCarousel";
import MainCarousel from "@/components/MainCarousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdAlarm } from "react-icons/io";
import { IoDiamondOutline, IoHelpBuoyOutline } from "react-icons/io5";
import { MdArrowLeft, MdArrowRight, MdSafetyCheck } from "react-icons/md";
import { PiDropBold } from "react-icons/pi";
import project1 from "@/app/Imageproject1.png"
import Reliable from "@/components/Reliable";
import Esteemed from "@/components/Esteemed";
import OurServices from "@/components/ourServices";
import Statistics from "@/components/Statistics";
import ReliableCompany from "@/components/ReliableCompany";
import Form from "@/components/Form";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";


export default function page() {


  const images = [project1, project1, project1, project1];


  return (
    <>
      {/* <NavigationMenuDemo /> */}
      <div>
        <Navbar />
      </div>

      <main className="px-16 py-16 text-center">
        <h3 className="text-base">Since 1990</h3>
        <h1 className="text-2xl md:text-5xl md:px-72">
          India's most reliable corrosion prevention service company
        </h1>
      </main>

      <Carousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative max-h-full h-[40vw] w-full flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} fill className="object-fill" alt="alt" />
            </div>
          );
        })}
      </Carousel>

      {/* Reliable Section  */}
      <Reliable />

      {/* Our Esteemed Clients */}
      <Esteemed />

      {/* Our Services */}
      <OurServices />

      {/* Statistics  */}
      <Statistics />

      {/* Reliable Company  */}
      <ReliableCompany />

      {/* help you get started */}
      <Form />

    </>
  );
}
