import React from 'react';
import styles from './SearchModal.module.scss';

import {ReactComponent as SearchIcon} from '../../assets/Icon/Search.svg';

function SearchModal(props){
  return(
    <>
    <aside className={`${styles.search_modal} ${styles.sm_only}`}>
      <h2 className={styles.visually_hidden}>검색창</h2>
      <div className={styles.search_modal_header}>
        <div className={`${styles.search_group}`} aria-label="검색 버튼">
          <SearchIcon fill="#3f4150" className={styles.search_icon}/>
          <input type="text" placeholder="내일의 집 통합검색" className={styles.search_input} />
        </div>
        <button type="button" className={styles.closeBtn} onClick={()=>{props.setSearchModalShow(false)}}>
          취소
        </button>
      </div>
      <div className={styles.search_modal_list}>
        <span className={styles.search_modal_list_title}>최근 검색어</span>
        <div className={styles.search_modal_list_results}>
          최근 검색한 내역이 없습니다.
        </div>
      </div>
    </aside>
    </>
  )
}

export default SearchModal;