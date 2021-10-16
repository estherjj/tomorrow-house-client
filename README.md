# 리액트 프로젝트 - tomorrow_house


# 실행 방법

* 터미널에서 npm start 입력하여 앱 실행 -> localhost:3000으로 접근 가능
* 로그인, 회원가입 진행은 서버 실행 후 가능


# 회원가입 API(진행중)

* POST http://127.0.0.1:8000/api/v1/users/ (미확정)
* parameter(data)
    - username : 유저 이를
    - id : 아이디(이메일)
    - password : 비밀번호


# 로그인 API(진행중)

* POST http://127.0.0.1:8000/api/v1/users/token/
* parameter(data)
    - id : 아이디(이메일)
    - password : 비밀번호