import {Products} from './products';

export interface CartState {
  total: number;
  items: Products;
}
