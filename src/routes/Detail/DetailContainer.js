import React, {useState, useEffect, useRef} from 'react';
import DetailPresenter from './DetailPresenter';
import OrderField from '../../components/OrderField/index.js';

import db from '../../db';

function DetailContainer(){
  const DB = db;

  // Tab 관련
  const [tab, setTab] = useState({info:true, review:false, ask:false, delivery:false, recommend:false});
  const handleTabs = () => {
    console.log('click!')
  };


  // Tablet 이상 Carousel 관련
  const [clickedCarousel, setClickedCarousel] = useState([true, false, false, false]);

  
  // like 버튼 관련
  const [likeBtn, setLikeBtn] = useState(false);
  const handleLikeBtnTrue = () => {
    setLikeBtn(true);
  }
  const handleLikeBtnFalse = () => {
    setLikeBtn(false);
  }

  return(
    <>
      <DetailPresenter db={DB} OrderField={OrderField} tab={tab} setTab={setTab}
      handleTabs={handleTabs} clickedCarousel={clickedCarousel} setClickedCarousel={setClickedCarousel} 
      likeBtn={likeBtn} handleLikeBtnTrue={handleLikeBtnTrue} handleLikeBtnFalse={handleLikeBtnFalse}/>
      
    </>
  )
}

export default DetailContainer;