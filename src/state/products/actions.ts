import {Products} from '../../typescript/products';

export enum ProductsActions {
  SET_PRODUCTS = 'SET_PRODUCTS',
}

export const setProducts = (products: Products) => {
  return {
    type: ProductsActions.SET_PRODUCTS,
    payload: products,
  };
};
