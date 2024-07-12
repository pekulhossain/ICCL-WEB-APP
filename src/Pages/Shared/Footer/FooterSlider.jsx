import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import footimg1 from "../../../assets/Footerimg/1.jpg";
import footimg2 from "../../../assets/Footerimg/2.jpeg";
import footimg3 from "../../../assets/Footerimg/3.jpeg";
import footimg4 from "../../../assets/Footerimg/4.jpeg";
import footimg5 from "../../../assets/Footerimg/5.jpeg";


const animation = { duration: 40000, easing: (t) => t }

const FooterSlider = () => {

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 1,
            spacing: 15,
          },
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })

    return (
        <div className=" w-52">
            <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1 "><img src={footimg1} alt="" /></div>
            <div className="keen-slider__slide number-slide1 "><img src={footimg2} alt="" /></div>
            <div className="keen-slider__slide number-slide1 "><img src={footimg3} alt="" /></div>
            <div className="keen-slider__slide number-slide1 "><img src={footimg4} alt="" /></div>
            <div className="keen-slider__slide number-slide1 "><img src={footimg5} alt="" /></div>


        </div>
        </div>
    );
};

export default FooterSlider;