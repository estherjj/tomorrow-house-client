const defaultState = {
  isLoggedIn: false,
  user: {}
};


const userReducer = (state = defaultState, action) => {
 if(action.type === 'LOGIN_SUCCESS') {
  let data = action.payload;
  return (
    {...state, fetchingUpdate: false, isLoggedIn: true, user: {...data}}
  )
  } else if( action.type === 'LOGIN_FAILURE') {
    return(
      {...state, isLoggedIn: false}
    )
  }else {
    return (state)
  }
}

export default userReducer;
