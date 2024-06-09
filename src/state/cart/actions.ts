import {Product} from '../../typescript/products';

export enum CartActions {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export const addProductToCart = (product: Product) => {
  return {
    type: CartActions.ADD_TO_CART,
    payload: product,
  };
};

export const removeProductFromCart = (product: Product) => {
  return {
    type: CartActions.REMOVE_FROM_CART,
    payload: product,
  };
};
