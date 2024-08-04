import React, { useEffect, useState } from 'react';
import './App.css';
import k1 from '/images/k1.jpeg';
import k2 from '/images/k2.jpeg';
import k3 from '/images/k3.jpeg';
import k4 from '/images/k4.jpeg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    return (
        <div>
            {windowWidth <= 600 ? (

                <Carousel className="image-slider" showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                    <div>
                        <img src={k1} alt="Photo1" ></img>
                    </div>
                    <div>
                        <img src={k2} alt="Photo2" ></img>
                    </div>
                    <div>
                        <img src={k3} alt="Photo3" ></img>
                    </div>
                    <div>
                        <img src={k4} alt="Photo4" ></img>
                    </div>
                </Carousel>

            ) : (<div className='image-container'>
                <img className="responsive-image" src={k1} alt="Photo1" ></img>
                <img className="responsive-image" src={k2} alt="Photo2" ></img>
                <img className="responsive-image" src={k3} alt="Photo3" ></img>
                <img className="responsive-image" src={k4} alt="Photo4" ></img>
            </div>
            )}

        </div>

    );
};

export default ImageSlider;
