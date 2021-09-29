import React from 'react';
import styles from './Join.module.scss';

function JoinPresenter(props){

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_sm_4}>
            <div className={styles.join}>
              <h2>회원가입</h2>
              <form method="get" action="/" className={styles.form}>
                <div className={styles.form_userName}>
                  <label for="userName">이름</label>
                  <input id="userName" type="text" placeholder="이름" name="userName" required onChange={props.userNameSave}/>
      
                </div>
                <div className={styles.form_id}>
                  <label for="id">아이디</label>
                  <input id="id" type="email" placeholder="아이디(이메일)" name="id" required onChange={props.idSave}/>
                  {
                    props.idError === true
                    ? <p className={styles.id_warning}>이메일 형식이 올바르지 않습니다.</p>
                    : null
                  }
                </div>
                <div className={styles.form_password}>
                  <label for="password">비밀번호</label>
                  <input id="password" type="password" placeholder="비밀번호" name="password" minLength="8" required onChange={props.passworSave}/>
                  <p className={`${styles.password_notice}`}>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                </div>
                <div className={styles.form_passwordCheck}>
                  <label for="passwordCheck">비밀번호 확인</label>
                  <input id="passwordCheck" type="password" placeholder="비밀번호 확인" name="passwordCheck" disabled={props.pwOrder} required onChange={props.passworCheckSave}/>
                  {
                    props.pwError === true
                    ? <p className={styles.passwordCheck_warning}>비밀번호가 일치하지 않습니다</p>
                    : null
                  }
                </div>
                {/* 약관동의 */}
                <div className={styles.form_agreement}>
                  <label className={styles.form_agreement_title}>약관동의</label>
                  <div className={styles.form_agreement_box}>
                    <div className={styles.form_agreement_all}>
                      <input type="checkbox" id="all-check" checked={props.allCheck} onChange={props.allBtnEvent}/>
                      <label for="all-check">전체동의</label>
                    </div>
                    <div className={styles.form_agreement_item}>
                      <input type="checkbox" id="check1" checked={props.ageCheck} onChange={props.ageBtnEvent}/>
                      <label for="check1">만 14세 이상입니다 <span className={styles.blue}>(필수)</span></label>
                    </div>
                    <div className={styles.form_agreement_item}>
                      <input type="checkbox" id="check2" checked={props.useCheck}  onChange={props.useBtnEvent}/>
                      <label for="check2">이용약관 <span className={styles.blue}>(필수)</span></label>
                    </div>
                    <div className={styles.form_agreement_item}>
                      <input type="checkbox" id="check3" checked={props.marketingCheck}  onChange={props.marketingBtnEvent}/>
                      <label for="check3">마케팅 동의 <span className={styles.gray}>(선택)</span></label>
                    </div>
                  </div>
                </div>
                <button type="button" className={`${styles.btn_primary} ${styles.btn_55} ${styles.btn_submit}`} >회원가입하기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinPresenter;