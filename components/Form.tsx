"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Container from './Container';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useRef } from 'react';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa6';

interface FormComponentProps {
    showDownload?: boolean;
}

const FormComponent = ({ showDownload = true }: FormComponentProps) => {
    const form = useRef(null);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            country: '',
            phoneNumber: '',
            company: '',
            industry: '',
            requirement: '',
            services: [],
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            country: Yup.string().required('Country is required'),
            phoneNumber: Yup.string().required('Phone Number is required'),
            company: Yup.string().required('Company is required'),
            industry: Yup.string().required('Industry is required'),
            requirement: Yup.string().required('Requirement is required'),
        }),
        onSubmit: async (values) => {
            try {
                let data = new FormData();
                // Check if values is not empty and is an object
                if (values && typeof values === 'object') {
                    // Iterate over the values object and append each key-value pair to the FormData
                    Object.keys(values).forEach(key => {
                        // @ts-ignore
                        data.append(key, values[key]);
                    });
                }

                const action = "https://script.google.com/macros/s/AKfycbyrm09hGYcvFfRisKPuxFZpz7XUu1Qg_ygxVSOSu-RAEWMAt9EU4jEwWEy_TCIukJ2lUg/exec";

                console.log(data);
                console.log("values", values);

                // Send the FormData object
                await fetch(action, {
                    method: "POST",
                    body: data
                });

                console.log(data);
                alert('Form submitted successfully!');
            } catch (error) {
                console.error('Error submitting form', error);
                alert('Failed to submit form');
            }
        },
    });

    const services = [
        "Soil Resistively",
        "Supply of Materials",
        "Pin Brazing with complete accessories",
        "P.S.P Monitoring",
        "CIPL Survey Equipment",
        "Pipeline Defect Mapper (PDM)",
    ];

    return (
        <Container className="flex flex-col" id="contact-us">
            <div className="flex flex-col gap-4 md:flex-row md:space-x-8">
                {/* Left Side */}
                <div className="mb-8 md:w-2/5 md:mb-0">
                    <h2 className="mb-8 text-2xl md:text-5xl">We are here to help you get started</h2>
                    {
                        showDownload &&
                        (<div className='mb-12'>
                            <Link href="/" className="flex items-center justify-center w-full gap-4 px-8 py-4 text-lg font-semibold text-[#F4F4F4] bg-black rounded-full">
                                <h3 className='text-lg md:text-2xl text-nowrap'>
                                    Download Company Profile
                                </h3>
                                <FaArrowDown />
                            </Link>
                        </div>)
                    }

                    <p className="mb-4 text-xs md:text-lg">Select the interested services <span className="text-red-500 imp">&#42;</span> below:</p>
                    <ul className="space-y-2">
                        {services.map(service => (
                            <div className='flex gap-2' key={service}>
                                <input
                                    type="checkbox"
                                    value={service}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue('services', [...formik.values.services, service]);
                                        } else {
                                            formik.setFieldValue('services', formik.values.services.filter(s => s !== service));
                                        }
                                    }}
                                    className="w-6 h-auto checkbox"
                                />
                                <p className='p-viewport'>{service}</p>
                            </div>
                        ))}
                    </ul>
                </div>

                {/* Right Side */}
                <div className="md:w-3/5">
                    <form
                        ref={form}
                        onSubmit={formik.handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block font-medium text-gray-700">
                                    Full Name<span className="text-red-500 imp">&#42;</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="e.g. Nikhil"
                                    onChange={formik.handleChange}
                                    value={formik.values.fullName}
                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                />
                                {formik.touched.fullName && formik.errors.fullName ? (
                                    <div className="text-red-600">{formik.errors.fullName}</div>
                                ) : null}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block font-medium text-gray-700">
                                    Email Id<span className="text-red-500 imp">&#42;</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="e.g. Nikhil@undts.com"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-600">{formik.errors.email}</div>
                                ) : null}
                            </div>

                            {/* Country */}
                            <div>
                                <label htmlFor="country" className="block font-medium text-gray-700">
                                    Country<span className="text-red-500 imp">&#42;</span>
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    placeholder="e.g. India"
                                    onChange={formik.handleChange}
                                    value={formik.values.country}
                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                />
                                {formik.touched.country && formik.errors.country ? (
                                    <div className="text-red-600">{formik.errors.country}</div>
                                ) : null}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phoneNumber" className="block font-medium text-gray-700">
                                    Phone Number<span className="text-red-500 imp">&#42;</span>
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-red-500 focus-within:border-red-500">
                                    <PhoneInput
                                        defaultCountry="in"
                                        value={formik.values.phoneNumber}
                                        onChange={(value, countryData) => formik.setFieldValue('phoneNumber', value)}
                                        inputClassName="block w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                        inputStyle={{
                                            border: 'none',
                                            outline: 'none',
                                            width: '100%',
                                            fontSize: '100%',
                                        }}
                                    />
                                </div>
                                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                    <div className="text-red-600">{formik.errors.phoneNumber}</div>
                                ) : null}
                            </div>

                            {/* Company */}
                            <div>
                                <label htmlFor="company" className="block font-medium text-gray-700">
                                    Company<span className="text-red-500 imp">&#42;</span>
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="e.g. Indian Oil"
                                    onChange={formik.handleChange}
                                    value={formik.values.company}
                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                />
                                {formik.touched.company && formik.errors.company ? (
                                    <div className="text-red-600">{formik.errors.company}</div>
                                ) : null}
                            </div>

                            {/* Industry */}
                            <div>
                                <label htmlFor="industry" className="block font-medium text-gray-700">
                                    Industry<span className="text-red-500 imp">&#42;</span>
                                </label>
                                <input
                                    type="text"
                                    id="industry"
                                    name="industry"
                                    placeholder="e.g. Oil & Gas"
                                    onChange={formik.handleChange}
                                    value={formik.values.industry}
                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                />
                                {formik.touched.industry && formik.errors.industry ? (
                                    <div className="text-red-600">{formik.errors.industry}</div>
                                ) : null}
                            </div>
                        </div>

                        {/* Requirement */}
                        <div>
                            <label htmlFor="requirement" className="block font-medium text-gray-700">
                                Requirement<span className="text-red-500 imp">&#42;</span>
                            </label>
                            <textarea
                                id="requirement"
                                name="requirement"
                                rows={4}
                                placeholder="Write your requirement..."
                                onChange={formik.handleChange}
                                value={formik.values.requirement}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            />
                            {formik.touched.requirement && formik.errors.requirement ? (
                                <div className="text-red-600">{formik.errors.requirement}</div>
                            ) : null}
                        </div>

                        <div className="text-sm text-gray-500">
                            72% of business owners who submit their requirements get a call back in approximately 4 hours.
                        </div>

                        <div className="flex items-center">
                            <input
                                id="updates"
                                name="updates"
                                type="checkbox"
                                onChange={formik.handleChange}
                                // @ts-ignore
                                checked={formik.values.updates}
                                className="w-4 h-4 text-red-600 border-gray-300 rounded"
                            />
                            <label htmlFor="updates" className="block ml-2 text-sm text-gray-900">
                                I agree to receive updates from undts
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-sm font-medium text-white bg-[#8F2D26] border border-transparent rounded-3xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                Request a call back
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container >
    );
};

export default FormComponent;
