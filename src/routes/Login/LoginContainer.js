import React from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// import {onSilentRefresh} from '../../auth';
import LoginPresenter from './LoginPresenter';

function LoginContainer(){ 
  const use = useSelector((state)=>state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  //login
  const onlogin = (id, password) => {
    const data = {id, password};
    const headers = {
      'Content-Type': 'application/json'
    };

    axios.post("http://127.0.0.1:8000/api/v1/users/token/", data, {headers: headers})
    .then((res)=> {
      const {accessToken} = res.data;
      dispatch({type: 'LOGIN_SUCCESS', payload: {"accessToken": accessToken}});

      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      history.push("/");
    })
    .catch((error)=>{
      dispatch({type: 'LOGIN_FAILURE'});
      // refreshTokenSaveCookie(id);
      history.push("/login");
      console.log('LOGIN FAILURE');
    })
  }
  

  return(
    <section>
      <LoginPresenter onlogin={onlogin} use={use}/>
    </section>
  )
}

export default LoginContainer;