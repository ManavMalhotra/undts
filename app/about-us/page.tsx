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
            <section className='flex gap-16 flex-col my-16'>
                <Image src={project1} alt="project1" layout="responsive" />
                <div className='w-1/2'>
                    <p>We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.</p>
                </div>
            </section>
            <section >
                <div className='bg-[#8F2D26] p-12 flex rounded-3xl justify-between items-center text-white'>
                    <div className='w-1/2 flex flex-col gap-6'>
                        <p className='font-normal'>
                            We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.
                        </p>
                        <div className='flex gap-4'>
                            <h4>Call us at :</h4>
                            <h4>+ 1234567890</h4>
                        </div>
                    </div>
                    <div className='max-w-max'>
                        <Link href="/#contact-us" className="w-full px-6 py-4 text-lg text-white bg-black rounded-full flex items-center gap-2">
                            Request a call back <FaArrowRight />
                        </Link>

                    </div>
                </div>
            </section>
        </Container>

    )
}

export default page