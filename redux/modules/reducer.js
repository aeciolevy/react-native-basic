import { combineReducers } from 'redux';
import occupations from './occupations'

export default combineReducers({
    [occupations.mountPoint]: occupations.reducer,
});
