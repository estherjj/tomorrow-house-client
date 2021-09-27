import React, {useState, useEffect}  from 'react';
import styles from './Join.module.scss';

function JoinPresenter(){

  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);


  const allBtnEvent =(e)=>{
    if(allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    }else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    } 
  };
  const ageBtnEvent =()=>{
    if(ageCheck === false) {
      setAgeCheck(true)
    }else {
      setAgeCheck(false)
    }
  };
  const useBtnEvent =()=>{
    if(useCheck === false) {
      setUseCheck(true)
    }else {
      setUseCheck(false)
    }
  };
  const marketingBtnEvent =()=>{
    if(marketingCheck === false) {
      setMarketingCheck(true)
    }else {
      setMarketingCheck(false)
    }
  };

  useEffect(()=>{
    if(ageCheck===true && useCheck===true && marketingCheck===true){
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  }, [ageCheck,useCheck, marketingCheck])


  


  return (
    <section>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_sm_4}>
            <div className={styles.join}>
              <h2>회원가입</h2>
              <form method="get" action="/" className={styles.form}>
                <div className={styles.form_id}>
                  <label for="id">아이디</label>
                  <input id="id" type="email" placeholder="이메일(아이디)" />
                </div>
                <div className={styles.form_firstPassword}>
                  <label for="firstPassword">비밀번호</label>
                  <input id="firstPassword" type="password" placeholder="비밀번호"  />
                  <p>

                  </p>
                </div>
                <div className={styles.form_lastPassword}>
                  <label for="lastPassword">비밀번호 확인</label>
                  <input id="lastPassword" type="password" placeholder="비밀번호 확인" />
                </div>
                {/* 약관동의 */}
                <div className={styles.form_agreement}>
                  <label className={styles.form_agreement_title}>약관동의</label>
                  <div className={styles.form_agreement_box}>
                    <div className={styles.form_agreement_all}>
                      <input type="checkbox" id="all-check" checked={allCheck} onChange={allBtnEvent}/>
                      <label for="all-check">전체동의</label>
                    </div>
                    <div className={styles.form_agreement_item}>
                      <input type="checkbox" id="check1" checked={ageCheck} onChange={ageBtnEvent}/>
                      <label for="check1">만 14세 이상입니다 <span className={styles.blue}>(필수)</span></label>
                    </div>
                    <div className={styles.form_agreement_item}>
                      <input type="checkbox" id="check2" checked={useCheck}  onChange={useBtnEvent}/>
                      <label for="check2">이용약관 <span className={styles.blue}>(필수)</span></label>
                    </div>
                    <div className={styles.form_agreement_item}>
                      <input type="checkbox" id="check3" checked={marketingCheck}  onChange={marketingBtnEvent}/>
                      <label for="check3">마케팅 동의 <span className={styles.gray}>(선택)</span></label>
                    </div>
                  </div>
                </div>
                <button type="submit" className={`${styles.btn_primary} ${styles.btn_55} ${styles.btn_submit}`}>회원가입하기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinPresenter;