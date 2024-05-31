import React from 'react'
import Image from "next/image";
import client1 from "@/public/clients/Rectangle 120.png";
import client2 from "@/public/clients/Rectangle 121.png";
import client3 from "@/public/clients/Rectangle 122.png";
import client4 from "@/public/clients/Rectangle 123.png";
import client5 from "@/public/clients/Rectangle 124.png";
import client6 from "@/public/clients/Rectangle 125.png";
import client7 from "@/public/clients/Rectangle 126.png";

export default function Esteemed() {
    return (
        <section className="col-span-4 py-8 md:col-span-8">
            <h1 className="text-2xl text-center md:text-4xl" >
                Our Esteem Clients
            </h1>

            {/* show the images in a col */}
            <div className="grid items-center grid-cols-7 gap-4 mt-8 overflow-x-hidden">
                <div className="col-span-1">
                    <Image src={client1} alt="client1" />
                </div>
                <div className="col-span-1">
                    <Image src={client2} alt="client2" />
                </div>
                <div className="col-span-1">
                    <Image src={client3} alt="client3" />
                </div>
                <div className="col-span-1">
                    <Image src={client4} alt="client4" />
                </div>
                <div className="col-span-1">
                    <Image src={client5} alt="client5" />
                </div>
                <div className="col-span-1">
                    <Image src={client6} alt="client6" />
                </div>
                <div className="col-span-1">
                    <Image src={client7} alt="client7" />
                </div>
            </div>

        </section>
    )
}