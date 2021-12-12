import React from 'react';
import DetailCarousel from '../../components/DetailCarousel';


import styles from './Detail.module.scss';
import {ReactComponent as StarIcon} from '../../assets/Icon/Star.svg';


function DetailPresenter(props){

  const {OrderField, db, handleOptionValue, orderTotal, selectedValue, listShow, handleClose, tab, setTab, handleTabs, 
    cartAlert, setCartAlert, handleCart, clickedCarousel, setClickedCarousel, select,
    productAmount, handleAmountValue, likeBtn, handleLikeBtnTrue, handleLikeBtnFalse} = props;

  return (
    <section className={styles.detail}>
      <DetailCarousel />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.sm_hidden} ${styles.col_md_6}`}>
           <section className={styles.product_item_carousel}>
            <div className={styles.carousel_img}>
              <img src={`../images/img-product0${
                clickedCarousel.findIndex((el)=> el === true)+1
              }.jpg`} alt="보아르"/>
            </div>
            <div className={styles.carousel_list_group}>
              <ul className={styles.carousel_list}>
                {
                  [1,2,3,4].map((item, index)=>{
                    return (
                    <li className={styles.carousel_list_item}>
                      <button type="button" onClick={()=>{
                        const copyList = [...clickedCarousel];
                        const resetList = [false, false, false, false];
                        if(copyList[index] !== true) {
                          if (copyList[index] === false) {
                            resetList[index] = true;
                            setClickedCarousel([...resetList]);
                          }else {
                            copyList[index] = false;
                            setClickedCarousel([...copyList]);
                          }
                        }
                      }}>
                          <img src={`../images/img-product0${index+1}.jpg`} alt="보아르"/>         
                      </button>
                    </li>
                  )
                  })
                }
              </ul>
            </div>
           </section>
          </div>
          <div className={`${styles.col_sm_4} ${styles.col_md_6}`}>
            {/* 상품 타이틀영역 */}
            <section className={styles.product_item_content}>
              <h4>
                <span className={styles.product_item_company}>{db.company}</span>
                <p className={styles.product_item_title}>{db.title}</p>
              </h4>
              {/* 모바일 일 때 */}
              <div className={`${styles.product_item_evaluation} ${styles.sm_only}`}>
                <div className={`${styles.product_item_rate} `}>
                  {
                    [1,2,3,4,5].map((item, index)=>{
                      return (<StarIcon width="13" height="13" fill="#3da5f5"/>)
                    })
                  }
                </div>
                <span className={`${styles.product_item_review} ${styles.sm_only}`}>({db.review})</span>
              </div>
              {/* 태블릿 이상일 때 */}
              <div className={`${styles.product_item_evaluation} ${styles.sm_hidden}`}>
                <div className={`${styles.product_item_rate}`}>
                  {
                    [1,2,3,4,5].map((item, index)=>{
                      return (<StarIcon width="18" height="18" fill="#3da5f5"/>)
                    })
                  }
                </div>
                <span className={`${styles.product_item_review} ${styles.sm_hidden}`}>{db.review}개 리뷰</span>
              </div>
              
              <div className={styles.product_item_priceTop}>
                <span className={styles.product_item_discount}>{db.discount}</span>
                <span className={styles.product_item_originalPrice}>49,900원</span>
                <div className={styles.product_item_priceBottom}>
                  <strong className={styles.product_item_price}>{db.price.toLocaleString()}<span className={styles.product_item_currency}>원</span></strong>
                  <div className={`${styles.badge_sale} ${styles.tag_red}`}>특가</div>
                  <div className={`${styles.badge_sale} ${styles.tag_gray}`}>무료배송</div>
                </div>
              </div>

              <div className={styles.product_point}>
                <div>포인트</div>
                987P 적립해드립니다. (VIP 3배 혜택 적용됨)
              </div>
            </section>
          </div>
        </div>
      </div>

       {/* 상품 네비영역 */}
       <nav className={styles.product_item_navigation}>
          <ul className={styles.nav_list}>
            <li><button type="button" onClick={()=>{
              setTab({...tab, info:true, review:false, ask:false, delivery:false, recommend:false})
            }}>상품정보</button>{
              tab.info === true
              ? <div></div>
              : null
            }</li>
            <li><button type="button" onClick={()=>{
              setTab({...tab, info:false, review:true, ask:false, delivery:false, recommend:false})
            }}>리뷰 <span className={styles.gray}>{db.review}</span></button>{
              tab.review === true
              ? <div></div>
              : null
            }</li>
            <li><button type="button" onClick={()=>{
              setTab({...tab, info:false, review:false, ask:true, delivery:false, recommend:false})
            }}>문의</button>{
              tab.ask === true
              ? <div></div>
              : null
            }</li>
            <li><button type="button" onClick={()=>{
              setTab({...tab, info:false, review:false, ask:false, delivery:true, recommend:false})
            }}>배송/환불</button>{
              tab.delivery === true
              ? <div></div>
              : null
            }</li>
            <li><button type="button" onClick={()=>{
              setTab({...tab, info:false, review:false, ask:false, delivery:false, recommend:true})
            }}>추천</button>{
              tab.recommend === true
              ? <div></div>
              : null
            }</li>
          </ul>
        </nav>

        {/* 상품 상세영역 */}
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col_sm_4}>
              <section className={styles.product_tab_list}>
                {
                  tab.info === true
                  ? (<div className={styles.productInfo_tab}>
                    {
                      [1,2,3,4,5,6].map((item, index)=>
                      <div className={styles.product_item_img}>
                      <img src={`../images/img-detail0${index+1}.jpg`} alt="보아르 상세 이미지" />
                    </div>
                      )
                    }
                  </div>)
                  : null
                }
                {
                  tab.review === true
                  ? (<div className={styles.review_tab}>
                    <div className={styles.review_tab_top}>
                      <span className={styles.review_tab_title}>리뷰 </span>
                      <span className={styles.review_tab_review}>200</span>
                    </div>

                    <div className={styles.review_tab_summary}>
                      <div className={styles.review_tab_summary_left}>
                        <strong>4.8</strong>
                        <div className={styles.starIcon_group}>
                        {
                          [1,2,3,4,5].map((item, index)=> <StarIcon width="20" height="20" fill="#3da5f5"/>)
                        }
                        </div>
                      </div>
                      <div className={styles.review_tab_summary_right}>
                        <ul>
                          <li>
                            <span className={styles.review_score}>5점</span>
                            <span className={styles.review_graph}></span>
                            <span className={styles.review_number}>180</span>
                          </li>
                          <li>
                            <span className={styles.review_score}>4점</span>
                            <span className={styles.review_graph}></span>
                            <span className={styles.review_number}>15</span>
                          </li>
                          <li>
                            <span className={styles.review_score}>3점</span>
                            <span className={styles.review_graph}></span>
                            <span className={styles.review_number}>5</span>
                          </li>
                          <li>
                            <span className={styles.review_score}>2점</span>
                            <span className={styles.review_graph}></span>
                            <span className={styles.review_number}>0</span>
                          </li>
                          <li>
                            <span className={styles.review_score}>1점</span>
                            <span className={styles.review_graph}></span>
                            <span className={styles.review_number}>0</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <article>
                      <h4 className={styles.visually_hidden}>리뷰</h4>
                      <div className={styles.review_user}>
                        <div className={styles.review_user_img}>
                          <img src="../images/img-user-default.png" alt="사용자 프로필 이미지"/>
                        </div>
                        <div>
                          <strong>스더스더</strong>
                          <div className={styles.review_date}>
                            <div className={styles.starIcon_group}>
                            {
                              [1,2,3,4,5].map((item, index)=> <StarIcon width="13" height="13" fill="#3da5f5"/>)
                            }
                            </div>
                            <span>2021.10.36</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.review_text}>
                        <p>온도 조절과 타이머가 안 된다는 걸 뒤늦게 알았지만 이쁘니까 대만족! 가격도 대만족!</p>
                      </div>
                      <div className={styles.review_likeBtn}>
                        {
                          likeBtn === false
                          ?<button type="button" className={`${styles.btn_outlined} ${styles.btn_32 }`} onClick={handleLikeBtnTrue}>도움이 돼요</button>
                          : <><button type="button" className={`${styles.btn_primary} ${styles.btn_32 }`} onClick={handleLikeBtnFalse}>도움됨</button>
                          <p><span>1</span>명에게 도움이 되었습니다.</p> </>
                        }
                        
                      </div>
                    </article>
                  </div>)
                  : null
                }
                {
                  tab.ask === true
                  ? (<div className={styles.ask_tab}>
                    <div className={styles.ask_tab_top}>
                      <span className={styles.ask_tab_title}>문의</span>
                    </div>
                    <p>아직 작성된 문의가 없습니다 :-)</p>
                  </div>)
                  : null
                }
                {
                  tab.delivery === true
                  ? (<div className={styles.delivery_tab}>
                    <div className={styles.delivery_tab_top}>
                      <span className={styles.delivery_tab_title}>배송</span>
                    </div>
                    <table>
                      <tbody>
                        <tr>
                          <th>배송</th>
                          <td>일반택배</td>
                        </tr>
                        <tr>
                          <th>배송비</th>
                          <td>3,000원 (70,000원 이상 구매시 무료배송)</td>
                        </tr>
                        <tr>
                          <th>도서산간 추가 배송비</th>
                          <td>5,000원</td>
                        </tr>
                        <tr>
                          <th>배송불가 지역</th>
                          <td>배송불가 지역이 없습니다.</td>
                        </tr>
                      </tbody>
                    </table>
                  
                  </div>)
                  : null
                }
                {
                  tab.recommend === true
                  ? ( <div className={styles.recommend_tab}>
                     <div className={styles.recommend_tab_top}>
                      <span className={styles.recommend_tab_title}>추천</span>
                    </div>
                    <p>추천 상품 준비중입니다 :-)</p>
                  </div>)
                  : null
                }
              </section>
            </div>
          </div>
        </div>
       
       <OrderField handleOptionValue={handleOptionValue} listShow={listShow} selectedValue={selectedValue}
        handleAmountValue={handleAmountValue} productAmount={productAmount} handleClose={handleClose}
          orderTotal={orderTotal} cartAlert={cartAlert} handleCart={handleCart} setCartAlert={setCartAlert}/>
    </section>
    
  )
}

export default DetailPresenter;