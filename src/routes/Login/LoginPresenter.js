import React from 'react';
import styles from './Login.module.scss';

function LoginPresenter(){
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_sm_4}>
            <div className={styles.login}>
              <h2>로그인</h2>
              <form method="get" action="/" className={styles.form}>
                <input type="email" placeholder="아이디(이메일)" name="id" required />
                <input type="password" placeholder="비밀번호" name="password" required />
                <button type="button" className={`${styles.btn_primary} ${styles.btn_55} ${styles.btn_submit}`} >로그인</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPresenter;