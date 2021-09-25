import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import styles from './ProductArticle.module.scss';

import {ReactComponent as StarIcon} from '../../assets/Icon/Star.svg'

function ProductArticle(props){

  return (
    <>
    <div className={styles.product_item_img}>
      <img src="images/img-product01.jpg" alt="보아르 전기히터"/>
    </div>
    <div className={styles.product_item_content}>
      <h4>
        <span className={styles.product_item_company}>보아르</span>
        <p className={styles.product_item_title}>[스페셜오딜]캠핑/가정용 400W 미니멀 전기히터 VO-HT015</p>
      </h4>
      <div className={styles.product_item_rate}>
        <StarIcon width="18" height="18" fill="#3da5f5"/>
        <span className={styles.product_item_rating} >4.7</span>
        <span className={styles.product_item_review}>리뷰 200</span>
      </div>
      <div className={styles.product_item_price}>
        <span className={styles.product_item_discount}>34%</span>
        <strong>32900<span className={styles.product_item_currency}>원</span></strong>
      </div>
      <div className={styles.product_item_badge}>
        <div className={styles.badge_free}>
          무료배송
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductArticle;