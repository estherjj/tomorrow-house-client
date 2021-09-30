import React, {useRef} from 'react';
import styles from './Login.module.scss';


function LoginPresenter(props){

  const idData = useRef();
  const passwordData = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = idData.current.value;
    const password = passwordData.current.value;
    props.onlogin(id, password);
  }

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_sm_4}>
            <div className={styles.login}>
              <h2>로그인</h2>
              <form method="POST" action="/" className={styles.form} name="loginForm" onSubmit={handleSubmit}>
                <input type="email" placeholder="아이디(이메일)" name="id" ref={idData} required />
                <input type="password" placeholder="비밀번호" name="password" ref={passwordData} required />
                <button type="submit" className={`${styles.btn_primary} ${styles.btn_55} ${styles.btn_submit}`}>로그인</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPresenter;