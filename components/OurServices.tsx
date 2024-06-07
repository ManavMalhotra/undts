import React from 'react'
import { IoHelpBuoyOutline } from 'react-icons/io5'
import Container from './Container'

function OurServices() {
    return (
        <Container className="gap-4 md:px-16 md:flex-row">
            <h1 className="text-3xl text-center font-[--font-eb-garamond] md:text-4xl mb-8" >Our Services</h1>
            <section className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3 md:gap-y-16 ">
                <div className="p-4 cursor-pointer hover:bg-[#ffeeed] rounded-lg ">
                    <IoHelpBuoyOutline className="w-6 h-auto md:w-8 " />
                    <h4 className="font-semibold ">Soil Resistively</h4>
                    <p className="">We prioritise safety across all our services </p>
                </div>

                <div className="p-4 hover:bg-[#ffeeed] rounded-lg cursor-pointer">
                    <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                    <h4 className="font-semibold">Supply of Materials</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div className="p-4 hover:bg-[#ffeeed] rounded-lg cursor-pointer">
                    <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                    <h4 className="font-semibold">Pin brazing with complete accessoriest</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div className="p-4 hover:bg-[#ffeeed] rounded-lg cursor-pointer">
                    <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                    <h4 className="font-semibold">P.S.P Monitoring</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div className="p-4 hover:bg-[#ffeeed] rounded-lg cursor-pointer">
                    <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                    <h4 className="font-semibold">CIPL Survey Equipment</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div className="p-4 hover:bg-[#ffeeed] rounded-lg cursor-pointer">
                    <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                    <h4 className="font-semibold">Pipeline Defect Mapper (PDM)</h4>
                    <p>We prioritise safety across all our services </p>
                </div>
            </section>
        </Container>
    )
}

export default OurServices