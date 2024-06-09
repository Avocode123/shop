import {FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectProducts} from '../../state/products/selectors';
import ProductListItem from './ProductListItem';
import {Product} from '../../typescript/products';

interface Props {
  fromIndex?: number;
  toIndex?: number;
  vertical?: boolean;
  filter?: string;
}

const ProductsList = ({fromIndex, toIndex, vertical, filter}: Props) => {
  const state = useSelector(selectProducts);
  const products =
    fromIndex && toIndex ? state?.slice(fromIndex, toIndex) : state;

  const filteredProducts = state?.filter(product =>
    filter?.toLocaleLowerCase() === product.category ? product : null,
  );

  const renderItem = ({item}: {item: Product}) => (
    <ProductListItem product={item} vertical={vertical} />
  );
  return (
    <FlatList
      data={filter ? filteredProducts : products}
      renderItem={renderItem}
      horizontal={!vertical}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductsList;
