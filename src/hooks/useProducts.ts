import {useCallback, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setProducts} from '../state/products/actions';
import {PRODUCTS_API_URL} from '../config/constants';

export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const {data: products} = await axios.get(PRODUCTS_API_URL);
      dispatch(setProducts(products));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [setLoading, dispatch]);

  return {
    fetchProducts,
    loading,
  };
};
