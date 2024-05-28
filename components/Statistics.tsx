import React from 'react'

function Statistics() {
    return (
        <section className="px-8 py-8 md:px-16">
            <h1 className="text-2xl text-center md:text-4xl " >How we done so far</h1>

            <section className="flex flex-col gap-8 md:flex-row px-16 py-16">
                <div className="text-center px-8">
                    <div className="flex justify-center">
                        <h1 className="text-8xl">232</h1>
                        <h4 className="mt-4">Clients</h4>
                    </div>
                    <div className="mt-2">
                        <p>
                            UNDTS has been in business from 1984 and so far we have build tremendous value for our clients
                        </p>
                    </div>
                </div>
                <div className="text-center px-8">
                    <div className="flex justify-center">
                        <h1 className="text-8xl">15</h1>
                        <h4 className="mt-4">Years</h4>
                    </div>
                    <div className="mt-2">
                        <p>
                            UNDTS has been in business from 1984 and so far we have build tremendous value for our clients
                        </p>
                    </div>
                </div>
                <div className="text-center px-8">
                    <div className="flex justify-center">
                        <h1 className="text-8xl">521</h1>
                        <h4 className="mt-4">Projects</h4>
                    </div>
                    <div className="mt-2">
                        <p>
                            UNDTS has been in business from 1984 and so far we have build tremendous value for our clients
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Statistics