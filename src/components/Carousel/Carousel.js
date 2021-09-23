import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
  };

  return(
    <>
    <Slider {...settings} dotsClass={styles.slick_dots}>
      <div className={styles.carousel}>
        <Link to="/">
          <img src="images/img-carousel01.jpg" alt="캐로샐 1" className={styles.sm_only}/>
          <img src="images/img-carousel01-wide.jpg" alt="캐로샐 1" className={styles.sm_hidden}/>
        </Link>
      </div>
      <div className={styles.carousel}>
        <Link to="/">
          <img src="images/img-carousel02.jpg" alt="캐로샐 2" className={styles.sm_only}/>
          <img src="images/img-carousel02-wide.jpg" alt="캐로샐 2" className={styles.sm_hidden}/>
        </Link>
      </div>
      <div className={styles.carousel}>
        <Link to="/">
          <img src="images/img-carousel03.jpg" alt="캐로샐 3" className={styles.sm_only}/>
          <img src="images/img-carousel03-wide.jpg" alt="캐로샐 3" className={styles.sm_hidden}/>
        </Link>
      </div>
      <div className={styles.carousel}>
        <Link to="/">
          <img src="images/img-carousel04.jpg" alt="캐로샐 4" className={styles.sm_only}/>
          <img src="images/img-carousel04-wide.jpg" alt="캐로샐 4" className={styles.sm_hidden}/>
        </Link>
      </div>
    </Slider>
    </>
  )
}

export default Carousel;