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
            <section className="flex flex-col items-center mb-8 text-left ">
                <h1 className="text-2xl md:text-4xl" >Testimonials</h1>

                {/* <p className='pt-4 '>We prioritise safety across all our services</p> */}
            </section>
            <div className='flex flex-wrap justify-between gap-8 px-4 md:flex-nowrap'>
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