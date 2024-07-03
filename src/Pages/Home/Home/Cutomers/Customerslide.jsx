
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./Customer.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Clientsimg from "../../../../assets/Clients/JDY.JPG";


const Customerslide = () => {
    return (
        <div className=''>
            <Swiper
                loop={true}
                speed={1500}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwipe"
            >
                <div className=''>

                    <SwiperSlide><img className='w-8 h-4' src={Clientsimg} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-8 h-4' src={Clientsimg} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-8 h-4' src={Clientsimg} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-8 h-4' src={Clientsimg} alt="" /></SwiperSlide>

                </div>

            </Swiper>

        </div>
    );
};

export default Customerslide;