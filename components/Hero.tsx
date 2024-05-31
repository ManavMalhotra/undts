"use client";
import React from 'react'
import Image from "next/image";
import Carousel from "@/components/Carousel";

import project1 from "@/app/Imageproject1.png"

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Hero() {
    return (
        <section className="col-span-4 py-4 text-center md:col-span-8">
            <section className="mb-8">
                <h3 className="text-base">Since 1990</h3>
                <h1 className="text-4xl md:text-6xl md:px-20">
                    India's most reliable corrosion prevention service company
                </h1>
            </section>
            <Carousel>
                <div className="relative hidden embla__slide md:block">
                    <Image src={project1} alt="project1" className="w-full h-auto" />
                    <section className="absolute flex flex-col items-start justify-between w-full max-w-xs px-4 py-4 bg-white border border-black shadow-lg top-4 left-20 sm:max-w-sm sm:w-auto sm:flex-row sm:items-center rounded-2xl">
                        <div className="flex-1">
                            <h1 className="text-2xl">Project Name</h1>
                            <p className="mt-2 text-sm">
                                We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.
                            </p>
                        </div>
                        <div className="flex-none mt-4 sm:ml-4 sm:mt-0">
                            <FaCircleArrowRight className="w-6 h-6 text-red-700" />
                        </div>
                    </section>
                </div>
                <div className="embla__slide">
                    <Image src={project1} alt="project1" />
                </div>
                <div className="embla__slide">
                    <Image src={project1} alt="project1" />
                </div><div className="embla__slide">
                    <Image src={project1} alt="project1" />
                </div><div className="embla__slide">
                    <Image src={project1} alt="project1" />
                </div>

            </Carousel>
        </section>
    )
}
