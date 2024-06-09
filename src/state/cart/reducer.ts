import {CartState} from '../../typescript/cart';
import {CartActions} from './actions';

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case CartActions.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};
