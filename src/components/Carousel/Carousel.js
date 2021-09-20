import React from 'react';
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.scss';

function Carousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,  
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "20px"
  };

  return(
    <>
    <Slider {...settings} dotsClass={styles.slick_dots}>
        <div className={styles.carousel}>
          <img src="images/img-carousel01.jpg" alt="캐로샐 1"/>
        </div>
        <div className={styles.carousel}>
          <img src="images/img-carousel02.jpg" alt="캐로샐 1"/>
        </div>
        <div className={styles.carousel}>
          <img src="images/img-carousel03.jpg" alt="캐로샐 1"/>
        </div>
        <div className={styles.carousel}>
          <img src="images/img-carousel04.jpg" alt="캐로샐 1"/>
        </div>
        
      </Slider>
    </>
  )
}

export default Carousel;