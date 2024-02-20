import {SET_FILTER_DELETE, SET_FILTER} from '../constants';

const filter = {
  priceSort: {
    priceDesc: false,
    priceAsc: false,
    newFirst: false,
  },
};

const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        ...action.payload,
      };
    case SET_FILTER_DELETE:
      return {};
    default:
      break;
  }
  return state;
};
export default filterReducer;
