import React from 'react';
import Container from './Container';
import Image from 'next/image';
import about1 from "@/public/images/about1.png";
import about2 from "@/public/images/about2.png";
import about3 from "@/public/images/about3.png";
import about4 from "@/public/images/about4.png";
import about5 from "@/public/images/about5.png";
import about6 from "@/public/images/about6.png";

function Gallery() {
    return (
        <Container>
            <h1 className="mb-8 text-2xl text-center md:text-4xl" >
                Project Media
            </h1>
            <section className='grid grid-cols-1 grid-rows-1 gap-4 py-8 md:grid-cols-3 '>
                <div className='w-full '>
                    <Image src={about1} alt="about1" className='rounded-[20px]' />
                </div>
                <div className='w-full '>
                    <Image src={about2} alt="about2" className='rounded-[20px]' />
                </div>
                <div className='w-full '>
                    <Image src={about3} alt="about3" className='rounded-[20px]' />
                </div>
                <div className='w-full '>
                    <Image src={about4} alt="about4" className='rounded-[20px]' />
                </div>
                <div className='w-full '>
                    <Image src={about5} alt="about5" className='rounded-[20px]' />
                </div>
                <div className='w-full '>
                    <Image src={about6} alt="about6" className='rounded-[20px]' />
                </div>
            </section>
        </Container>
    );
}

export default Gallery;