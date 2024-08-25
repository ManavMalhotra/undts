import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import project from "@/app/Imageproject1.png"

interface BannerProps {
    title: string,
    description: string
}

function Banner({ title, description }: BannerProps) {
    return (
        <section
            className='relative bg-[#8F2D26] px-8 py-6 md:px-12 md:py-16 flex flex-col md:flex-row rounded-3xl justify-between md:items-center text-white gap-4 overflow-hidden'
            style={{
                // background: `radial-gradient(58.68% 58.9% at 75.52% 49.94%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), 
                // url(/clients/imageproject1.png) lightgray 50% / cover no-repeat`,

                background: "radial-gradient(58.68% 58.9% at 75.52% 49.94%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 100%), url(/image.png) lightgray 50% / cover no-repeat"

            }
            }
        >
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Gradient Overlay */}

            <div className='relative z-10 flex flex-col gap-6 md:w-1/2'>
                <h1 className='text-2xl md:text-5xl'>{title}</h1>
                <p className='text-sm font-normal'>
                    {description}
                </p>
            </div>
            <div className='relative z-10'>
                <Link href="/#contact-us" className="flex items-center justify-center w-full gap-4 px-8 py-4 text-lg font-semibold text-black bg-white rounded-full">
                    <h3 className='text-nowrap'>
                        Contact Us
                    </h3>
                    <FaArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Banner