import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

import "./TestmonialCard.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import { Autoplay, Navigation } from "swiper/modules";

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('Review.json')
            .then(res => res.json())
            .then((data) => setReviews(data))
    }, [])

    return (
        <section className="py-28 bg-slate-100">
            <SectionTitle subHeading={"WHAT PEOPLE SAY ABOUT US"}
                heading={"Our Testimonial"}
                Paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
            </SectionTitle>
            <Swiper navigation={true}
            speed={1500}
             slidesPerView={2}
              modules={[Navigation,Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
               className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="items-center gap-2 mx-20 my-16">

                            <figure className="testimonial_card h-auto bg-pink-500 text-white">
                                <blockquote className="text-white">{review.details} </blockquote>
                                <div className="author">
                                    <img src={review.image} alt="sq-sample1" />
                                    <p className="text-white">{review.name}</p>
                                </div>
                            </figure>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>


        </section>
    );
};

export default Testimonial;