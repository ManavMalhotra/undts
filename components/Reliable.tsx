import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoMdAlarm } from 'react-icons/io'
import { IoDiamondOutline, IoHelpBuoyOutline } from 'react-icons/io5'
import { MdArrowRight } from 'react-icons/md'
import { PiDropBold } from 'react-icons/pi'
import Container from './Container'

function Reliable() {
    return (
        <Container className="flex flex-col gap-4 px-4 md:px-16 md:flex-row">

            <div className="md:w-2/5 md:flex md:justify-between md:flex-col md:pr-8">
                <h1 className="font-[--font-eb-garamond] text-2xl md:text-4xl">
                    What makes us reliable company ?
                </h1>
                <div className="items-center hidden text-red-800 md:flex md:gap-2">
                    <h1>Schedule free consultation </h1>
                    <FaArrowRightLong className="w-4 h-4" />
                </div>

            </div>

            <section className="grid items-center grid-cols-2 gap-8 align-middle md:w-3/5 md:grid-cols-2">
                <div className="">
                    <IoHelpBuoyOutline className="w-6 h-auto md:w-8 text-[#8F2D26]" />
                    <h4 className="font-bold text-[#8F2D26] my-2">Safety</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div className="">
                    <PiDropBold className="w-6 h-auto md:w-8 text-[#8F2D26]" />
                    <h4 className="font-bold text-[#8F2D26] my-2">Environment Safe</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div>
                    <IoMdAlarm className="w-6 h-auto md:w-8 text-[#8F2D26]" />
                    <h4 className="font-bold text-[#8F2D26] my-2">On Schedule</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div>
                    <IoDiamondOutline className="w-6 h-auto md:w-8 text-[#8F2D26]" />
                    <h4 className="font-bold text-[#8F2D26] my-2">Under Budget</h4>
                    <p>We prioritise safety across all our services </p>
                </div>

                <div className="col-span-2 gap-4 flex items-center text-[#8F2D26] md:hidden">
                    <h1>Schedule free consultation </h1>
                    <FaArrowRightLong color='#8F2D26' />
                </div>
            </section>

        </Container>
    )
}

export default Reliable