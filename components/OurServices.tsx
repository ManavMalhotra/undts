import React from 'react'
import { IoHelpBuoyOutline } from 'react-icons/io5'
import Container from './Container'

function OurServices() {
    const services = [
        { title: "Soil Resistively", description: "We prioritise safety across all our services" },
        { title: "Supply of Materials", description: "We prioritise safety across all our services" },
        { title: "Pin brazing with complete accessories", description: "We prioritise safety across all our services" },
        { title: "P.S.P Monitoring", description: "We prioritise safety across all our services" },
        { title: "CIPL Survey Equipment", description: "We prioritise safety across all our services" },
        { title: "Pipeline Defect Mapper (PDM)", description: "We prioritise safety across all our services" },
    ];

    return (
        <Container className="gap-4 md:px-16 md:flex-row">
            <h1 className="text-3xl text-center font-[--font-eb-garamond] md:text-4xl mb-8" >Our Services</h1>
            <section className="grid grid-cols-1 gap-4 py-8 md:grid-cols-3 md:gap-y-16 ">
                {services.map((service, index) => (
                    <div key={index} className="p-4 bg-[#ffeeed] md:bg-white md:cursor-pointer hover:bg-[#ffeeed] rounded-lg">
                        <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                        <h4 className="font-semibold">{service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
            </section>
        </Container>
    )
}

export default OurServices