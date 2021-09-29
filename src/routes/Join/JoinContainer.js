import React, {useState, useEffect} from 'react';
import JoinPresenter from './JoinPresenter';

function JoinContainer(){

  //userName, id, pw 
  const [userName, setUserName] = useState('');
  const [id, setId] = useState('');
  const [idError, setIdError] = useState(false);
  const [pw, sestPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [pwOrder, setPwOrder] = useState(true);
  const [pwError, setPwError] = useState(false);

  //userName state 저장
  const userNameSave = (e) => {
    setUserName(e.target.value);
  }

  //id state 저장
  const idSave = (e) => {
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
    // if(pwCheck.length < pw.length) {
    //   setPwError(false);
    //   return
    // }

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


  return(
    <>
      <JoinPresenter userNameSave={userNameSave} idSave={idSave} idError={idError} passworSave={passworSave} passworCheckSave={passworCheckSave} pwOrder={pwOrder} pwError={pwError} 
      allBtnEvent={allBtnEvent} allCheck={allCheck} ageCheck={ageCheck} ageBtnEvent={ageBtnEvent} useCheck={useCheck} useBtnEvent={useBtnEvent} marketingCheck={marketingCheck} marketingBtnEvent={marketingBtnEvent}/>
    </>
  )
}

export default JoinContainer;