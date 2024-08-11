import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './Banner2.css';

import img1 from '../../../assets/Bannerimg/1.JPG';
import img2 from '../../../assets/Bannerimg/2.jpg';
import img3 from '../../../assets/Bannerimg/3.jpg';
import img4 from '../../../assets/Bannerimg/4.JPG';
import img5 from '../../../assets/Bannerimg/5.JPG';

const Banner2 = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      duration: 3000, // Duration of each slide
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000); // Time before auto-sliding to the next slide
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);

        slider.on("change", () => {
          const slides = slider.container.querySelectorAll('.keen-slider__slide');
          slides.forEach((slide, index) => {
            const text = slide.querySelector('.slide-text');
            if (text) {
              text.classList.remove('visible'); // Remove visibility from all texts
              if (index === slider.track.details.rel) {
                text.classList.add('visible'); // Add visibility to current slide
              }
            }
          });
        });
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src={img1} alt="Slide 1" />
        <div className="slide-text">
          <h2>Welcome to Our Company</h2>
          <p>We deliver quality services</p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src={img2} alt="Slide 2" />
        <div className="slide-text">
          <h2>Innovative Solutions</h2>
          <p>Leading the industry</p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src={img3} alt="Slide 3" />
        <div className="slide-text">
          <h2>Global Reach</h2>
          <p>Connecting the world</p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide4">
        <img src={img4} alt="Slide 4" />
        <div className="slide-text">
          <h2>Expert Team</h2>
          <p>Professional and dedicated</p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide5">
        <img src={img5} alt="Slide 5" />
        <div className="slide-text">
          <h2>Customer Focused</h2>
          <p>Your satisfaction is our priority</p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
