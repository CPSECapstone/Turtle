import { combineReducers } from 'redux';

// import Prss from './Prss';
// import Cnvs from './Cnvs';
// import Msgs from './Msgs';
// import Likes from './Likes';
import Errs from './Errs';

const rootReducer = combineReducers({/*Prss, Cnvs, Msgs, Likes,*/ Errs}); 

export default rootReducer;