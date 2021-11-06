import React, {useState, useRef, useEffect }  from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './DrawerMenu.module.scss';

import {ReactComponent as Store} from "../../assets/Icon/Store.svg";

function DrawerMenu(props){
  const drawer_section = useRef();

  let category = useSelector((state)=>state.categoryReducer);
 

  return(
    <>
    <aside className={styles.sm_only} ref={drawer_section} onClick={(e)=>{
      if(e.target === drawer_section.current){
        props.setDrawerShow(false)
      }
    }}>
      <h2 className={styles.visually_hidden}>케렌시아</h2>
      <div className={styles.drawer_menu}>
        <div className={styles.drawer_menu_header}>
          <div className={styles.logo}>
            <img src="./images/logo.svg" alt="케렌시아"/>
          </div>
          {/* 로그인 전 */}
          <div className={styles.user_link}>
            <Link to="/login" className={`${styles.btn_login} ${styles.btn_primary} ${styles.btn_40}`} onClick={()=>{
              props.setDrawerShow(false)
            }}>
              로그인
            </Link>
            <Link to="/join" className={`${styles.btn_join} ${styles.btn_outlined} ${styles.btn_40}`}  onClick={()=>{
              props.setDrawerShow(false)
            }}>
              회원가입
            </Link>
          </div>

          {/* 로그인 후 */}
          {/* <div className={styles.user}>
            <div className={styles.user_profile}>
              <img src="./images/img-user-default.png" alt="유저 프로필 사진"/>
            </div>
            <span className={styles.user_name}>김내일</span>
          </div> */}
        </div>
        <nav className={styles.drawer_menu_category}>
          <h2>카테고리</h2>
          <Store fill="#3f4150" className={`${styles.icon} ${styles.storeIcon}`}/>
          <ul className={styles.drawer_menu_category_list}>
            {
              category.map((item, index)=> {
                return (<li className={styles.drawer_menu_category_item} onClick={()=>{
                  props.setDrawerShow(false)
                }} key={index}>
                  <Link to="/category">{item}</Link>
                </li>)
              })
            }
          </ul>
        </nav>
      </div>
    </aside>
    </>
  )
}

export default DrawerMenu;