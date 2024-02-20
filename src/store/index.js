import {combineReducers, legacy_createStore as createStore} from 'redux';
import userReducer from './customerReducer';
import ActiveStore from './activeStore';
import filterReducer from './filterReducer';

const store = createStore(
  combineReducers({
    customer: userReducer,
    activeStore: ActiveStore,
    filter: filterReducer,
  }),
);

export default store;
