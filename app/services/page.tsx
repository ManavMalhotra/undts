import React from 'react'
import { IoHelpBuoyOutline } from 'react-icons/io5'

function page() {
    return (
        <section className='grid grid-cols-4 col-span-4 py-8 md:py-16 md:col-span-8'>

            <div className='col-span-4 '>
                <h1 className='text-6xl font-semibold'>Services</h1>
            </div>
            <div className='col-span-4'>
                <p className='mt-4'>We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.</p>
            </div>

            <section className="col-span-4 gap-4 px-4 py-8 md:col-span-8 md:px-16 md:flex-row">
                {/* <h1 className="text-3xl text-center font-[--font-eb-garamond] md:text-4xl" >Our Services</h1> */}
                <section className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3 md:gap-y-16 ">
                    <div className="">
                        <IoHelpBuoyOutline className="w-6 h-auto md:w-8 text-[#8F2D26]" />
                        <h4 className="font-semibold text-[#8F2D26]">Soil Resistively</h4>
                        <p className="text-[#8F2D26]">We prioritise safety across all our services </p>
                    </div>

                    <div>
                        <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                        <h4 className="font-semibold">Supply of Materials</h4>
                        <p>We prioritise safety across all our services </p>
                    </div>

                    <div>
                        <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                        <h4 className="font-semibold">Pin brazing with complete accessoriest</h4>
                        <p>We prioritise safety across all our services </p>
                    </div>

                    <div>
                        <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                        <h4 className="font-semibold">P.S.P Monitoring</h4>
                        <p>We prioritise safety across all our services </p>
                    </div>

                    <div>
                        <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                        <h4 className="font-semibold">CIPL Survey Equipment</h4>
                        <p>We prioritise safety across all our services </p>
                    </div>

                    <div>
                        <IoHelpBuoyOutline className="w-6 h-auto md:w-8" />
                        <h4 className="font-semibold">Pipeline Defect Mapper (PDM)</h4>
                        <p>We prioritise safety across all our services </p>
                    </div>
                </section>
            </section>


        </section>
    )
}

export default page