import React from 'react';
import SectionHeader from './SectionHeader';
import ProductsList from './Products/ProductsList';
import locales from '../assets/locales';

const ProductsSection = () => {
  return (
    <>
      <SectionHeader title={locales.special_for_you} />
      <ProductsList fromIndex={5} toIndex={10} />
      <SectionHeader title={locales.best_sellers} />
      <ProductsList fromIndex={15} toIndex={20} />
    </>
  );
};

export default ProductsSection;
