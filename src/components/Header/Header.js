import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.scss';

import { ReactComponent as MenuIcon } from '../../assets/Icon/Menu.svg';
import { ReactComponent as SearchIcon } from '../../assets/Icon/Search.svg';
import { ReactComponent as CartIcon } from '../../assets/Icon/Cart.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/Icon/Bookmark.svg';
import { ReactComponent as BellIcon } from '../../assets/Icon/Bell.svg';

function Header(props){
  const [cartBtnColor, setCartBtnColor] = useState("#3f4150");
  const [menuBtnClick, setMenuBtnClick] = useState(true);

  return (
    <>
    <header>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col_sm_4} ${styles.col_md_12} ${styles.col_lg_12}`}>
            <div className={styles.gnb}>
              <h1 className={styles.logo}>
                <Link to="/"><img src="./images/logo.svg" alt="내일의 집"/></Link>
              </h1>

              <button type="button" className={`${styles.menuBtn} ${styles.icon} ${styles.sm_only}`}>
                <MenuIcon fill="#3da5f5"/>
              </button>

              <div className={styles.gnb_icon_group}>
                <div className={`${styles.search_group} ${styles.sm_hidden}`} aria-label="검색 버튼">
                  <SearchIcon fill="#3f4150" className={styles.search_icon}/>
                  <input type="text" placeholder="내일의 집 통합검색" className={styles.search_input} />
                </div>

                <button type="button" className={`${styles.sm_only} ${styles.icon} ${styles.searchBtn}`} aria-label="검색 버튼" >
                  <SearchIcon fill="#3f4150"/>
                </button>
                <Link to="/cart" className={` ${styles.sm_only} ${styles.icon} ${styles.cartBtn}`} aria-label="장바구니로 이동">
                  <CartIcon  fill={cartBtnColor}/>
                </Link>

                {/* ** Tablet & Desktop 로그인 전 ** */}
                <Link to="/cart" className={`${styles.sm_hidden} ${styles.icon} ${styles.cartBtn}`} aria-label="장바구니로 이동" onMouseOver={()=>{setCartBtnColor("#fff")}} onMouseOut={()=>{setCartBtnColor("#3f4150")}}>
                  <CartIcon  fill={cartBtnColor}/>
                </Link>
                <nav className={styles.sm_hidden}>
                  <h2 className={styles.visually_hidden}>메뉴</h2>
                  <ul className={styles.gnb_list}>
                    <Link to="/login" aria-label="로그인 페이지로 이동" className={styles.gbn_item_login}>로그인</Link>
                    <Link to="/join" aria-label="회원가입 페이지로 이동" className={styles.gbn_item_join}>회원가입</Link>
                  </ul>
                </nav>

                {/* ** Tablet & Desktop 로그인 후 ** */}
                {/* <nav className={styles.sm_hidden}>
                  <h2 className={styles.visually_hidden}>메뉴</h2>
                  <ul>
                    <Link to="#" aria-label="북마크 페이지로 이동">
                      <BookmarkIcon fill="#3f4150" />
                    </Link>
                    <Link to="#" aria-label="알림 페이지로 이동">
                      <BellIcon fill="#3f4150" />
                    </Link>
                    <Link to="#">
                      <CartIcon fill="#3f4150" aria-label="장바구니 페이지로 이동"/>
                    </Link>
                  </ul>
                  <button type="button" aria-label="마이 메뉴 열기 버튼" className={styles.profile}>
                    <img src="./images/img-user-default.png" alt="유저 프로필 사진"/>
                  </button>
                </nav> */}

                </div>
              </div>
          </div>
        </div>

      </div>
    </header>
    </>
  )
};

export default withRouter(Header);