import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

interface BannerProps {
    title: string,
    description: string
}

function Banner({ title, description }: BannerProps) {
    return (
        <section className='bg-[#8F2D26] px-8 py-6 md:px-12 md:py-16 flex flex-col md:flex-row  rounded-3xl justify-between md:items-center text-white gap-4'>
            <div className='flex flex-col gap-6 md:w-1/2'>
                <h1 className='text-2xl md:text-5xl'>{title}</h1>
                <p className='text-sm font-normal'>
                    {description}
                </p>
            </div>
            <div className=''>
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