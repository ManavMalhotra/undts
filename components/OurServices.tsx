import React from 'react'
import { IoHelpBuoyOutline } from 'react-icons/io5'
import Container from './Container'
import { FaArrowDown, FaArrowRight, FaTools } from 'react-icons/fa';
import Link from 'next/link';
import { MdMonitor, MdOutlineMonitor, MdSecurity } from 'react-icons/md';
import { TbTruckDelivery } from "react-icons/tb";
import { FcSurvey } from "react-icons/fc";
import { SiJfrogpipelines } from "react-icons/si";
import { BsTools } from "react-icons/bs";



function OurServices() {
    const services = [
        {
            title: "Soil Resistively", description: "We provide accurate soil resistivity measurements to assess corrosion risk and design effective prevention strategies.",
            icon: <MdSecurity className="w-6 h-auto my-2 md:w-8" />
        },
        {
            title: "Supply of Materials", description: "We supply high-quality corrosion prevention materials tailored to your specific needs.",
            icon: <TbTruckDelivery className="w-6 h-auto my-2 md:w-8" />
        },
        {
            title: "Pin brazing with complete accessories", description: "Our pin brazing services ensure secure electrical connections with all necessary accessories.Our pin brazing services ensure secure electrical connections with all necessary accessories.",
            icon: <BsTools className="w-6 h-auto my-2 md:w-8"/>

        },
        {
            title: "P.S.P Monitoring", description: "We offer precise P.S.P monitoring to detect and mitigate corrosion in real-time.",
            icon: <MdMonitor className="w-6 h-auto my-2 md:w-8" />

        },
        {
            title: "CIPL Survey Equipment", description: "Our CIPL survey equipment provides comprehensive pipeline integrity assessments.",
            icon: <IoHelpBuoyOutline className="w-6 h-auto my-2 md:w-8" />

        },
        {
            title: "Pipeline Defect Mapper (PDM)", description: "Our Pipeline Defect Mapper (PDM) identifies and locates pipeline defects with high accuracy.",
            icon: <SiJfrogpipelines className="w-6 h-auto my-2 md:w-8" />

        },
    ];

    return (
        <Container className="gap-4 md:px-16 md:flex-row" id='our-services'>
            <h1 className="text-3xl text-center font-[--font-eb-garamond] md:text-4xl mb-8" >Our Services</h1>
            <section className="grid grid-cols-1 gap-4 py-8 md:grid-cols-3 md:gap-y-16 ">
                {services.map((service, index) => (
                    <div key={index} className="p-4 bg-[#ffeeed] md:bg-white md:cursor-pointer hover:text-[#8F2D26] hover:bg-[#ffeeed] hover:rounded-xl">
                        {service.icon}
                        <h4 className="font-semibold">{service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
                <div className='grid-cols-3 '> </div>
                <div className='grid-cols-3 px-16 mt-6 mb-12'>
                    <Link href="/" className="flex items-center justify-center w-full gap-4 px-8 py-4 text-lg font-semibold text-white bg-[#8F2D26] rounded-full">
                        <h3 className='text-2xl text-nowrap'>
                            More Services
                        </h3>
                        <FaArrowRight />
                    </Link>
                </div>
            </section>
        </Container >
    )
}

export default OurServices