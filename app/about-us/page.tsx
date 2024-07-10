import React from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import office from "@/public/images/undts_office.png"
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";

function page() {
    return (

        <Container>
            <section className='flex justify-between flex-col md:flex-row'>
                <div className='flex-1'><h1 className='md:text-6xl text-2xl'>About Us</h1></div>
                <div className='flex-1'><p className='md:text-xl text-sm'>Founded in 1984, UNDTS has established itself as a leader in corrosion prevention services for the oil refinery industry. With decades of experience, we have built tremendous value for our clients through our commitment to safety, innovation, and quality.</p></div>
            </section>
            <section className='flex flex-col gap-16 my-16'>
                <Image src={office} alt="project1" layout="responsive" />
                <div className='w-full'>
                    <p> Our team of dedicated professionals leverages advanced technologies and eco-friendly practices to deliver reliable and cost-effective solutions. Whether it's soil resistivity measurements, supplying high-quality materials, or providing precise monitoring and surveying equipment, we ensure the longevity and integrity of your infrastructure. At UNDTS, we are your trusted partner in protecting your investments and enhancing operational efficiency.</p>
                </div>
            </section>
            <section className='' >
                <div className='bg-[#8F2D26] px-8 py-6 md:p-12 flex flex-col md:flex-row  rounded-3xl justify-between md:items-center text-white gap-4'>
                    <div className='flex flex-col gap-6 md:w-1/2'>
                        <p className='font-normal text-xl'>
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