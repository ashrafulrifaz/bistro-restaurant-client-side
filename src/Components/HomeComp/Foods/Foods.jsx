import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './foods.css'
import axios from 'axios';
import FoodsCard from './FoodsCard';

// import required modules

const Foods = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('items.json')
            .then(res => {
                setItems(res.data)
            })
    },[])

    return (
        <div className="py-10 text-center">
            <h3 className="text-[#D99904] italic">---From 11:00am to 10:00pm---</h3>
            <div className="inline-block py-2 px-10 my-4 border-t-2 border-b-2 border-[#E8E8E8]">
                <h2 className="text-2xl">ORDER ONLINE</h2>
            </div>
            <div className="mt-5">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    items && items.map((item,  idx) => 
                    <SwiperSlide key={idx}>
                        <FoodsCard item={item}></FoodsCard>
                    </SwiperSlide>
                    )
                }
                
            </Swiper>
            </div>
        </div>
    );
};

export default Foods;