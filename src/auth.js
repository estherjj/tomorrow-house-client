import axios from "axios";
import Cookie from 'js-cookie';

export const refreshTokenRequest = () => {
  const refreshToken = Cookie.get("refreshToken");
  const data = {
    refreshToken
  };
  const headers = {
    'Content-Type': 'application/json'
  };

  axios.post('/token/refresh', data , {headers: headers})
  .then((res)=>{
    const { accessToken } = res.data;

    // accessToken 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  })
  .catch(error => {
      console.log('refreshToken error')
  });
}

