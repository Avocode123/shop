import {Action} from '../../typescript';
import {Products, ProductsState} from '../../typescript/products';
import {ProductsActions} from './actions';

type SetProductsAction = Action<ProductsActions.SET_PRODUCTS, Products>;

const initialState: ProductsState = {
  products: [],
};

export const productsReducer = (
  state = initialState,
  action: SetProductsAction,
) => {
  switch (action.type) {
    case ProductsActions.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
