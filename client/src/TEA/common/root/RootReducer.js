import { combineReducers } from 'redux';
import user from '../member/reducer/userReducer';

const rootReducer = combineReducers({
    user,
});

export default rootReducer;
