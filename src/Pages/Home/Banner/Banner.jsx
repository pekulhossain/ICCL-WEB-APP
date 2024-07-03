import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/Bannerimg/1.JPG';
import img2 from '../../../assets/Bannerimg/2.jpg';
import img3 from '../../../assets/Bannerimg/3.jpg';
import img4 from '../../../assets/Bannerimg/4.JPG';
import img5 from '../../../assets/Bannerimg/5.JPG';


const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={img1} />
            </div>
            <div>
               <img src={img2} />
            </div>
            <div>
            <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
        </Carousel>
    );
};

export default Banner;