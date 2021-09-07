import React from 'react';
import styles from './Header.module.scss';

function Header(){
  return (
    <div className={styles.father}>
      <div className={styles.child}>Hello</div>
      <div className={styles.child}>Hello</div>
      <div className={styles.child}>Hello</div>
    </div>
  )
};

export default Header;