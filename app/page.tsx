import ClientCard from "@/components/ClientCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { MdArrowLeft, MdArrowRight, MdSafetyCheck } from "react-icons/md";


export default function page() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <main className="text-center px-8">
        <h3 className="text-base">Since 1990</h3>
        <h1 className="text-2xl">
          India's most reliable corrosion prevention service company
        </h1>
      </main>

      {/* Reliable Section  */}
      <section className="px-8">
        <h1 className="text-2xl">
          What makes us reliable company ?
        </h1>

        <section className="flex flex-wrap gap-4">
          <div className="flex-[1/2]">
            <MdSafetyCheck />
            <h4 className="text-red-800 font-bold">Safety</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div className="flex-[1/2]">
            <MdSafetyCheck />
            <h4 className="text-red-800 font-bold">Environment Safe</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <MdSafetyCheck />
            <h4 className="text-red-800 font-bold">On Schedule</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <MdSafetyCheck />
            <h4 className="text-red-800 font-bold">Under Budget</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div className="flex items-center text-red-800">
            <h1>Schedule free consultation </h1>
            <MdArrowRight />
          </div>
        </section>

      </section>

      {/* Our Esteemed Clients */}
      <section className="px-8 py-8">
        <h1 className="text-2xl" >Our Esteem Clients</h1>

      </section>

      {/* Our Services */}
      <section className="px-8 py-8">
        <h1 className="text-2xl" >Our Services</h1>
        <section className="flex flex-wrap gap-4">
          <div className="flex-[1/2]">
            <MdSafetyCheck />
            <h4 className="text-red-800 font-bold">Soil Resistively</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div className="flex-[1/2]">
            <MdSafetyCheck />
            <h4 className="text-red-800 font-bold">Supply of Materials</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <MdSafetyCheck />
            <h4 className="text-red-800 font-bold">Pin brazing with complete accessoriest</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <MdSafetyCheck />
            <h4 className="text-red-800 font-bold">P.S.P Monitoring</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <MdSafetyCheck />
            <h4 className="text-red-800 font-bold">CIPL Survey Equipment</h4>
            <p>We prioritise safety across all our services </p>
          </div>

          <div>
            <MdSafetyCheck />
            <h4 className="text-red-800 font-bold">Pipeline Defect Mapper (PDM)</h4>
            <p>We prioritise safety across all our services </p>
          </div>
        </section>
      </section>

      {/* Statistics  */}
      <section className="px-8 py-8">
        <h1 className="text-2xl">
          How we have done so far
        </h1>

        <section className="flex flex-col md:flex-row gap-4">
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
      <section className="flex flex-col items-center text-center px-8 py-8">
        <h1 className="text-2xl">
          What makes us a reliable company ?
        </h1>
        <p>We prioritise safety across all our services</p>


        <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />

      </section>

      {/* help you get started */}
      <section className="flex flex-col px-8 py-8">

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
            className="px-4 py-1 border border-solid border-gray-300 rounded-md"
          />
          <label htmlFor="emailId" className="label">Email Id</label>
          <input
            id="emailId"
            type="email"
            placeholder="eg: nikhil@gmail.com"
            className="px-4 py-1 border border-solid border-gray-300 rounded-md"
          />
          <label htmlFor="country" className="label">Country</label>
          <input
            id="country"
            type="text"
            placeholder="eg: nikhil@gmail.com"
            className="px-4 py-1 border border-solid border-gray-300 rounded-md"
          />
          <label htmlFor="phoneNumber" className="label">Phone Number</label>
          <input
            id="phoneNumber"
            type="number"
            placeholder="eg: nikhil@gmail.com"
            className="px-4 py-1 border border-solid border-gray-300 rounded-md"
          />
          <label htmlFor="requirement" className="label">Requirement</label>
          <textarea
            id="requirement"
            placeholder="Write your requirements"
            className="px-4 py-1 border border-solid border-gray-300 rounded-md"
          />
        </form>

      </section>

    </>
  );
}
