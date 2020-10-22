import * as api from '../api';

export function signIn(credentials, cb) {
   return (dispatch, prevState) => {
      api.signIn(credentials)
      .then((userInfo) => dispatch({type: "SIGN_IN", user: userInfo}))
      .then(() => {if (cb) cb();})
      .catch(error => dispatch({type: 'LOGIN_ERR', details: error}));
   };
}

export function signOut(cb) {
   return (dispatch, prevState) => {
      api.signOut()
      .then(() => dispatch({ type: 'SIGN_OUT' }))
      .then(() => {if (cb) cb();})
      .catch(error => dispatch({type: 'SIGN_OUT_ERR', details: error}));
   };
}

export function register(data, cb) {
   return (dispatch, prevState) => {
      api.register(data)
      .then(() => {if (cb) cb();})
      .catch(error => dispatch({type: 'REGISTER_ERR', details: error}));
   };
}

export function clearErrs() {
   return (dispatch, prevState) => {
      dispatch({ type: 'CLEAR_ERRS' })
   };
}