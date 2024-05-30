"use client"

import ClientCard from "@/components/ClientCard";
import Navbar from "@/components/Navbar";
import project1 from "@/app/Imageproject1.png"
import Reliable from "@/components/Reliable";
import Esteemed from "@/components/Esteemed";
import OurServices from "@/components/OurServices";
import Statistics from "@/components/Statistics";
import ReliableCompany from "@/components/ReliableCompany";
import Form from "@/components/Form";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";



export default function page() {

  const images = [project1, project1, project1, project1];

  return (
    <>
      {/* <NavigationMenuDemo /> */}
      <main className="grid grid-cols-4 md:grid-cols-8 gap-4 mx-4 md:mx-16">
        <Navbar />
        {/* Reliable Section */}
        {/* <Reliable /> */}
        {/* Our Esteemed Clients */}
        {/* <Esteemed /> */}
        {/* Our Services */}
        <OurServices />
        {/* Statistics */}
        {/* <Statistics /> */}
        {/* Reliable Company */}
        {/* <ReliableCompany /> */}
        {/* Help you get started */}
        {/* <Form /> */}

      </main>
    </>
  );

}
