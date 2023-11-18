import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => {
                setReviews(res.data)
            })
    },[])

    return (
        <div className="py-10">
            <div className="text-center">
                <h3 className="text-[#D99904] italic">---What our client say---</h3>
                <div className="inline-block py-2 px-10 my-4 border-t-2 border-b-2 border-[#E8E8E8]">
                    <h2 className="text-2xl uppercase">Testimonials</h2>
                </div>
            </div>            
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    reviews && reviews.map((review,  idx) => 
                    <SwiperSlide key={idx}>
                        <TestimonialCard review={review}></TestimonialCard>
                    </SwiperSlide>
                    )
                }                
            </Swiper>
        </div>
    );
};

export default Testimonials;