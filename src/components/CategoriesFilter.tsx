import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {selectProducts} from '../state/products/selectors';
import styled, {css} from 'styled-components/native';
import MainText from './MainText';
import {navigate} from '../services/NavService';
import {AppScreens} from '../typescript/enums/AppScreens';

const CategoriesFilter = () => {
  const products = useSelector(selectProducts);
  const categories = [...new Set(products?.map(product => product.category))];

  const renderItem = useCallback(({item}: {item: string}) => {
    const category = item.charAt(0).toUpperCase() + item.slice(1);
    return (
      <Button onPress={() => navigate(AppScreens.PRODUCTS_SCREEN, {category})}>
        <Text>{category}</Text>
      </Button>
    );
  }, []);

  return (
    <>
      <FlatList
        data={categories}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default CategoriesFilter;

const Button = styled.TouchableOpacity`
  ${({theme}) => css`
    border: 2px solid ${theme.colors.secondary};
    margin-right: ${theme.sizes.getSpacing(2)}px;
    padding: ${theme.sizes.getSpacing(1)}px;
    border-radius: ${theme.roundness.button}px;
    margin-bottom: ${theme.sizes.divider}px;
  `}
`;

const Text = styled(MainText)`
  ${({theme}) => css`
    color: ${theme.colors.secondary};
  `}
`;
