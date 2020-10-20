export default function Errs(state = [], action) {
    switch(action.type) {
    // EXAMPLE
    // case 'ADD_MSG_ERR':
    //    return state.concat(action.details);
    case 'CLEAR_ERRS':
       return [];
    default:
       return state;
    }
 }
 