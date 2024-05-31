import project1 from "@/app/Imageproject1.png"

import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
import Reliable from "@/components/Reliable";
import Esteemed from "@/components/Esteemed";
import OurServices from "@/components/OurServices";
import Statistics from "@/components/Statistics";
import ReliableCompany from "@/components/ReliableCompany";

import Footer from "@/components/Footer";

export default function page() {
  const images = [project1, project1, project1, project1];

  return (
    <>
      {/* <NavigationMenuDemo /> */}
      <main className="grid grid-cols-4 gap-4 mx-4 md:grid-cols-8 md:mx-16">
        <Navbar />
        {/* Hero Section */}
        <Hero />
        
        {/* Reliable Section */}
        <Reliable />
        {/* Our Esteemed Clients */}
        <Esteemed />
        {/* Our Services */}
        <OurServices />
        {/* Statistics */}
        <Statistics />
        {/* Reliable Company */}
        <ReliableCompany />
        {/* Help you get started */}
        {/* <Form /> 
        */}
      </main>
      <Footer />
    </>
  );

}
