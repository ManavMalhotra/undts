import React from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import office from "@/public/images/undts_office.png"
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import Banner from '@/components/Banner'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function page() {
    const services = [
        {
            title: "Soil Resistivity & Chemical Analysis",
            description:
                "Conduct soil resistivity, chemical composition, and bacterial loading tests for Cathodic Protection (C.P.) system data generation.",
        },
        {
            title: "Soil Sampling by Auguring",
            description:
                "Collect soil samples using auguring techniques for analysis in C.P. system design and application.",
        },
        {
            title: "C.P. System Design & Material Procurement",
            description:
                "Design, procure, supply materials, and oversee the installation, testing, commissioning, and monitoring of Cathodic Protection systems.",
        },
        {
            title: "A.C. & D.C. Interference Detection & Mitigation",
            description:
                "Identify and mitigate alternating current (A.C.) and direct current (D.C.) interference in pipeline Right of Way (R.O.W.).",
        },
        {
            title: "C.P. Components Installation",
            description:
                "Install Test Reading Units (T.R.U.), Junction Boxes (JN Boxes), anodes, Grounding Resistance (GR) cells, reference electrodes, and test stations.",
        },
        {
            title: "Anodes & Cables Installation & Commissioning",
            description:
                "Lay and terminate all types of anodes and cables, and ensure proper commissioning for the C.P. system.",
        },
        {
            title: "Annual C.P. System Maintenance & Monitoring",
            description:
                "Provide maintenance and monitoring services for Cathodic Protection systems to ensure optimal performance.",
        },
        {
            title: "Coating Holiday Detection & Fault Analysis",
            description:
                "Detect coating defects and continuity faults in Cathodic Protection systems.",
        },
        {
            title: "Condition Monitoring of Coating by Pearson Method",
            description:
                "Monitor coating or wrapping condition on pipelines using Pearson holiday detection.",
        },
        {
            title: "Pipeline Coating & Wrapping",
            description:
                "Apply and ensure proper wrapping or coating on underground pipelines for C.P. system integrity.",
        },
        {
            title: "Pin Blazing & Thermit Welding with Epoxy",
            description:
                "Perform pin blazing or thermit welding and apply epoxy encapsulation for durable pipeline joints.",
        },
    ];

    const equipments = [
        "Pin Brazing with complete accessoriest",
        "Soil resistively Meters with complete accessories",
        "Data Logging, (Fluke 289 & Rishabh 12S) ",
        "P.S.P Monitoring",
        "Coating Conductance",
        "Interference Survey",
        "Pearson Holiday Detector Make TINKER & RAIȘOR, U.S.A(Four Set)",
        "Multi Combination Meter Make M.C.Miller, U.S.A(One Set)",
        "CIS & DCVG Survey for Gatherer One(GI) Make M.C.Miller. (One Set)",
        "CIS & DCVG Survey for GX Make M.C.Miller(One Set)"
    ]

    const surveyEquipments = [
        "CIPS Equipment",
        "CAT Survey Equipment",
        "Pipeline Defect Mapper (POM)",
        "DCVG Survey Equipment",
        "G-1 Data Logger",
        "Pipe Locator / Pearson Survey Equipment",
        "Soil Resistivity Meter",
        "Current Interrupter",
        "Pin Brazing Equipment",
        "Holiday Detection Equipment",
        "Multimeter",
        "Megger",
        "Data Logger",
        "Clamp On Meter",
        "Micro Ohm Meter",
        "GPS Instrument"
    ]




    return (

        <Container>
            <section className='flex flex-col justify-between gap-4 md:flex-row'>
                <div className='flex-1'><h1 className='text-2xl md:text-6xl'>Services</h1></div>
                <div className='flex-1'><p className='text-sm md:text-xl'>We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.</p></div>
            </section>

            <section className="my-24">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg ">
                            <h3 className="mb-2 text-xl font-semibold text-[#8F2D26]">{service.title}</h3>
                            <p className="text-sm text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>


            <Banner title="Site Survey Equipments" description="We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields." />

            <Accordion type="single" collapsible className="w-full bg-[#8F2D26] text-white relative bottom-[20px]"
            style={{
                // border-bottom-left-radius: 1rem;
                // border-bottom-right-radius: 1rem;
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem"
            }}
            >
                <AccordionItem value="item-1" className=''>
                    <AccordionTrigger className='text-2xl py-6 md:text-5xl px-12'>Equipments</AccordionTrigger>
                    <AccordionContent className='p-12 bg-white ' style={{
                        border: "2px solid #8F2D26"
                    }} >
                        {
                            equipments.map((equipment, index) => (
                                <div key={index} className="p-4 rounded-xl   md:cursor-pointer text-[#8F2D26] bg-[#FFEEED] mb-4">
                                    <h4 className="text-lg font-semibold md:text-2xl pb-2">{equipment}</h4>
                                </div>
                            ))
                        }
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className=''>
                    <AccordionTrigger className='text-2xl py-6 md:text-5xl px-12'>Survey Equipments</AccordionTrigger>
                    <AccordionContent className='p-12 bg-white ' style={{
                        border: "2px solid #8F2D26"
                    }} >
                        {
                            surveyEquipments.map((equipment, index) => (
                                <div key={index} className="p-4 rounded-xl   md:cursor-pointer text-[#8F2D26] bg-[#FFEEED] mb-4">
                                    <h4 className="text-lg font-semibold md:text-2xl">{equipment}</h4>
                                </div>
                            ))
                        }
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Container >

    )
}

export default page