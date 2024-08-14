import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './Banner2.css';
import { motion,useAnimation  } from 'framer-motion';

import img1 from '../../../assets/Bannerimg/1.JPG';
import img2 from '../../../assets/Bannerimg/2.jpg';
import img3 from '../../../assets/Bannerimg/3.jpg';
import img4 from '../../../assets/Bannerimg/4.JPG';
import img5 from '../../../assets/Bannerimg/5.JPG';
import { useEffect, useState } from "react";

const Banner2 = () => {

// Animation variants for each slide111
const slide1Variant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const slide2Variant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const slide3Variant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};



  const [sliderRef, slider] = useKeenSlider(
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (slider.current) {
      controls.start('visible');
      slider.current.on('slideChanged', (s) => {
        setCurrentSlide(s.track.details.rel);
        controls.start('visible');
      });
    }
  }, [slider,controls]);

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src={img1} alt="Slide 1" />
        <motion.div className="slide-text slide-text-left"
         key={currentSlide === 0 ? 'slide-1' : ''}
         initial="hidden"
         animate={currentSlide === 0 ? controls : 'visible'}
         variants={slide1Variant}
         transition={{ duration: 1,delay:0 }}
        >
          <h2>Welcome to Our Company</h2>
          <p>We deliver quality services</p>
        </motion.div>
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src={img2} alt="Slide 2" />
        <motion.div className="slide-text slide-text-left"
          key={currentSlide === 1 ? 'slide-1' : ''}
          initial="hidden"
          animate={currentSlide === 1 ? controls : 'visible'}
          variants={slide2Variant}
          transition={{ duration: 1,delay:0 }}
        >
          <h2>Innovative Solutions</h2>
          <p>Leading the industry</p>
        </motion.div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src={img3} alt="Slide 3" />
        <motion.div className="slide-text slide-text-left"
         key={currentSlide === 2 ? 'slide-2' : ''}
         initial="hidden"
         animate={currentSlide === 2 ? controls : 'visible'}
         variants={slide3Variant}
         transition={{ duration: 1,delay:0 }}
        >
          <h2>Global Reach</h2>
          <p>Connecting the world</p>
        </motion.div>
      </div>
      <div className="keen-slider__slide number-slide4">
        <img src={img4} alt="Slide 4" />
        <motion.div className="slide-text slide-text-left"
          key={currentSlide === 3 ? 'slide-3' : ''}
          initial="visible"
          animate={currentSlide === 3 ? controls : 'hidden'}
          variants={slide2Variant}
          transition={{ duration: 1,delay:0 }}
        >
          <h2>Expert Team</h2>
          <p>Professional and dedicated</p>
        </motion.div>
      </div>
      <div className="keen-slider__slide number-slide5">
        <img src={img5} alt="Slide 5" />
        <motion.div className="slide-text slide-text-left"
          key={currentSlide === 4 ? 'slide-4' : ''}
          initial="hidden"
          animate={currentSlide === 4 ? controls : 'visible'}
          variants={slide3Variant}
          transition={{ duration: 1}}
        >
          <h2>Customer Focused</h2>
          <p>Your satisfaction is our priority</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner2;
