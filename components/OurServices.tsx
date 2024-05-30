import React from 'react'
import { IoHelpBuoyOutline } from 'react-icons/io5'

function OurServices() {
    return (
        <section className="col-span-4 md:col-span-8 py-8 ">
            <h1 className="text-2xl text-center md:text-4xl" >Our Services</h1>
            <section className="grid grid-cols-1 px-16 py-8 md:gap-x-4 md:grid-cols-3 md:gap-y-16 ">
                <div className="">
                    <IoHelpBuoyOutline className="w-8 h-8 text-[#8F2D26]" />
                    <h4 className="font-bold text-[#8F2D26]">Soil Resistively</h4>
                    <p className="text-[#8F2D26]">We prioritise safety across all our services </p>
                </div>

                <div className="">
                    <IoHelpBuoyOutline className="w-8 h-8" />
                    <h4 className="font-bold text-red-800">Supply of Materials</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div>
                    <IoHelpBuoyOutline className="w-8 h-8" />
                    <h4 className="font-bold text-red-800">Pin brazing with complete accessoriest</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div>
                    <IoHelpBuoyOutline className="w-8 h-8" />
                    <h4 className="font-bold text-red-800">P.S.P Monitoring</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div>
                    <IoHelpBuoyOutline className="w-8 h-8" />
                    <h4 className="font-bold text-red-800">CIPL Survey Equipment</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div>
                    <IoHelpBuoyOutline className="w-8 h-8" />
                    <h4 className="font-bold text-red-800">Pipeline Defect Mapper (PDM)</h4>
                    <p>We prioritise safety across all our services </p>
                </div>
            </section>
        </section>
    )
}

export default OurServices