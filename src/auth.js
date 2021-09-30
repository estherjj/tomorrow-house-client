import axios from "axios";

const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

export const onSilentRefresh = () => {
  axios.post('/silent-refresh', {headers : {'Content-Type': 'application/json'}} )
  .then((res)=>{
    const { accessToken } = res.data;

    // accessToken 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    // accessToken 만료하기 1분 전에 로그인 연장
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
  })
  .catch(error => {
      console.log('error')
  });
}

