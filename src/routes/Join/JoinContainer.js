import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import {useForm} from 'react-hook-form' ;
import { useHistory } from 'react-router';
import JoinPresenter from './JoinPresenter';

function JoinContainer(){

  const {handleSubmit, register, watch, errors, reset  } = useForm();
  const password = useRef();
  password.current = watch("password");
  const passwordCheck = password.current;

  const history = useHistory();

  const onSubmit = (userData) => {
    reset();
    
    const {userName, id, password} = userData;
    const data = {userName, id, password};

    if(data && (ageCheck &&  useCheck || allCheck) ){
      axios.post("http://127.0.0.1:8000/api/v1/users", data)
      .then((res)=>{
        console.log('join success');
        history('/');
      })
      .catch((error)=>{
        console.log('api error');
      })
    }else {
      console.log('error')
    }

  }


  //약관동의 체크버튼 state
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);


  //전체동의 항목 체크 이벤트
  const allTermsBtnEvent =(e)=>{
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
  const ageTermsBtnEvent =()=>{
    if(ageCheck === false) {
      setAgeCheck(true)
    }else {
      setAgeCheck(false)
    }
  };

  //이용약관 항목 체크 이벤트
  const serviceTermsBtnEvent =()=>{
    if(useCheck === false) {
      setUseCheck(true)
    }else {
      setUseCheck(false)
    }
  };

  //마케팅 항목 체크 이벤트
  const marketingTermsBtnEvent =()=>{
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
      <JoinPresenter handleSubmit={handleSubmit} register={register} watch={watch} errors={errors} passwordCheck={passwordCheck} onSubmit={onSubmit}
      allTermsBtnEvent={allTermsBtnEvent} allCheck={allCheck} ageCheck={ageCheck} ageTermsBtnEvent={ageTermsBtnEvent} useCheck={useCheck} serviceTermsBtnEvent={serviceTermsBtnEvent} marketingCheck={marketingCheck} marketingTermsBtnEvent={marketingTermsBtnEvent}/>
    </>
  )
}

export default JoinContainer;