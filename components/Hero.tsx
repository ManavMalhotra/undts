"use client";
import React from 'react'
import Image from "next/image";
import Carousel from "@/components/Carousel";

import project1 from "@/app/Imageproject1.png"
import project2 from "@/app/project2.png"
import project3 from "@/app/project3.png"

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";
import Container from './Container';

export default function Hero() {
    return (
        <Container className="text-center pt-0">
            <section className="mb-16">
                <h3 className="text-base mb-4">Since 1990</h3>
                <h1 className="text-[1.8rem] leading-10 md:text-6xl md:px-64">
                    India's most reliable corrosion prevention service company
                </h1>
            </section>
            <Carousel>
                <div className="embla__slide rounded-2xl">
                    <Image src={project1} alt="project1" layout="responsive" />
                    {/* <section className="top-[1vw] left-[1vw] absolute flex-row items-start justify-between hidden w-full max-w-xs px-4 py-4 text-left bg-white shadow-lg md:flex rounded-2xl">
                        <div className="">
                            <h1 className="text-2xl">Project Name</h1>
                            <p className="mt-2 text-sm">
                                We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.
                            </p>
                        </div>
                        <div className="mt-4 sm:ml-4 sm:mt-0">
                            <FaCircleArrowRight className="w-6 h-6 text-red-700" />
                        </div>
                    </section> */}
                </div>
                <div className="embla__slide rounded-2xl ">
                    <Image src={project2} alt="project2" layout="responsive" />
                </div>
                <div className="embla__slide rounded-2xl">
                    <Image src={project3} alt="project3" layout="responsive" />
                </div>
            </Carousel>
        </Container>
    )
}
