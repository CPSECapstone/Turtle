import { combineReducers } from 'redux';

import Prss from './Prss';
import Errs from './Errs';

const rootReducer = combineReducers({Prss, Errs}); 

export default rootReducer;