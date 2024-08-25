"use client";
import React from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import office from "@/public/images/undts_office.png"
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import ImageGallery from '@/components/ImageGallery';
import Banner from '@/components/Banner';


function page() {
    const [index, setIndex] = React.useState(-1);

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const categories = ['all', 'gallery', 'certificates'];

    const certificates = [
        {
            src: '/certificates/c-1.png',
            category: 'certificates',
            alt: 'Certificate-1',
        },
        {
            src: '/certificates/c-2.png',
            category: 'certificates',
            alt: 'Certificate-2',
        },
        {
            src: '/certificates/c-3.png',
            category: 'certificates',
            alt: 'Certificate-3',
        },
        {
            src: '/certificates/c-4.png',
            category: 'certificates',
            alt: 'Certificate-4',
        },
        {
            src: '/certificates/c-5.png',
            category: 'certificates',
            alt: 'Certificate-5',
        },
        {
            src: '/certificates/c-6.png',
            category: 'certificates',
            alt: 'Certificate-6',
        },
        {
            src: '/certificates/c-7.png',
            category: 'certificates',
            alt: 'Certificate-7',
        },
        {
            src: '/certificates/c-8.png',
            category: 'certificates',
            alt: 'Certificate-8',
        },
        {
            src: '/certificates/c-9.png',
            category: 'certificates',
            alt: 'Certificate-9',
        },
        {
            src: '/certificates/c-10.png',
            category: 'certificates',
            alt: 'Certificate-10',
        },
        {
            src: '/certificates/c-11.png',
            category: 'certificates',
            alt: 'Certificate-11',
        },
        {
            src: '/certificates/c-12.png',
            category: 'certificates',
            alt: 'Certificate-12',
        },
        {
            src: '/certificates/c-13.png',
            category: 'certificates',
            alt: 'Certificate-13',
        },
        {
            src: '/certificates/c-14.png',
            category: 'certificates',
            alt: 'Certificate-14',
        },
        {
            src: '/certificates/c-15.png',
            category: 'certificates',
            alt: 'Certificate-15',
        },
        {
            src: '/certificates/c-16.png',
            category: 'certificates',
            alt: 'Certificate-16',
        },
        {
            src: '/certificates/c-17.png',
            category: 'certificates',
            alt: 'Certificate-17',
        },
        {
            src: '/certificates/c-18.png',
            category: 'certificates',
            alt: 'Certificate-18',
        },
        {
            src: '/certificates/c-19.png',
            category: 'certificates',
            alt: 'Certificate-19',
        },
        {
            src: '/certificates/c-20.png',
            category: 'certificates',
            alt: 'Certificate-20',
        },
        {
            src: '/certificates/c-21.png',
            category: 'certificates',
            alt: 'Certificate-21',
        },
        {
            src: '/certificates/c-22.png',
            category: 'certificates',
            alt: 'Certificate-22',
        },
        {
            src: '/certificates/c-23.png',
            category: 'certificates',
            alt: 'Certificate-23',
        },
        {
            src: '/certificates/c-24.png',
            category: 'certificates',
            alt: 'Certificate-24',
        },
        {
            src: '/gallery/gallery1.jpg',
            category: 'gallery',
            alt: 'Gallery-1',
        }

    ];

    const gallery = [
        {
            src: '/gallery/gallery1.jpg',
            category: 'gallery',
            alt: 'Gallery-1',
        },
        {
            src: '/gallery/gallery2.jpg',
            category: 'gallery',
            alt: 'Gallery-2',
        },
        {
            src: '/gallery/gallery3.jpg',
            category: 'gallery',
            alt: 'Gallery-3',
        },
        {
            src: '/gallery/gallery4.jpg',
            category: 'gallery',
            alt: 'Gallery-4',
        },
        {
            src: '/gallery/gallery5.jpg',
            category: 'gallery',
            alt: 'Gallery-5',
        },
        {
            src: '/gallery/gallery6.jpg',
            category: 'gallery',
            alt: 'Gallery-6',
        },
        {
            src: '/gallery/gallery7.jpg',
            category: 'gallery',
            alt: 'Gallery-7',
        },
        {
            src: '/gallery/gallery8.jpg',
            category: 'gallery',
            alt: 'Gallery-8',
        },
        {
            src: '/gallery/gallery9.jpg',
            category: 'gallery',
            alt: 'Gallery-9',
        },
        {
            src: '/gallery/gallery10.jpg',
            category: 'gallery',
            alt: 'Gallery-10',
        },
        {
            src: '/gallery/gallery11.jpg',
            category: 'gallery',
            alt: 'Gallery-11',
        },
        {
            src: '/gallery/gallery12.jpg',
            category: 'gallery',
            alt: 'Gallery-12',
        },
        {
            src: '/gallery/gallery13.jpg',
            category: 'gallery',
            alt: 'Gallery-13',
        },
        {
            src: '/gallery/gallery14.jpg',
            category: 'gallery',
            alt: 'Gallery-14',
        },
        {
            src: '/gallery/gallery15.jpg',
            category: 'gallery',
            alt: 'Gallery-15',
        },
    ]

    const images = [
        ...gallery,
        ...certificates
    ]



    return (

        <Container>
            <section className='flex flex-col justify-between gap-4 md:flex-row'>
                <div className='flex-1'><h1 className='text-2xl md:text-6xl'>Portfolio</h1></div>
                <div className='flex-1'><p className='text-sm md:text-xl'>We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.</p></div>
            </section>

            <div className='my-12'>
                <ImageGallery
                    categories={categories}
                    images={images}
                />
            </div>


            {/* <section className='' >
                <div className='bg-[#8F2D26] px-8 py-6 md:p-12 flex flex-col md:flex-row  rounded-3xl justify-between md:items-center text-white gap-4'>
                    <div className='flex flex-col gap-6 md:w-1/2'>
                        <p className='text-xl font-normal'>
                            We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.
                        </p>
                        <div className='flex flex-row gap-4 md:flex-row'>
                            <h4>Call us at :</h4>
                            <h4>+ 1234567890</h4>
                        </div>
                    </div>
                    <div className=''>
                        <Link href="/#contact-us" className="flex items-center justify-center w-full gap-4 px-8 py-4 text-lg text-white bg-black rounded-full">
                            <h3 className='text-nowrap'>
                                Request a call back
                            </h3>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section> */}

            <Banner title="Site Survey Experts" description="We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields." />

        </Container>

    )
}

export default page