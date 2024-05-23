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


export default function page() {


  const images = [project1, project1, project1, project1];


  return (
    <>
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
      <section className="flex flex-col gap-4 px-8 py-8 md:px-16 md:flex-row">

        <div className="md:w-2/5 md:flex md:justify-between md:flex-col md:pr-8">
          <h1 className="text-2xl md:text-4xl">
            What makes us reliable company ?
          </h1>
          <div className="items-center hidden text-red-800 md:flex md:gap-2">
            <h1>Schedule free consultation </h1>
            <FaArrowRightLong className="w-4 h-4" />
          </div>

        </div>

        <section className="grid items-center grid-cols-1 gap-8 align-middle md:w-3/5 md:grid-cols-2">
          <div className="">
            <IoHelpBuoyOutline className="w-8 h-8 text-[#8F2D26]" />
            <h4 className="font-bold text-[#8F2D26]">Safety</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div className="">
            <PiDropBold className="w-8 h-8 text-[#8F2D26]" />
            <h4 className="font-bold text-[#8F2D26]">Environment Safe</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <IoMdAlarm className="w-8 h-8 text-[#8F2D26]" />
            <h4 className="font-bold text-[#8F2D26]">On Schedule</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <IoDiamondOutline className="w-8 h-8 text-[#8F2D26]" />
            <h4 className="font-bold text-[#8F2D26]">Under Budget</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div className="flex items-center text-[#8F2D26] md:hidden">
            <h1>Schedule free consultation </h1>
            <MdArrowRight />
          </div>
        </section>

      </section>

      {/* Our Esteemed Clients */}
      <section className="px-8 py-8 md:px-16">
        <h1 className="text-2xl" >Our Esteem Clients</h1>

      </section>

      {/* Our Services */}
      <section className="px-8 py-8 md:px-16">
        <h1 className="text-2xl text-center md:text-4xl" >Our Services</h1>
        <section className="grid grid-cols-1 px-16 py-8 md:gap-x-4 md:grid-cols-3 md:gap-y-16 ">
          <div className="">
            <IoHelpBuoyOutline className="w-8 h-8 text-[#8F2D26]" />
            <h4 className="font-bold text-[#8F2D26]">Soil Resistively</h4>
            <p className="text-[#8F2D26]">We prioritise safety across all our services </p>
          </div>

          <div className="">
            <IoHelpBuoyOutline className="w-8 h-8" />
            <h4 className="font-bold text-red-800">Supply of Materials</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <IoHelpBuoyOutline className="w-8 h-8" />
            <h4 className="font-bold text-red-800">Pin brazing with complete accessoriest</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <IoHelpBuoyOutline className="w-8 h-8" />
            <h4 className="font-bold text-red-800">P.S.P Monitoring</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <IoHelpBuoyOutline className="w-8 h-8" />
            <h4 className="font-bold text-red-800">CIPL Survey Equipment</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <IoHelpBuoyOutline className="w-8 h-8" />
            <h4 className="font-bold text-red-800">Pipeline Defect Mapper (PDM)</h4>
            <p>We prioritise safety across all our services </p>
          </div>
        </section>
      </section>

      {/* Statistics  */}
      <section className="px-8 py-8 md:px-16">
        <h1 className="text-2xl">
          How we have done so far
        </h1>

        <section className="flex flex-col gap-4 md:flex-row">
          <div className="text-center">
            <div className="flex justify-center">
              <h1 className="text-5xl">232</h1>
              <h4>Clients</h4>
            </div>
            <div className="mt-2">
              <p>
                UNDTS has been in business from 1984 and so far we have build tremendous value for our clients
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <h1 className="text-5xl">15</h1>
              <h4>Years</h4>
            </div>
            <div className="mt-2">
              <p>
                UNDTS has been in business from 1984 and so far we have build tremendous value for our clients
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <h1 className="text-5xl">521</h1>
              <h4>Projects</h4>
            </div>
            <div className="mt-2">
              <p>
                UNDTS has been in business from 1984 and so far we have build tremendous value for our clients
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Reliable Company  */}
      <section className="flex flex-col items-center px-8 py-8 text-center md:px-16">
        <h1 className="text-2xl">
          What makes us a reliable company ?
        </h1>
        <p>We prioritise safety across all our services</p>


        <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />

      </section>

      {/* help you get started */}
      <section className="flex flex-col px-8 py-8 md:px-16">

        <h1 className="text-2xl">We are here to help you get started</h1>

        <form className="">
          <div className="flex flex-wrap mb-4">
            <input type="checkbox" className="mr-4" />
            <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
          </div>
          <div className="flex flex-wrap mb-4">
            <input type="checkbox" className="mr-4" />
            <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
          </div>
          <div className="flex flex-wrap mb-4">
            <input type="checkbox" className="mr-4" />
            <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
          </div>
          <div className="flex flex-wrap mb-4">
            <input type="checkbox" className="mr-4" />
            <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
          </div>
          <div className="flex flex-wrap mb-4">
            <input type="checkbox" className="mr-4" />
            <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
          </div>
          <div className="flex flex-wrap mb-4">
            <input type="checkbox" className="mr-4" />
            <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
          </div>
          <label htmlFor="fullName" className="label">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="eg: Nikhil"
            className="px-4 py-1 border border-gray-300 border-solid rounded-md"
          />
          <label htmlFor="emailId" className="label">Email Id</label>
          <input
            id="emailId"
            type="email"
            placeholder="eg: nikhil@gmail.com"
            className="px-4 py-1 border border-gray-300 border-solid rounded-md"
          />
          <label htmlFor="country" className="label">Country</label>
          <input
            id="country"
            type="text"
            placeholder="eg: nikhil@gmail.com"
            className="px-4 py-1 border border-gray-300 border-solid rounded-md"
          />
          <label htmlFor="phoneNumber" className="label">Phone Number</label>
          <input
            id="phoneNumber"
            type="number"
            placeholder="eg: nikhil@gmail.com"
            className="px-4 py-1 border border-gray-300 border-solid rounded-md"
          />
          <label htmlFor="requirement" className="label">Requirement</label>
          <textarea
            id="requirement"
            placeholder="Write your requirements"
            className="px-4 py-1 border border-gray-300 border-solid rounded-md"
          />
        </form>

      </section>

    </>
  );
}
