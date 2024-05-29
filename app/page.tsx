"use client"

import ClientCard from "@/components/ClientCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import project1 from "@/app/Imageproject1.png"
import Reliable from "@/components/Reliable";
import Esteemed from "@/components/Esteemed";
import OurServices from "@/components/OurServices";
import Statistics from "@/components/Statistics";
import ReliableCompany from "@/components/ReliableCompany";
import Form from "@/components/Form";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";

import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";


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
      <section className="flex flex-col items-center text-left  ">
        <h1 className="text-2xl md:text-4xl" >What do our client have to say ?</h1>

        <p className='pt-4'>We prioritise safety across all our services</p>
      </section>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >

        <div>
          <Image src={project1} alt="project1" className="mx-4" />

          <section className=" max-w-[400px] w-[400px] absolute top-[6%] left-[6%] rounded-xl justify-between bg-slate-400 px-4 py-4">
            <div className=" flex justify-between">
              <h1 className="text-4xl">Project Name</h1>
              <FaCircleArrowRight className="h-8" />
            </div>
            <p className="text-base mt-2">
              We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.
            </p>

          </section>

        </div>

        <Image src={project1} alt="project1" className="mx-4" />
        <Image src={project1} alt="project1" className="mx-4" />
        <Image src={project1} alt="project1" className="mx-4" />

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
