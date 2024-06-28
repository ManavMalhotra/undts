import React from 'react'
import Container from './Container'

function Statistics() {
    const statistics = [
        { number: "232", label: "Clients", description: "UNDTS has been in business from 1984 and so far we have build tremendous value for our clients" },
        { number: "15", label: "Years", description: "UNDTS has been in business from 1984 and so far we have build tremendous value for our clients" },
        { number: "521", label: "Projects", description: "UNDTS has been in business from 1984 and so far we have build tremendous value for our clients" },
    ];

    return (
        <Container className="mx-0">
            <h1 className="text-3xl text-center md:text-4xl " >How we done so far</h1>

            <section className="flex flex-col gap-8 md:px-8 py-8 md:py-16 md:flex-row">
                {statistics.map((stat, index) => (
                    <div key={index} className="px-4 text-center">
                        <div className="flex items-center justify-center">
                            <h1 className="text-6xl md:text-8xl text-[#8F2D26]">{stat.number}</h1>
                            <h4 className="mt-4 text-xs font-semibold md:text-2xl">{stat.label}</h4>
                        </div>
                        <div className="mt-2">
                            <p className='text-xs md:text-sm font-medium'>
                                {stat.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </Container>
    )
}

export default Statistics