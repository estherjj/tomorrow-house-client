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
              <form method="POST" action="/" className={styles.form} onSubmit={props.handleSubmit(props.onSubmit)}>
                <div className={styles.form_userName}>
                  <label for="userName">이름</label>
                  <input id="userName" type="text" placeholder="이름" name="userName" ref={props.register({required: true})}/>
                  {props.errors.userName && <p className={styles.input_warning_warning}>이름을 입력해주세요</p>}
                </div>
                <div className={styles.form_id}>
                  <label for="id">아이디</label>
                  <input id="id" type="email" placeholder="아이디(이메일)" name="id" ref={props.register({required: true, pattern: /^[0-9A-Z]([-_\.]?[0-9A-Z])*@[0-9A-Z]([-_\.]?[0-9A-Z])*\.[A-Z]{2,6}$/i })}/>
                  {props.errors.id && <p className={styles.input_warning_warning}>이메일 형식이 올바르지 않습니다.</p>}
                </div>
                <div className={styles.form_password}>
                  <label for="password">비밀번호</label>
                  <input id="password" type="password" placeholder="비밀번호(8자리 이상)" name="password" ref={props.register({required: true, minLength: 8})}/>
                  {props.errors.password && <p className={styles.input_warning_warning}>8자 이상의 비밀번호를 입력해주세요.</p>}
                </div>
                <div className={styles.form_passwordCheck}>
                  <label for="passwordCheck">비밀번호 확인</label>
                  <input id="passwordCheck" type="password" placeholder="비밀번호 확인(8자리 이상)" name="passwordCheck"  ref={props.register({required: true, validate:value => value === props.passwordCheck})}/>
                  {props.errors.passwordCheck && <p className={styles.input_warning_warning}>비밀번호가 일치하지 않습니다.</p>}
                </div>
                {/* 약관동의 */}
                <div className={styles.form_agreement}>
                  <label className={styles.form_agreement_title}>약관동의</label>
                  <div className={styles.form_agreement_box}>
                    <div className={styles.form_agreement_all}>
                      <input type="checkbox" id="all-check" name="agreement" value="agreeAll" checked={props.allCheck} onChange={props.allTermsBtnEvent}/>
                      <label for="all-check">전체동의</label>
                    </div>
                    <div className={styles.form_agreement_item}>
                      <input type="checkbox" id="check1" name="agreement" value="agreeAge" checked={props.ageCheck} onChange={props.ageTermsBtnEvent}/>
                      <label for="check1">만 14세 이상입니다 <span className={styles.blue}>(필수)</span></label>
                    </div>
                    <div className={styles.form_agreement_item}>
                      <input type="checkbox" id="check2" name="agreement" value="agreeUse" checked={props.useCheck}  onChange={props.serviceTermsBtnEvent}/>
                      <label for="check2">이용약관 <span className={styles.blue}>(필수)</span></label>
                    </div>
                    <div className={styles.form_agreement_item}>
                      <input type="checkbox" id="check3" name="agreement" value="agreeMarketing" checked={props.marketingCheck}  onChange={props.marketingTermsBtnEvent}/>
                      <label for="check3">마케팅 동의 <span className={styles.gray}>(선택)</span></label>
                    </div>
                  </div>
                </div>
                <button type="submit" className={`${styles.btn_primary} ${styles.btn_55} ${styles.btn_submit}`} >회원가입하기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinPresenter;