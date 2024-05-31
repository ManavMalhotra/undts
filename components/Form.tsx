import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

function Form() {
    return (
        <section className="container flex flex-col col-span-8 px-4 px-8 py-8 mx-auto md:px-16">

            <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Left Side */}
                <div className="mb-8 md:w-1/2 md:mb-0">
                    <h2 className="mb-4 text-4xl font-bold">We are here to help you get started</h2>
                    <p className="mb-4">Select the interested services* below:</p>
                    <ul className="space-y-2">
                        {[
                            "Soil Resistively",
                            "Supply of Materials",
                            "Pin Brazing with complete accessories",
                            "P.S.P Monitoring",
                            "CIPL Survey Equipment",
                            "Pipeline Defect Mapper (PDM)"
                        ].map(service => (
                            <li key={service} className="flex items-center">
                                <FaCheckCircle className="mr-2 text-red-600" />
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side */}
                <div className="md:w-1/2">
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                    Full Name*
                                </label>
                                <input type="text" id="fullName" name="fullName" placeholder="e.g. Nikhil" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Id*
                                </label>
                                <input type="email" id="email" name="email" placeholder="e.g. Nikhil@undts.com" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country*
                                </label>
                                <input type="text" id="country" name="country" placeholder="e.g. India" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                    Phone Number*
                                </label>
                                <div className="flex">
                                    <select className="block px-3 py-2 mt-1 mr-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm">
                                        <option>+91</option>
                                        {/* Add other country codes as needed */}
                                    </select>
                                    <input type="text" id="phoneNumber" name="phoneNumber" placeholder="e.g. 9430687259" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Company*
                                </label>
                                <input type="text" id="company" name="company" placeholder="e.g. Indian Oil" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                                    Industry*
                                </label>
                                <input type="text" id="industry" name="industry" placeholder="e.g. Oil & Gas" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="requirement" className="block text-sm font-medium text-gray-700">
                                Requirement*
                            </label>
                            <textarea id="requirement" name="requirement" rows={4} placeholder="Write your requirement..." className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"></textarea>
                        </div>
                        <div className="text-sm text-gray-500">72% of business owners who submit their requirements get a call back in approximately 4 hours.</div>
                        <div className="flex items-center">
                            <input id="updates" name="updates" type="checkbox" className="w-4 h-4 text-red-600 border-gray-300 rounded" />
                            <label htmlFor="updates" className="block ml-2 text-sm text-gray-900">I agree to receive updates from undts</label>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-6 py-3 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                Request a call back
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Form