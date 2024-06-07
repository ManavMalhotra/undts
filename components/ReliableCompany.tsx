"use client"
import React from 'react'
import ClientCard from './ClientCard'
import Container from './Container';
import Carousel from './Carousel';

// import Carousel from 'react-multi-carousel'
// import "react-multi-carousel/lib/styles.css";

function ReliableCompany() {
    return (
        <Container className="">
            <section className="flex flex-wrap flex-col items-center text-left ">
                <h1 className="text-2xl md:text-4xl" >What do our client have to say ?</h1>

                <p className='pt-4 mb-8'>We prioritise safety across all our services</p>
            </section>
            <div className='flex flex-wrap justify-between gap-8 px-4'>
                <div className="">
                    <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />
                </div>
                <div className="">
                    <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />
                </div>
                <div className="">
                    <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />
                </div>

            </div>
        </Container>

    )
}

export default ReliableCompany