
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import CertificationImg1 from "../../../assets/Certification/1.JPG";
import CertificationImg2 from "../../../assets/Certification/2.JPG";
import CertificationImg3 from "../../../assets/Certification/3.JPG";
import CertificationImg4 from "../../../assets/Certification/4.png";
import CertificationImg5 from "../../../assets/Certification/5.png";
import CertificationImg6 from "../../../assets/Certification/6.png";



const animation = { duration: 40000, easing: (t) => t }

const CertificationSlider = () => {

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 5,
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
        <div className="bg-white">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1 "><img src={CertificationImg1} alt="" /></div>
                <div className="keen-slider__slide number-slide1 "><img src={CertificationImg2} alt="" /></div>
                <div className="keen-slider__slide number-slide1 "><img src={CertificationImg3} alt="" /></div>
                <div className="keen-slider__slide number-slide1 "><img src={CertificationImg4} alt="" /></div>
                <div className="keen-slider__slide number-slide1 "><img src={CertificationImg5} alt="" /></div>
                <div className="keen-slider__slide number-slide1 "><img src={CertificationImg6} alt="" /></div>
            </div>
        </div>
    );
};

export default CertificationSlider;