import React, {useState, useRef, useEffect }  from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styles from './CartAlert.module.scss';


function CartAlert(props){
  const {setCartAlert} = props;
  const history = useHistory();

  useEffect(()=>{
    document.body.style.overflow = "hidden";
  }, [])

  return(
    <div className={styles.cartAlert_section}>
      <div className={styles.cartAlert_content}>
        <p className={styles.cartAlert_ment}>장바구니에 상품을 담았습니다</p>
        <div className={styles.btn_group}>
        <button type="button" className={`${styles.btn_primary} ${styles.btn_48}`} onClick={()=>{
          history.push('/cart');
          document.body.style.overflow = "unset"
        }}>장바구니로 이동</button>
        <button type="button" className={`${styles.btn_secondary} ${styles.btn_48}`} onClick={()=>{
          setCartAlert(false);
          document.body.style.overflow = "unset"
        }}>확인</button>
        </div>
      </div>
    </div>
  )
}

export default CartAlert;