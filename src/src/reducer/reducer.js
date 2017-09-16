import {combineReducers , createStore , applyMiddleware} from 'redux';
import { reducer as form } from 'redux-form';
import getDataReducer from './auth_reducer';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
   getdata: getDataReducer
});


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

//const store = createStore(rootReducer);

export default store;