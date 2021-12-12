import React  from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './DetailCarousel.module.scss';



function Carousel(){

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,  
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    <>
    <Slider {...settings} dotsClass={styles.slick_dots} className={styles.sm_only}>
      <div className={styles.carousel}>
        <img src="../images/img-product01.jpg" alt="캐로샐 1" className={styles.sm_only}/>
      </div>
      <div className={styles.carousel}>
          <img src="../images/img-product02.jpg" alt="캐로샐 2" className={styles.sm_only}/>
      </div>
      <div className={styles.carousel}>
          <img src="../images/img-product03.jpg" alt="캐로샐 3" className={styles.sm_only}/>
      </div>
      <div className={styles.carousel}>
          <img src="../images/img-product04.jpg" alt="캐로샐 4" className={styles.sm_only}/>
      </div>
    </Slider>
    </>
  )
}

export default Carousel;