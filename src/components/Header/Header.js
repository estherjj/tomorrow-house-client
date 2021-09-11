import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import {ReactComponent as MenuIcon} from '../../assets/Icon/Menu.svg';
import {ReactComponent as SearchIcon} from '../../assets/Icon/Search.svg';
import {ReactComponent as CartIcon} from '../../assets/Icon/Cart.svg';
import {ReactComponent as BookmarkIcon} from '../../assets/Icon/Bookmark.svg';
import {ReactComponent as BellIcon} from '../../assets/Icon/Bell.svg';

function Header(){
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_sm_4}>
            <div className={styles.gnb}>
              <div className={styles.header_left}>
                <h1 className={styles.logo}>
                  <Link to="/"><img src="./images/logo.svg" alt="내일의 집"/></Link>
                </h1>

                <button type="button" className={styles.menuBtn}>
                  <MenuIcon fill="#3da5f5"/>
                </button>
              </div>
              <div className={styles.header_right}>
              <div className={`${styles.search_group} ${ styles.lg_only}`}>
                <SearchIcon fill="#3f4150" className={styles.search_icon} aria-hidden/>
                <input type="text" placeholder="내일의 집 통합검색" className={styles.search_input}/>
              </div>

              <button type="button" className={styles.sm_only}>
                <SearchIcon fill="#3f4150" aria-lable="검색"/>
              </button>

              <Link to="/cart">
                <CartIcon  fill="#3f4150" aria-lable="장바구니"/>
              </Link>

              <nav className={styles.sm_hidden}>
                <h2 className={styles.visually_hidden}>메뉴</h2>
                <ul>
                  <Link to="/login" aria-label="로그인 페이지로 이동">로그인</Link>
                  <Link to="/join" aria-label="회원가입 페이지로 이동">회원가입</Link>
                </ul>
              </nav>

              <nav className={styles.sm_hidden}>
                <h2 className={styles.visually_hidden}>메뉴</h2>
                <ul>
                  <Link to="#">
                    <BookmarkIcon fill="#3f4150" />
                  </Link>
                  <Link to="#">
                    <BellIcon fill="#3f4150" />
                  </Link>
                  <Link to="#">
                    <CartIcon fill="#3f4150" />
                  </Link>
                </ul>
                <button type="button" aria-label="마이 메뉴 열기 버튼" className={styles.profile}>
                  <img src="./images/img-user-default.png" alt="유저 프로필 사진"/>
                </button>
              </nav>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;