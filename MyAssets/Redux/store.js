import {createStore} from 'redux';
import burgerReducer from './Burger/burgerReducer';

// Passing burgerReducer to createStore
const store = createStore(burgerReducer);

export default store;
