import React from 'react'
import Image from "next/image";

import client1 from "@/public/clients/Rectangle 120.png";
import client2 from "@/public/clients/Rectangle 121.png";
import client3 from "@/public/clients/Rectangle 122.png";
import client4 from "@/public/clients/Rectangle 123.png";
import client5 from "@/public/clients/Rectangle 124.png";
import client6 from "@/public/clients/Rectangle 125.png";
import client7 from "@/public/clients/Rectangle 126.png";

import Container from './Container';

export default function Esteemed() {
    return (
        <Container className="">
            <h1 className="text-2xl text-center mb-8 md:text-4xl" >
                Our Esteem Clients
            </h1>

            <div className="marquee">
                <div className="marquee-content">
                    <div className="marquee-item">
                        <Image src={client1} alt="client1" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client2} alt="client2" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client3} alt="client3" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client4} alt="client4" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client5} alt="client5" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client6} alt="client6" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client7} alt="client7" />
                    </div>

                    {/* Duplicate the images for the seamless loop effect */}
                    <div className="marquee-item">
                        <Image src={client1} alt="client1" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client2} alt="client2" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client3} alt="client3" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client4} alt="client4" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client5} alt="client5" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client6} alt="client6" />
                    </div>
                    <div className="marquee-item">
                        <Image src={client7} alt="client7" />
                    </div>

                </div>
            </div>
        </Container >
    )
}