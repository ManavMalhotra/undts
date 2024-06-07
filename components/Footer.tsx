import React from 'react'
import logo from "@/app/logo.png";
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='md:grid-cols-8 grid-cols-4 col-span-4 md:col-span-8 bg-[#FFEEED] md:px-16 px-4 py-8 grid'>

            <section className='flex flex-col justify-between col-span-4 md:col-span-2'>
                <Image src={logo} alt='undts logo' className='w-24' priority={true} width={80} height={40} />
                <p>India’s most reliable corrosion prevention service company</p>
                <div className="flex gap-4 justify-normal">
                    <FaInstagram size={24} color='#8F2D26' />
                    <FaLinkedin size={24} color='#8F2D26' />
                    <FaFacebook size={24} color='#8F2D26' />
                    <FaXTwitter size={24} color='#8F2D26' />
                    <FaYoutube size={24} color='#8F2D26' />
                </div>
                <div>
                    <h6 className="text-sm text-gray-400">Reach out to us</h6>
                    <Link href="mailto:info@udts.com" >
                        <h6 className="underline">info@udts.com</h6>
                    </Link>
                </div>
                <p className='mt-4 text-nowrap'>© Copyright UNDTS. All Rights Reserved</p>
            </section>
            <section className='hidden md:block md:col-span-1'></section>
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
                <div className='flex gap-2 mt-4'>
                    <h3 className='text-[#B8B8B8] '>Address:</h3>
                    <p className='text-wrap md:text-nowrap '>29D, B-9/8, Sector–62, Distt. G.B. Nagar, Noida, UP</p>
                </div>
            </section>
            <section className='hidden md:block md:col-span-1'></section>
            <section className='col-span-4 md:col-span-2'>
                <h1 className='text-[#B8B8B8] mb-4'>Quick Links</h1>
                <ul className="flex flex-col gap-2 mt-2">
                    <li className="font-semibold">Projects </li>
                    <li className="font-semibold">Company</li>
                    <li className="font-semibold">Services</li>
                    <li className="font-semibold">Certifications</li>
                    <li className="font-semibold">Careers</li>
                </ul>
            </section>
            <section className='flex col-span-4 gap-16 md:col-span-8'>

            </section>

        </footer>
    )
}
