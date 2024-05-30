import React from 'react'

function Form() {
    return (
        <section className="col-span-8 flex flex-col px-8 py-8 md:px-16">

            <h1 className="text-2xl">We are here to help you get started</h1>

            <form className="">
                <div className="flex flex-wrap mb-4">
                    <input type="checkbox" className="mr-4" />
                    <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
                </div>
                <div className="flex flex-wrap mb-4">
                    <input type="checkbox" className="mr-4" />
                    <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
                </div>
                <div className="flex flex-wrap mb-4">
                    <input type="checkbox" className="mr-4" />
                    <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
                </div>
                <div className="flex flex-wrap mb-4">
                    <input type="checkbox" className="mr-4" />
                    <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
                </div>
                <div className="flex flex-wrap mb-4">
                    <input type="checkbox" className="mr-4" />
                    <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
                </div>
                <div className="flex flex-wrap mb-4">
                    <input type="checkbox" className="mr-4" />
                    <label htmlFor="soilResistivity" className="label">Soil Resistively</label>
                </div>
                <label htmlFor="fullName" className="label">Full Name</label>
                <input
                    id="fullName"
                    type="text"
                    placeholder="eg: Nikhil"
                    className="px-4 py-1 border border-gray-300 border-solid rounded-md"
                />
                <label htmlFor="emailId" className="label">Email Id</label>
                <input
                    id="emailId"
                    type="email"
                    placeholder="eg: nikhil@gmail.com"
                    className="px-4 py-1 border border-gray-300 border-solid rounded-md"
                />
                <label htmlFor="country" className="label">Country</label>
                <input
                    id="country"
                    type="text"
                    placeholder="eg: nikhil@gmail.com"
                    className="px-4 py-1 border border-gray-300 border-solid rounded-md"
                />
                <label htmlFor="phoneNumber" className="label">Phone Number</label>
                <input
                    id="phoneNumber"
                    type="number"
                    placeholder="eg: nikhil@gmail.com"
                    className="px-4 py-1 border border-gray-300 border-solid rounded-md"
                />
                <label htmlFor="requirement" className="label">Requirement</label>
                <textarea
                    id="requirement"
                    placeholder="Write your requirements"
                    className="px-4 py-1 border border-gray-300 border-solid rounded-md"
                />
            </form>

        </section>
    )
}

export default Form