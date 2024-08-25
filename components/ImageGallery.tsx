// @ts-nocheck
"use client"
import React, { useEffect, useState } from 'react';
import LightGallery from 'lightgallery/react';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Import LightGallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import Image from 'next/image';

const SkeletonLoader = () => (
    <>
        {[...Array(9)].map((_, index) => (
            <div key={index} className="bg-gray-200 animate-pulse rounded-xl h-[340px] w-[480px]"></div>
        ))}
    </>
);

interface ImageGalleryProps {
    categories: string[];
    images: { src: string, category: string, alt: string }[];
}

export default function ImageGallery({ categories, images }: ImageGalleryProps) {

    const [category, setCategory] = useState(categories[0]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [animate, setAnimate] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [filteredImages]);

    useEffect(() => {
        setAnimate(true);
        const filtered = category === 'all'
            ? images
            : images.filter(image => image.category === category);
        setFilteredImages(filtered);

        const timer = setTimeout(() => setAnimate(false), 100); // Reset animation state
        return () => clearTimeout(timer); // Clean up the timeout
    }, [category]);



    const handleFilterChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div>
            {/* Filter buttons */}
            <div className="flex justify-center gap-2 my-16">
                {
                    categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`text-2xl px-6 py-1  capitalize rounded-3xl ${category === cat ? 'bg-[#8F2D26] text-white' : 'bg-[#FFEEED] text-[#8F2D26]'}`}
                            onClick={() => handleFilterChange(cat)}
                        >
                            {cat}
                        </button>
                    ))
                }
            </div>

            {/* Image Grid */}
            <div className="mt-5 image-grid">
                <LightGallery speed={500} plugins={[lgZoom, lgThumbnail]} download={false}>
                    {
                        loading ?
                            <SkeletonLoader /> :
                            filteredImages.map((image, index) => (
                                <a href={image.src} key={index}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={500}
                                        height={500}
                                        className={`object-cover w-full h-auto transition-transform duration-500 ease-in-out transform rounded-xl hover:scale-105 image-item ${animate ? 'fade-in' : ''}`}
                                        loading="lazy"
                                    />
                                </a>
                            ))}
                </LightGallery>
            </div>
        </div >
    );

}