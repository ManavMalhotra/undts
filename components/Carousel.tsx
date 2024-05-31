"use client"
// @ts-ignore
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import { PropsWithChildren, useEffect, useState } from "react";
import CarouselControls from "./CarouselControls";
import Dots from "./Dots";
import "./embla.css";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    // need to selectedIndex to allow this component to re-render in react.
    // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        function selectHandler() {
            const index = emblaApi?.selectedScrollSnap();
            setSelectedIndex(index || 0);
        }

        emblaApi?.on("select", selectHandler);
        // cleanup
        return () => {
            emblaApi?.off("select", selectHandler);
        };
    }, [emblaApi]);

    const length = React.Children.count(children);
    const canScrollNext = !!emblaApi?.canScrollNext();
    const canScrollPrev = !!emblaApi?.canScrollPrev();

    return (
        <>
            <div className="col-span-4 embla md:col-span-8" ref={emblaRef}>
                <div className=" embla__container" style={{
                }}>
                    {children}
                </div>
                <div className="flex justify-between ">
                    <Dots itemsLength={length} selectedIndex={selectedIndex} />
                    <CarouselControls
                        canScrollNext={canScrollNext}
                        canScrollPrev={canScrollPrev}
                        onNext={() => emblaApi?.scrollNext()}
                        onPrev={() => emblaApi?.scrollPrev()}
                        // @ts-ignore
                        options={options}
                        setSelectedIndex
                        className="z-10"
                    />
                </div>
            </div>
        </>
    );
};
export default Carousel;
