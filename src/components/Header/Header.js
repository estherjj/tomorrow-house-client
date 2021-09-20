import React, { useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.scss';

import DrawerMenu from '../DrawerMenu/DrawerMenu';
import SearchModal from '../SearchModal';

import { ReactComponent as MenuIcon } from '../../assets/Icon/Menu.svg';
import { ReactComponent as SearchIcon } from '../../assets/Icon/Search.svg';
import { ReactComponent as CartIcon } from '../../assets/Icon/Cart.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/Icon/Bookmark.svg';
import { ReactComponent as BellIcon } from '../../assets/Icon/Bell.svg';
import {ReactComponent as Close} from '../../assets/Icon/Close.svg';

function Header(props){
  const [category, setCategory] = useState(['가구', '패브릭', '조명', '가전', '주방용품', '장식/소품', '수납/정리', '생활용품', '생필품']);
  const [cartBtnColor, setCartBtnColor] = useState("#3f4150");
  const [drawerShow, setDrawerShow] = useState(false);
  const [searchModalShow, setSearchModalShow] = useState(false);
  const [closeBtnShow, setCloseBtnShow] = useState(false);
  const [lnbShow, setLngShow] = useState(false);

  return (
    <>
    <header>
      <div className={styles.header_top}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.col_sm_4} ${styles.col_md_12} ${styles.col_lg_12}`}>
              <div className={styles.header_content}>
                <h1 className={styles.logo}>
                  <Link to="/"><img src="./images/logo.svg" alt="내일의 집"/></Link>
                </h1>

                <button type="button" className={`${styles.menuBtn} ${styles.icon} ${styles.sm_only}`} onClick={()=>{
                  setDrawerShow(true)
                }}>
                  <MenuIcon width="24" height="24" fill="#3da5f5"/>
                </button>

                <div className={styles.header_content_icon_group}>
                  <div className={`${styles.search_group} ${styles.sm_hidden}`} aria-label="검색 버튼">
                    <SearchIcon fill="#3f4150" className={styles.search_icon}/>
                    <input type="text" placeholder="내일의 집 통합검색" className={styles.search_input} />
                  </div>

                  <button type="button" className={`${styles.sm_only} ${styles.icon} ${styles.searchBtn}`} aria-label="검색 버튼" onClick={()=>{
                    setSearchModalShow(true);
                  }}>
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
                    <ul className={styles.header_user_list}>
                      <Link to="/login" aria-label="로그인 페이지로 이동" className={styles.header_user_item_login}>로그인</Link>
                      <Link to="/join" aria-label="회원가입 페이지로 이동" className={styles.header_user_item_join}>회원가입</Link>
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
      </div>

      <div className={styles.gnb}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col_sm_4}>
              <nav>
                <h2 className={styles.visually_hidden}>메뉴</h2>
                {
                  closeBtnShow === false
                  ? (<button type="button" className={`${styles.menuBtn} ${styles.icon} ${styles.sm_hidden}`} onClick={()=>{
                    setLngShow(true);
                    setCloseBtnShow(true);
                  }}>
                    <MenuIcon width="28" height="28" fill="#3da5f5"/>
                  </button>)
                  : (<button type="button" className={`${styles.menuBtn} ${styles.icon} ${styles.sm_hidden}`} onClick={()=>{
                    setLngShow(false);
                    setCloseBtnShow(false);
                  }}>
                    <Close width="28" height="28" fill="#3da5f5"/>
                  </button>)
                }
                <ul className={styles.gnb_list}>
                  <Link to="/" className={styles.gnb_item}>베스트</Link>
                  <Link to="/" className={styles.gnb_item}>오늘의딜</Link>
                  <Link to="/" className={styles.gnb_item}>가을특가</Link>
                  <Link to="/" className={styles.gnb_item}>지정일배송</Link>
                  <Link to="/" className={styles.gnb_item}>프리미엄</Link>
                  <Link to="/" className={styles.gnb_item}>기획전</Link>
                </ul>
              </nav>
            </div>
          </div>
          {
            lnbShow === true
            ? (<div className={styles.row}>
              <div className={styles.col_sm_4}>
                <ul className={styles.lnb_list}>
                {
                  category.map(item=> {
                    return (<li className={styles.lnb_item} onClick={()=>{
                      setLngShow(false);
                      setCloseBtnShow(false);
                    }}>
                      <Link to="/category">{item}</Link>
                    </li>)
                  })
                }
                </ul>
              </div>
            </div>)
            : null
          }
        </div>
      </div>
    </header>

    {
      drawerShow === true
      ? <DrawerMenu drawerShow={drawerShow} setDrawerShow={setDrawerShow}/>
      : null
    }

    {
      searchModalShow === true
      ? <SearchModal searchModalShow={searchModalShow} setSearchModalShow={setSearchModalShow}/>
      : null
    }

    </>
  )
};

export default withRouter(Header);