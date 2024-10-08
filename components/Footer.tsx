import React from 'react'
import logo from "@/app/logo.png";
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            {/* desktop */}
            <footer className='hidden md:grid-cols-8 grid-cols-4 col-span-4 md:col-span-8 bg-[#FFEEED] md:px-16 px-4 py-8 md:grid'>

                <section className='flex flex-col justify-between col-span-4 md:col-span-2'>
                    <Image src={logo} alt='undts logo' className='w-[78px]' priority={true} width={80} height={40} />

                    <p className='my-4'>India’s most reliable corrosion prevention service company</p>

                    <div className="flex gap-4 justify-normal">
                        <FaLinkedin size={24} color='#8F2D26' />
                        <FaFacebook size={24} color='#8F2D26' />
                    </div>
                    <div className='my-8'>
                        <h6 className="text-sm text-[#B8B8B8]">Address:</h6>

                        <div className='flex items-center gap-2 my-2'>
                            <FaLocationDot size={12} />
                            <h6 className='text-sm'>29D, B-9/8, Sector–62, Distt. G.B. Nagar, Noida, UP</h6>
                        </div>

                        <div className='flex items-center gap-2'>
                            <FaLocationDot size={12} />
                            <h6>C-7 & 8 Baida, Barari, Bhagalpur, Bihar - 812003</h6>
                        </div>

                    </div>
                    <p className='mt-8 text-nowrap'>© Copyright UNDTS. All Rights Reserved</p>
                </section>
                <section className='hidden md:block md:col-span-1'></section>

                <section className='flex flex-col justify-between col-span-4 md:col-span-2'>
                    <div>
                        <h1 className='text-[#B8B8B8] mb-4'>Services</h1>
                        <ul className="flex flex-col gap-2 ">
                            <li className="font-semibold">Soil Resistively </li>
                            <li className="font-semibold">Cathodic Protection</li>
                            <li className="font-semibold">Pipeline Integrity</li>
                            <li className="font-semibold">Corrosion Control</li>
                            <li className="font-semibold">Coating Inspection</li>
                            <li className="font-semibold">Coating Inspection</li>
                        </ul>
                    </div>
                    <div className='flex gap-2 mt-16'>
                        <h3 className='text-[#B8B8B8] '>Reach out to us :</h3>
                        <p className='text-wrap md:text-nowrap '>info@undts.com</p>
                    </div>
                </section>
                <section className='hidden md:block md:col-span-1'></section>
                <section className='col-span-4 md:col-span-2'>
                    <h1 className='text-[#B8B8B8] mb-4'>Quick Links</h1>
                    <ul className="flex flex-col gap-2 mt-2">
                        <Link href="/services#equipments"> <li className="font-semibold">Equipments</li></Link>
                        <Link href="/about-us"> <li className="font-semibold">About</li></Link>
                        <Link href="/services"> <li className="font-semibold">Services</li></Link>
                        <Link href="/portfolio"> <li className="font-semibold">Certifications</li></Link>
                        <Link href="/portfolio"> <li className="font-semibold">Gallery</li></Link>
                    </ul>
                </section>
                <section className='flex col-span-4 gap-16 md:col-span-8'>
                </section>
            </footer>

            {/* mobile */}
            <footer className='px-6 py-10 bg-[#FFEEED] flex md:hidden flex-col gap-16' >
                <div className='flex justify-between'>
                    <section className='col-span-4 md:col-span-2'>
                        <h1 className='text-[#B8B8B8] mb-4'>Quick Links</h1>
                        <ul className="flex flex-col gap-2 mt-2">

                            <Link href="/services#equipments"> <li className="font-semibold">Equipments</li></Link>
                            <Link href="/about-us"> <li className="font-semibold">About</li></Link>
                            <Link href="/services"> <li className="font-semibold">Services</li></Link>
                            <Link href="/portfolio"> <li className="font-semibold">Certifications</li></Link>
                            <Link href="/portfolio"> <li className="font-semibold">Gallery</li></Link>

                        </ul>
                    </section>

                    <section className='col-span-4 md:col-span-2 '>
                        <h1 className='text-[#B8B8B8] mb-4'>Services</h1>
                        <ul className="flex flex-col gap-2 ">
                            <li className="font-semibold">Soil Resistively </li>
                            <li className="font-semibold">Cathodic Protection</li>
                            <li className="font-semibold">Pipeline Integrity</li>
                            <li className="font-semibold">Corrosion Control</li>
                            <li className="font-semibold">Coating Inspection</li>
                            <li className="font-semibold">Coating Inspection</li>
                        </ul>
                    </section>
                </div>
                <div className='mt-4'>
                    <h6 className="text-[#B8B8B8]">Address:</h6>

                    <div className='flex items-center gap-2 my-2'>
                        {/* <FaLocationDot size={12} /> */}
                        <h6 className='text-sm'>29D, B-9/8, Sector–62, Distt. G.B. Nagar, Noida, UP</h6>
                    </div>

                    <div className='flex items-center gap-2'>
                        {/* <FaLocationDot size={12} /> */}
                        <h6>C-7 & 8 Baida, Barari, Bhagalpur, Bihar - 812003</h6>
                    </div>

                </div>

                <section className='flex flex-col justify-between col-span-4 gap-2 md:col-span-2'>
                    <Image src={logo} alt='undts logo' className='w-[78px]' priority={true} width={80} height={40} />
                    <p>India’s most reliable corrosion prevention service company</p>
                    <div className="flex gap-4 justify-normal">
                        <FaLinkedin size={24} color='#8F2D26' />
                        <FaFacebook size={24} color='#8F2D26' />
                    </div>
                    <div className='mt-4'>
                        <h6 className="text-sm text-[#B8B8B8]">Reach out to us</h6>
                        <Link href="mailto:info@udts.com" >
                            <h6 className="underline">info@udts.com</h6>
                        </Link>
                    </div>
                </section>

                <p className='mx-auto mt-4 text-nowrap'>© Copyright UNDTS. All Rights Reserved</p>



            </footer>
        </>

    )
}
