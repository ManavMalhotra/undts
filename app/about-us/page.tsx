import React from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import office from "@/public/images/undts_office.png"
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import Banner from '@/components/Banner'
import founder from "@/public/images/about3.png"

function page() {
    return (

        <Container>
            <section className='flex flex-col justify-between gap-4 md:flex-row'>
                <div className='flex-1'><h1 className='text-2xl md:text-6xl'>About Us</h1></div>
                <div className='flex-1'><p className='text-sm md:text-xl'>Founded in 1984, UNDTS has established itself as a leader in corrosion prevention services for the oil refinery industry. With decades of experience, we have built tremendous value for our clients through our commitment to safety, innovation, and quality.</p></div>
            </section>
            <section className='flex flex-col gap-16 my-16'>
                <Image src={office} alt="project1" layout="responsive" />
                <div className='w-full'>
                    <p> Our team of dedicated professionals leverages advanced technologies and eco-friendly practices to deliver reliable and cost-effective solutions. Whether it's soil resistivity measurements, supplying high-quality materials, or providing precise monitoring and surveying equipment, we ensure the longevity and integrity of your infrastructure. At UNDTS, we are your trusted partner in protecting your investments and enhancing operational efficiency.</p>
                </div>
            </section>

            <div className="px-4 py-8 mx-auto my-16 md:my-24">
                <div className="flex flex-col items-center justify-between gap-16 md:gap-28 lg:flex-row lg:items-start">
                    <div className="w-full lg:h-[350px] lg:w-1/2">
                        <Image src={founder} alt="Founder"
                            layout="responsive"
                            className="w-full h-auto rounded-3xl"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="mb-4 text-2xl font-normal md:text-5xl">A word from the Founder</h2>
                        <p className="mb-4 text-gray-700 md:text-[22px] ">
                            Our team of dedicated professionals leverages advanced technologies and eco-friendly practices to deliver reliable and cost-effective solutions. Whether it's soil resistivity measurements, supplying high-quality materials, or providing precise monitoring and surveying equipment.
                        </p>
                        <p className="text-xl text-black md:text-2xl">
                            Write to me at: <span className="font-bold">nikhil@undts.com</span>
                        </p>
                    </div>
                </div>
            </div>


            <Banner title="Site Survey Experts" description="We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields." />
        </Container>

    )
}

export default page