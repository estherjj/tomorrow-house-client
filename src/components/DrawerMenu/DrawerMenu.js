import React, {useState, useRef }  from "react";
import { Link } from "react-router-dom";
import styles from './DrawerMenu.module.scss';

import {ReactComponent as Store} from "../../assets/Icon/Store.svg";

function DrawerMenu(props){
  const drawer_section = useRef();
  const [category, setCategory] = useState(['가구', '패브릭', '조명', '가전', '주방용품', '장식/소품', '수납/정리', '생활용품', '생필품']);

  return(
    <>
    <aside className={styles.sm_only} ref={drawer_section} onClick={(e)=>{
      if(e.target === drawer_section.current){
        props.setDrawerShow(false)
      }
    }}>
      <div className={styles.drawer_menu}>
        <div className={styles.drawer_menu_header}>
          <div className={styles.logo}>
            <img src="./images/logo.svg" alt="내일의 집"/>
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
              category.map(item=> {
                return (<li className={styles.drawer_menu_category_item} onClick={()=>{
                  props.setDrawerShow(false)
                }}>
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