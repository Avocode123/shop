import {Action} from '../../typescript';
import {CartState} from '../../typescript/cart';
import {Product} from '../../typescript/products';
import {CartActions} from './actions';

type AddToCartAction = Action<CartActions.ADD_TO_CART, Product>;
type RemoveFromCartAction = Action<CartActions.REMOVE_FROM_CART, Product>;

export type CartActionTypes = AddToCartAction | RemoveFromCartAction;

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartReducer = (state = initialState, action: CartActionTypes) => {
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
