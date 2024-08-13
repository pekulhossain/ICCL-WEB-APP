
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./Customer.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Clientsimg1 from "../../../../assets/Clients/JDY.JPG";
import Clientsimg2 from "../../../../assets/Clients/2.png";
import Clientsimg3 from "../../../../assets/Clients/3.jpg";



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

                    <SwiperSlide><img className='w-8 h-4' src={Clientsimg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-8 h-4' src={Clientsimg2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-8 h-4' src={Clientsimg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-8 h-4' src={Clientsimg3} alt="" /></SwiperSlide>
                   

                </div>

            </Swiper>

        </div>
    );
};

export default Customerslide;