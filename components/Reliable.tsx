import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoMdAlarm } from 'react-icons/io'
import { IoDiamondOutline, IoHelpBuoyOutline } from 'react-icons/io5'
import { MdArrowRight } from 'react-icons/md'
import { PiDropBold } from 'react-icons/pi'
import Container from './Container'
import Link from 'next/link'

function Reliable() {
    return (
        <Container className="flex flex-col gap-4 px-4 md:px-16 md:flex-row">

            <div className="md:w-2/5 md:flex md:justify-between md:flex-col md:pr-8">
                <h1 className="font-[--font-eb-garamond] text-2xl md:text-4xl">
                    What makes us reliable company ?
                </h1>
                <Link href="#contact-us">
                    <div className="items-center hidden text-red-800 md:flex md:gap-2">
                        <h1>Schedule free consultation </h1>
                        <FaArrowRightLong className="w-4 h-4" />
                    </div>
                </Link>

            </div>

            <section className="grid items-center grid-cols-2 gap-8 align-middle md:w-3/5 md:grid-cols-2">
                <div className="">
                    <IoHelpBuoyOutline className="w-6 h-auto md:w-8 text-[#8F2D26]" />
                    <h4 className="font-bold text-[#8F2D26] my-2">Safety</h4>
                    <p>We prioritize safety with advanced methods that minimize risks to your operations and personnel.</p>
                </div>

                <div className="">
                    <PiDropBold className="w-6 h-auto md:w-8 text-[#8F2D26]" />
                    <h4 className="font-bold text-[#8F2D26] my-2">Environment Safe</h4>
                    <p>Our eco-friendly practices ensure effective corrosion prevention while protecting the environment. </p>
                </div>

                <div>
                    <IoMdAlarm className="w-6 h-auto md:w-8 text-[#8F2D26]" />
                    <h4 className="font-bold text-[#8F2D26] my-2">On Schedule</h4>
                    <p>We deliver services promptly, meeting deadlines without compromising on quality. </p>
                </div>

                <div>
                    <IoDiamondOutline className="w-6 h-auto md:w-8 text-[#8F2D26]" />
                    <h4 className="font-bold text-[#8F2D26] my-2">Under Budget</h4>
                    <p>Our cost-effective solutions keep your operations within budget, avoiding unexpected expenses. </p>
                </div>

                <Link href="#contact-us">
                    <div className="col-span-2 gap-4 flex items-center text-[#8F2D26] md:hidden">
                        <h1>Schedule free consultation </h1>
                        <FaArrowRightLong className="w-4 h-4" />
                    </div>
                </Link>


            </section>

        </Container>
    )
}

export default Reliable