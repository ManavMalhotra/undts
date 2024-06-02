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
        <Container className="text-center">
            <section className="mb-16">
                <h3 className="text-base">Since 1990</h3>
                <h1 className="text-4xl md:text-6xl md:px-64">
                    India's most reliable corrosion prevention service company
                </h1>
            </section>
            <Carousel>
                <div className="relative embla__slide">
                    <Image src={project1} alt="project1" layout="responsive" />
                    <section className="absolute flex flex-row items-start justify-between w-full max-w-xs px-4 py-4 bg-white shadow-lg top-4 left-20 rounded-2xl text-left">
                        <div className="">
                            <h1 className="text-2xl">Project Name</h1>
                            <p className="mt-2 text-sm">
                                We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.
                            </p>
                        </div>
                        <div className="mt-4 sm:ml-4 sm:mt-0">
                            <FaCircleArrowRight className="w-6 h-6 text-red-700" />
                        </div>
                    </section>
                </div>
                <div className="embla__slide">
                    <Image src={project2} alt="project2" layout="responsive" />
                </div>
                <div className="embla__slide">
                    <Image src={project3} alt="project3" layout="responsive" />
                </div>
            </Carousel>
        </Container>
    )
}
