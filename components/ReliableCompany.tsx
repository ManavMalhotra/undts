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
            <section className="flex flex-col items-center text-left  ">
                <h1 className="text-2xl md:text-4xl" >What do our client have to say ?</h1>

                <p className='pt-4'>We prioritise safety across all our services</p>
            </section>
            <Carousel>
                <div className="embla__slide">
                    <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />
                </div>
                <div className="embla__slide">
                    <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />
                </div>
                <div className="embla__slide">
                    <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />
                </div>

            </Carousel>
        </Container>

    )
}

export default ReliableCompany