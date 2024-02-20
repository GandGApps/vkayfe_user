import {SET_CUSTOMER, SET_CUSTOMER_DELETE} from '../constants';

const customer = {};

const customerReducer = (state = customer, action) => {
  switch (action.type) {
    case SET_CUSTOMER:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CUSTOMER_DELETE:
      return {};
    default:
      break;
  }
  return state;
};
export default customerReducer;
