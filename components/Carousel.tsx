"use client"
// @ts-ignore
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import { PropsWithChildren, useEffect, useState } from "react";
import CarouselControls from "./CarouselControls";
// import Dots from "./Dots";
import "./embla.css";
import classNames from "classnames";

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
                <div className="flex justify-between relative bottom-[6vh] md:mx-16 mx-[1vh] ">
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

type DotProps = {
    itemsLength: number;
    selectedIndex: number;
};
const Dots = ({ itemsLength, selectedIndex }: DotProps) => {
    const arr = new Array(itemsLength).fill(0);
    return (
        <div className="flex justify-center gap-1 md:my-2">
            {arr.map((_, index) => {
                const selected = index === selectedIndex;
                return (
                    <div
                        className={classNames({
                            "h-2 w-2 rounded-full transition-all duration-300 bg-white mx-1":
                                true,
                            // tune down the opacity if slide is not selected
                            "opacity-50": !selected,
                            "w-8": selected,
                        })}
                        key={index}
                    ></div>
                );
            })}
        </div>
    );
};

export default Carousel;
