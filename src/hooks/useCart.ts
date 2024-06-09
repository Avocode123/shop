import {useDispatch} from 'react-redux';
import {Product} from '../typescript/products';
import {addProductToCart, removeProductFromCart} from '../state/cart/actions';
import {useCallback} from 'react';

export const useCart = () => {
  const dispatch = useDispatch();

  const addToCart = useCallback(
    (product: Product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch],
  );

  const removeFromCart = useCallback(
    (product: Product) => {
      dispatch(removeProductFromCart(product));
    },
    [dispatch],
  );

  return {
    addToCart,
    removeFromCart,
  };
};
