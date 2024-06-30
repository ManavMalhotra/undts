import React from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import project1 from "@/app/Imageproject1.png"
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";

function page() {
    return (

        <Container>
            <section className='flex justify-between'>
                <div className='flex-1'><h1 className='text-4xl'>About Us</h1></div>
                <div className='flex-1'><p>We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.</p></div>
            </section>
            <section className='flex flex-col gap-16 my-16'>
                <Image src={project1} alt="project1" layout="responsive" />
                <div className='w-1/2'>
                    <p>We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.</p>
                </div>
            </section>
            <section className='' >
                <div className='bg-[#8F2D26] px-8 py-6 md:p-12 flex flex-col md:flex-row  rounded-3xl justify-between md:items-center text-white gap-4'>
                    <div className='flex flex-col gap-6 md:w-1/2'>
                        <p className='font-normal'>
                            We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.
                        </p>
                        <div className='flex flex-row gap-4 md:flex-row'>
                            <h4>Call us at :</h4>
                            <h4>+ 1234567890</h4>
                        </div>
                    </div>
                    <div className=''>
                        <Link href="/#contact-us" className="flex items-center justify-center w-full gap-4 px-8 py-4 text-lg text-white bg-black rounded-full">
                            <h3 className='text-nowrap'>
                                Request a call back
                            </h3>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </Container>

    )
}

export default page