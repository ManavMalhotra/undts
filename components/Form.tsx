"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Container from './Container';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const FormComponent = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            country: '',
            phoneNumber: '',
            company: '',
            industry: '',
            requirement: '',
            updates: false,
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
                await axios.post('/api/form', values);
                console.log(values)
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
        <Container className="flex flex-col">
            <div className="flex flex-col md:flex-row md:space-x-8 gap-4">
                {/* Left Side */}
                <div className="mb-8 md:w-2/5 md:mb-0">
                    <h2 className="mb-4 md:text-5xl text-2xl">We are here to help you get started</h2>
                    <p className="mb-4 md:text-lg text-xs">Select the interested services* below:</p>
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
                                    className="w-4 h-auto checkbox"
                                />
                                <p className='p-viewport'>{service}</p>
                            </div>
                        ))}
                    </ul>
                </div>

                {/* Right Side */}
                <div className="md:w-3/5">
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block font-medium text-gray-700">
                                    Full Name*
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
                                    Email Id*
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
                                    Country*
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
                                    Phone Number*
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
                                    buttonStyle={{
                                        background: 'none',
                                        border: 'none',
                                        outline: 'none',
                                        margin: 0,
                                        padding: '0.75rem',
                                    }}
                                    dropdownStyle={{
                                        borderRadius: '0.375rem',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                        marginTop: '0.25rem',
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
                                    Company*
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
                                    Industry*
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
                                Requirement*
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
        </Container>
    );
};

export default FormComponent;
