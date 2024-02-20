import {SET_SHOP, SET_SHOP_DELETE} from '../constants';

const activeStore = {};

const activeStoreReducer = (state = activeStore, action) => {
  switch (action.type) {
    case SET_SHOP:
      return {
        ...state,
        ...action.payload,
      };
    case SET_SHOP_DELETE:
      return {};
    default:
      break;
  }
  return state;
};
export default activeStoreReducer;
