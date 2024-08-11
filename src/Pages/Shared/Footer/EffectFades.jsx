
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import './EffectFades.css';

// Import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

import imgeFooter1 from '../../../assets/Footerimg/1.jpg';
import imgeFooter2 from '../../../assets/Footerimg/2.jpeg';
import imgeFooter3 from '../../../assets/Footerimg/3.jpeg';
import imgeFooter4 from '../../../assets/Footerimg/4.jpeg';
import imgeFooter5 from '../../../assets/Footerimg/5.jpeg';

const EffectFades = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect="fade"
        autoplay={{
          delay: 4000, // Set delay to 1 second
          disableOnInteraction: false, // Autoplay continues after interaction
        }}
        modules={[EffectFade,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <img className='' src={imgeFooter1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgeFooter2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgeFooter3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgeFooter4} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgeFooter5} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default EffectFades;
