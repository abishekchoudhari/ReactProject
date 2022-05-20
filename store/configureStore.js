import {createStore, combineReducers, applyMiddleware} from 'redux';
import pageListReducer from '../Redux/reducers/pageListReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({pageList: pageListReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
