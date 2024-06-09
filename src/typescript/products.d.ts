import {Product} from '../typescript/products';

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

export type Products = Product[];

export interface ProductsState {
  products: Products;
}
