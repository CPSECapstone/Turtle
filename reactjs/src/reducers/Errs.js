export default function Errs(state = [], action) {
   switch(action.type) {
   case 'LOGIN_ERR':
      return state.concat(action.details);
   case 'SIGN_OUT_ERR':
      return state.concat(action.details);
   case 'REGISTER_ERR':
      return state.concat(action.details);
   case 'UPDATE_CNVS_ERR':
      return state.concat(action.details);
   case 'ADD_CNV_ERR':
      return state.concat(action.details);
   case 'UPDATE_CNV_ERR':
      return state.concat(action.details);
   case 'DEL_CNV_ERR':
      return state.concat(action.details);
   case 'LOAD_MSGS_ERR':
      return state.concat(action.details);
   case 'ADD_MSG_ERR':
      return state.concat(action.details);
   case 'CLEAR_ERRS':
      return [];
   default:
      return state;
   }
}
