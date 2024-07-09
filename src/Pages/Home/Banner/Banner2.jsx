
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import img1 from '../../../assets/Bannerimg/1.JPG';
import img2 from '../../../assets/Bannerimg/2.jpg';
import img3 from '../../../assets/Bannerimg/3.jpg';
import img4 from '../../../assets/Bannerimg/4.JPG';
import img5 from '../../../assets/Bannerimg/5.JPG';


const Banner2 = () => {

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 3000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    
    return (
        <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">   <img src={img1} /></div>
        <div className="keen-slider__slide number-slide2">   <img src={img2} /></div>
        <div className="keen-slider__slide number-slide3">   <img src={img3} /></div>
        <div className="keen-slider__slide number-slide4">   <img src={img4} /></div>
        <div className="keen-slider__slide number-slide5">   <img src={img5} /></div>
      </div>
    );
};

export default Banner2;