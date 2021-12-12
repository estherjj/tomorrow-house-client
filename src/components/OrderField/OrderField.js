import React, {useState} from 'react';

import db from '../../db';
import styles from './OrderField.module.scss';

import CartAlert from '../../components/CartAlert';
import {ReactComponent as CloseIcon} from '../../assets/Icon/Close.svg'

function OrderField (props) {

  // const {handleOptionValue, listShow, handleAmountValue, productAmount,
  // handleClose, orderTotal, cartAlert, handleCart, setCartAlert} = props;

  // Select Section 관련
  const [selectSectionShow, setSelectSectionShow] = useState(false);
  const handleSelectShow = () => {
    setSelectSectionShow(true);
  }
  

  // Cart Alert 관련
  const [cartAlert, setCartAlert] = useState(false);
  const handleCart = () => {
    setCartAlert(true)
  }

  // 상품선택명 관련
  const [selectedValue, setSelectedValue] = useState('');
  const [orderTotal, setOrderTotal] = useState(0);
  const [listShow, setListShow] = useState(false);
  const handleOptionValue = (e) => {
    if (selectedValue !== '0') {
      setSelectedValue(e.target.value);
      setListShow(true);
    } 
  }
  const handleClose = () => {
    setListShow(false);
  }

  // 상품 옵션 갯수 관련
  const [productAmount, setProductAmount] = useState('');
  const handleAmountValue = (e) => {
    setProductAmount(e.target.value);
  }

  return (
    <>
    {/* 상품선택창 */}
    {
      selectSectionShow === true
      ? (<div className={styles.select_section}>
        <div className={styles.select_content}>
          <select className={styles.select_field} name="product" onChange={handleOptionValue}>
            <option className={styles.select_option} value={0}>상품 선택</option>
            {
              db.sort.map((item, index)=>{return (
              <option className={styles.select_option} value={index+1}>{db.sort[index]}</option>
              )})
            }
          </select>
  
          <div className={styles.select_list_box}>
            <ul>
              {
                listShow === true
                ? (<li className={styles.select_list_item}>
                <p className={styles.select_option}>{db.sort[selectedValue-1]}</p>
                <div>
                  <select onChange={handleAmountValue}>
                  {
                    [1,2,3,4,5].map((item, index)=> (
                      <option value={index+1}>{item}</option>
                    ))
                  }
                  </select>
                  <strong>
                    {productAmount === ''
                    ? db.price.toLocaleString()
                    : (db.price * productAmount).toLocaleString()}
                    <span className={styles.product_item_currency}>원</span></strong>
                </div>
                <button type="button" onClick={handleClose}><CloseIcon width="20" heigth="20" fill="#8c8d96"/></button>
              </li>)
                : null
              }
              
            </ul>
          </div>
          
          <div className={styles.order_price}>
            <span>주문금액</span>
            <strong>{orderTotal}<span className={styles.product_item_currency}>원</span></strong>
          </div>
        </div>
      </div>)
      : null
    }
    

    {/* 구매하기 버튼영역 */}
    <section className={styles.buy_section}>
      <div className={styles.button_group}>
        <button type="button"className={`${styles.btn_outlined} ${styles.btn_48}`} onClick={handleSelectShow}>장바구니</button>
        <button type="button" className={`${styles.btn_primary} ${styles.btn_48}`} onClick={handleSelectShow}>구매하기</button>
      </div>
    </section>

    {/* 징바구니 Alert */}   
    {
      cartAlert === true
      ?  <CartAlert setCartAlert={setCartAlert}/>
      : null
    }
    </>
  )
}

export default OrderField;