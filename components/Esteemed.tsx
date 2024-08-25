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

    const companies = [
        { no: 1, name: "BPCL", code: "359016" },
        { no: 2, name: "IOCL", code: "11995178" },
        { no: 3, name: "Gail Gas", code: "U101002111" },
        { no: 4, name: "GEECL Asansol", code: "401883" },
        { no: 5, name: "IOSL", code: "2BB10176" },
        { no: 6, name: "IOAG", code: "189991" },
        { no: 7, name: "Government eMarketplace (GeM)", code: "@VA-120723142335605" },
        { no: 8, name: "PDIL", code: "Paper Attached" },
        { no: 9, name: "BORL", code: "SRP/001109/2021" },
        { no: 10, name: "Mecon", code: "6523" },
    ];



    return (
        <Container className="">
            <h1 className="mb-8 text-2xl text-center md:text-4xl" >
                Our esteemed clients
            </h1>

            <div className="mt-16 marquee">
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

            <div className="mt-16 overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300"
                    style={{
                        "borderSpacing": 0,
                        "borderCollapse": "separate",
                        "borderRadius": "10px",
                        "border": "1px solid black",
                        "overflow": "hidden",
                    }}
                >
                    <thead>
                        <tr className="text-white bg-[#8F2D26]">
                            <th className="px-2 py-4 pr-4 text-left md:px-4">No</th>
                            <th className="px-2 py-2 text-left md:px-4">Name of the Company</th>
                            <th className="px-2 py-2 text-left md:px-4">Vendor Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company) => (
                            <tr key={company.no} className="border-t border-gray-300">
                                <td className="px-2 py-2 text-left md:px-4">{company.no + "."}  </td>
                                <td className="px-2 py-2 text-left md:px-4">{company.name}</td>
                                <td className="px-2 py-2 text-left md:px-4">{company.code}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </Container >
    )
}