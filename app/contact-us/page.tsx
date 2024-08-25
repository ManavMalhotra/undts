import React from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import office from "@/public/images/undts_office.png"
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import Form from "@/components/Form";

function page() {
    return (

        <Container>
            <section className='flex flex-col justify-between md:flex-row'>
                <div className='flex-1'><h1 className='text-2xl md:text-6xl'>Contact Us</h1></div>
                <div className='flex-1'><p className='text-sm md:text-xl'>We introduce ourselves as one of the reputed construction companies in India having registered office in Bihar and carrying out business in the following hi-tech engineering fields.</p></div>
            </section>

            <Form showDownload={false} />

        </Container>

    )
}

export default page