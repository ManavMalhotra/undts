import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel'
import Image from "next/image";

import project1 from "@/app/Imageproject1.png"

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";


export default function Hero() {
    return (
        <section className="px-4 py-16 text-center col-span-8">
            <section className="mb-8">
                <h3 className="text-base">Since 1990</h3>
                <h1 className="text-2xl md:text-5xl md:px-20">
                    India's most reliable corrosion prevention service company
                </h1>
            </section>
            <section className="flex flex-col items-center text-left mb-8">
                <h1 className="text-2xl md:text-4xl">What do our clients have to say?</h1>
                <p className="pt-4">We prioritise safety across all our services</p>
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
                            min: 1024,
                        },
                        items: 1,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 1,
                    },
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
                <div className="relative">
                    <Image src={project1} alt="project1" className="mx-4" />
                    <section className="max-w-[400px] w-[400px] absolute top-[6%] left-[6%] rounded-xl justify-between bg-slate-400 px-4 py-4">
                        <div className="flex justify-between">
                            <h1 className="text-4xl">Project Name</h1>
                            <FaCircleArrowRight className="h-8" />
                        </div>
                        <p className="text-base mt-2">
                            We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.
                        </p>
                    </section>
                </div>
                <Image src={project1} alt="project1" className="mx-4" />
                <Image src={project1} alt="project1" className="mx-4" />
                <Image src={project1} alt="project1" className="mx-4" />
            </Carousel>
        </section>
    )
}
