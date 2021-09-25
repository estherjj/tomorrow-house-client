import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

import Carousel from '../../components/Carousel';
import ProductArticle from '../../components/ProductArticle';

import {ReactComponent as ChevronIcon} from '../../assets/Icon/Chevron.svg'



function HomePresenter(){

  return (
    <div className={styles.home} >
      <Carousel/>

      {/* 오늘의 딜 */}
      <section className={styles.today_section}>
        <div className={styles.container}>
          {/* tittle 영역*/}
          <div className={styles.row}>
            <div className={`${styles.col_sm_4} ${styles.section_title}`}>
              <h3>오늘의 딜</h3>
              <Link to="/"> 더보기</Link>
            </div>
          </div>
          {/* list 영역*/}
          <div className={styles.row}>
            {
              [1,2,3,4].map((item, index)=>{
                return(
                  <div className={`${styles.col_sm_4} ${styles.col_md_4} ${styles.col_lg_3}`} key={index}>
                    <article>
                      <Link to="/products/1" className={`${styles.product_item}`}>
                        <ProductArticle />
                      </Link>
                    </article>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* 인기 상품 */}
      <section className={styles.popular_section}>
        <div className={styles.container}>
          {/* tittle 영역*/}
          <div className={styles.row}>
            <div className={`${styles.section_title} ${styles.col_sm_4} `}>
              <h3>인기 상품</h3>
              <div className={styles.filter_group}>
                <button type="button" className={styles.filter_delivery}>
                  배송
                  <ChevronIcon width="18" height="18" fill="#3f4150" className={styles.icon_chevron} />
                </button>
                <button type="button" className={styles.filter_ranking}>
                  인기순
                  <ChevronIcon width="18" height="18" fill="#8c8d96" className={styles.icon_chevron} />
                </button>
              </div>
            </div>
          </div>
          {/* list 영역*/}
          <div className={styles.row}>
            {
              [1,2,3,4,5,6,7,8].map((item, index)=>{
                return(
                  <div className={`${styles.col_sm_2} ${styles.col_md_3} ${styles.col_lg_3}`} key={index}>
                    <article>
                      <Link to="/products/1" className={`${styles.product_item_column}`}>
                        <ProductArticle />
                      </Link>
                    </article>
                  </div>
                )
              })  
            }
          </div>
        </div>
      </section> 
    </div>
  )
}

export default HomePresenter;