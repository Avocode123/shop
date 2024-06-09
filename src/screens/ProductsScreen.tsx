import React from 'react';
import CustomHeader from '../components/CustomHeader';
import AppLayout from '../components/AppLayout';
import locales from '../assets/locales';
import ProductsList from '../components/Products/ProductsList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeStack';
import {AppScreens} from '../typescript/enums/AppScreens';

interface Props
  extends NativeStackScreenProps<
    HomeStackParamList,
    AppScreens.PRODUCTS_SCREEN
  > {}

const ProductsScreen = ({route}: Props) => {
  const {category} = route.params;
  return (
    <AppLayout withPadding>
      <CustomHeader headerTitle={category || locales.all_products} />
      <ProductsList vertical filter={category} />
    </AppLayout>
  );
};

export default ProductsScreen;
