"use client";
import React from 'react'
import Image from "next/image";
import Carousel from "@/components/Carousel";

import project1 from "@/app/Imageproject1.png"
import project2 from "@/app/project2.png"
import project3 from "@/app/project3.png"

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaCircleArrowRight, FaLocationDot } from "react-icons/fa6";
import Container from './Container';

export default function Hero() {
    return (
        <Container className="pt-0 text-center">
            <section className="mb-16">
                <h3 className="mb-4 text-base">Since 1990</h3>
                <h1 className="text-[1.8rem] leading-10 md:text-6xl md:px-64">
                    India's most reliable corrosion prevention service company
                </h1>
            </section>
            <Carousel>
                <div className="relative embla__slide rounded-2xl">
                    <Image src={project1} alt="project1" layout="responsive" />
                    <section className="absolute hidden top-[1vw] left-[1vw] flex-row items-start justify-between w-[350px] max-w-xs px-4 py-4 text-left bg-[#8F2D26] text-white shadow-lg md:flex rounded-2xl">
                        <div>
                            <div className='flex items-center gap-2 '>
                                <FaLocationDot size={12} />
                                <h1 className="text-xs font-bold raleway">Hyderabad Airport</h1>
                            </div>
                            <p className="mt-2 text-sm">
                                Site Survey of We introduce ourselves as one of the reputed construction companies in India having registered.
                            </p>
                        </div>
                    </section>
                </div>
                <div className="relative embla__slide rounded-2xl">
                    <Image src={project2} alt="project2" layout="responsive" />
                    <section className="absolute hidden top-[1vw] left-[1vw] flex-row items-start justify-between w-[350px] max-w-xs px-4 py-4 text-left bg-[#8F2D26] text-white shadow-lg md:flex rounded-2xl">
                        <div>
                            <div className='flex items-center gap-2 '>
                                <FaLocationDot size={12} />
                                <h1 className="text-xs font-bold raleway">Project Location 2</h1>
                            </div>
                            <p className="mt-2 text-sm">
                                Description for Project 2 goes here.
                            </p>
                        </div>
                    </section>
                </div>
                <div className="relative embla__slide rounded-2xl">
                    <Image src={project3} alt="project3" layout="responsive" />
                    <section className="absolute hidden top-[1vw] left-[1vw] flex-row items-start justify-between w-[350px] max-w-xs px-4 py-4 text-left bg-[#8F2D26] text-white shadow-lg md:flex rounded-2xl">
                        <div>
                            <div className='flex items-center gap-2 '>
                                <FaLocationDot size={12} />
                                <h1 className="text-xs font-bold raleway">Project Location 3</h1>
                            </div>
                            <p className="mt-2 text-sm">
                                Description for Project 3 goes here.
                            </p>
                        </div>
                    </section>
                </div>
            </Carousel>
        </Container>
    )
}
