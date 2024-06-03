import React from 'react'
import Container from './Container'

function Statistics() {
    return (
        <Container className="">
            <h1 className="text-3xl text-center md:text-4xl " >How we done so far</h1>

            <section className="flex flex-col gap-8 px-8 py-16 md:flex-row">
                <div className="px-4 text-center">
                    <div className="flex items-start justify-center">
                        <h1 className="text-6xl md:text-8xl text-[#8F2D26]">232</h1>
                        <h4 className="mt-4 text-xs font-semibold md:text-2xl">Clients</h4>
                    </div>
                    <div className="mt-2">
                        <p className='text-xs md:text-sm font-medium'>
                            UNDTS has been in business from 1984 and so far we have build tremendous value for our clients
                        </p>
                    </div>
                </div>
                <div className="px-4 text-center">
                    <div className="flex items-start justify-center">
                        <h1 className="text-6xl md:text-8xl text-[#8F2D26]">15</h1>
                        <h4 className="mt-4 text-xs font-semibold md:text-2xl">Years</h4>
                    </div>
                    <div className="mt-2">
                        <p className='text-xs md:text-sm font-medium'>
                            UNDTS has been in business from 1984 and so far we have build tremendous value for our clients
                        </p>
                    </div>
                </div>
                <div className="px-4 text-center">
                    <div className="flex items-start justify-center">
                        <h1 className="text-6xl md:text-8xl text-[#8F2D26]">521</h1>
                        <h4 className="mt-4 text-xs font-semibold md:text-2xl">Projects</h4>
                    </div>
                    <div className="mt-2">
                        <p className='text-xs md:text-sm font-medium'>
                            UNDTS has been in business from 1984 and so far we have build tremendous value for our clients
                        </p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Statistics