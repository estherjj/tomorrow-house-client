import React, {useState} from 'react';
import styles from './Home.module.scss';
import Carousel from '../../components/Carousel';


function HomePresenter(){

  return (
    <div className={styles.home}>
      <Carousel />
      {/* <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_sm_4}>
            
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default HomePresenter;