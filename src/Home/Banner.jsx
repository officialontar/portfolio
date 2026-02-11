import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../assets/WhatsApp Image 2025-07-06 at 3.53.43 PM.jpeg';
import img2 from '../assets/bgfresshwihtbg.jpg';
import img3 from '../assets/image.png';
import img4 from '../assets/meitPark.jpeg';
import img5 from '../assets/nadiya.png';
import img6 from '../assets/WhatsApp Image 2025-07-06 at 3.55.44 PM.jpeg';

const Banner = () => {
    return (
        <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={3000}
        >
            {[img1, img2, img3, img4, img5, img6].map((img, index) => (
                <div key={index}>
                    <img
                        src={img}
                        alt={`banner-${index}`}
                        className="w-full h-[500px] object-cover"
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;

//  import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import img1 from '../assets/WhatsApp Image 2025-07-06 at 3.53.43 PM.jpeg';
// import img2 from '../assets/bgfresshwihtbg.jpg';
// import img3 from '../assets/image.png';
// import img4 from '../assets/meitPark.jpeg';
// import img5 from '../assets/nadiya.png';
// import img6 from '../assets/WhatsApp Image 2025-07-06 at 3.55.44 PM.jpeg';

// const Banner = () => {
//     const images = [img1, img2, img3, img4, img5, img6];

//     return (
//         <div className="w-full h-screen">
//             <Carousel
//                 showThumbs={false}
//                 showStatus={false}
//                 autoPlay
//                 infiniteLoop
//                 interval={3000}
//                 swipeable
//                 emulateTouch
//             >
//                 {images.map((img, index) => (
//                     <div key={index} className="w-full h-screen">
//                         <img
//                             src={img}
//                             alt={`banner-${index}`}
//                             className="w-full h-screen object-cover"
//                         />
//                         {/* Optional caption */}
//                         {/* <p className="legend">Slide {index + 1}</p> */}
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default Banner;
