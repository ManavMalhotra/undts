"use client"
import React from 'react'
import ClientCard from './ClientCard'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";


function ReliableCompany() {
    return (
        <section className="col-span-8 py-8">

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 2000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <>
                    <section className="flex flex-col items-center text-left  ">
                        <h1 className="text-2xl md:text-4xl" >What do our client have to say ?</h1>

                        <p className='pt-4'>We prioritise safety across all our services</p>
                    </section>
                </>



                <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />
                <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />
                <ClientCard name={"Shrikant Madhav Vaidya"} designation={"CEO"} company={"Indian Oil"} />

            </Carousel>
        </section>

    )
}

export default ReliableCompany