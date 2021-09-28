import React, {useState, useEffect}  from 'react';
import styles from './Join.module.scss';

function JoinPresenter(){

  //id, pw 확인 state
  const [id, setId] = useState('');
  const [idError, setIdError] = useState(false);
  const [pw, sestPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [pwOrder, setPwOrder] = useState(true);
  const [pwError, setPwError] = useState(false);

  //id state 저장
  const idCheckEvent = (e) => {
    setId(e.target.value)
  }

  //id 이메일 형식 체크
  useEffect(()=>{
    const regExp =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if( regExp.test(id)) {
      setIdError(false)
      return
    } 
    if (!regExp.test(id) && id !== '') {
      setIdError(true)
    }
  }, [id])

  //password state 저장
  const passworSave = (e) => {
    sestPw(e.target.value);
  }

  //passwordCheck state 저장
  const passworCheckSave = (e) => {
    setPwCheck(e.target.value);
  }

  //password disabled false일 때
  useEffect(()=>{
    if(pw !== '') {
      setPwOrder(false);
    }
  }, [pw])

  //password disabled true일 때
  useEffect(()=>{
    if(pw === '' && pwCheck === '') {
      setPwOrder(true);
    }
  }, [pw, pwCheck])

  //password 일치여부 확인
  useEffect(()=> {
    if(pwCheck.length < pw.length) {
      setPwError(false);
      return
    }

    if(pw !== '' && pwCheck !== '' && pw !== pwCheck) {
      setPwError(true)
    } else {
      setPwError(false)
    }
  }, [pw, pwCheck])


  //약관동의 체크버튼 state
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);


  //전체동의 항목 체크 이벤트
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

  //나이 항목 체크 이벤트
  const ageBtnEvent =()=>{
    if(ageCheck === false) {
      setAgeCheck(true)
    }else {
      setAgeCheck(false)
    }
  };

  //이용약관 항목 체크 이벤트
  const useBtnEvent =()=>{
    if(useCheck === false) {
      setUseCheck(true)
    }else {
      setUseCheck(false)
    }
  };

  //마케팅 항목 체크 이벤트
  const marketingBtnEvent =()=>{
    if(marketingCheck === false) {
      setMarketingCheck(true)
    }else {
      setMarketingCheck(false)
    }
  };

  //세부항목 모두 체크 시 전체동의 항목 체크
  useEffect(()=>{
    if(ageCheck===true && useCheck===true && marketingCheck===true){
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  }, [ageCheck,useCheck, marketingCheck])


  //submit 확인
  const submitEvent = () => {
    if(ageCheck === false || useCheck === false) {
      
      console.log("필수 약관동의를 체크해주세요");
    } 
  }


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
                  <input id="id" type="email" placeholder="이메일(아이디)" name="id" required onBlur={idCheckEvent}/>
                  {
                    idError === true
                    ? <p className={styles.id_warning}>이메일 형식이 올바르지 않습니다.</p>
                    : null
                  }
                </div>
                <div className={styles.form_password}>
                  <label for="password">비밀번호</label>
                  <input id="password" type="password" placeholder="비밀번호" name="password" minLength="8" required onChange={passworSave}/>
                  <p className={`${styles.password_notice}`}>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                </div>
                <div className={styles.form_passwordCheck}>
                  <label for="passwordCheck">비밀번호 확인</label>
                  <input id="passwordCheck" type="password" placeholder="비밀번호 확인" name="passwordCheck" disabled={pwOrder} required onChange={passworCheckSave}/>
                  {
                    pwError === true
                    ? <p className={styles.passwordCheck_warning}>비밀번호가 일치하지 않습니다</p>
                    : null
                  }
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
                <button type="button" className={`${styles.btn_primary} ${styles.btn_55} ${styles.btn_submit}`} onClick={submitEvent}>회원가입하기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinPresenter;