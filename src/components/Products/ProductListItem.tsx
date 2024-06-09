import React from 'react';
import styled, {css} from 'styled-components/native';
import {Product} from '../../typescript/products';
import {navigate} from '../../services/NavService';
import {AppScreens} from '../../typescript/enums/AppScreens';

interface Props {
  product: Product;
  vertical?: boolean;
}

const ProductListItem = ({product, vertical}: Props) => {
  return (
    <Container
      vertical={vertical}
      onPress={() => navigate(AppScreens.PRODUCT_DETAIL_SCREEN, {product})}>
      <Image
        source={{uri: product.image}}
        resizeMode="contain"
        vertical={vertical}
      />
      <ProductTitle>{product.title}</ProductTitle>
      <Price>${product.price}</Price>
    </Container>
  );
};

export default ProductListItem;

const Container = styled.TouchableOpacity<{vertical?: boolean}>`
  ${({theme, vertical}) => css`
    height: ${vertical
      ? theme.sizes.verticalProduct
      : theme.sizes.horizontalProduct}px;
    width: ${vertical
      ? theme.sizes.fullDimension
      : `${theme.sizes.horizontalProduct}px`};
    margin-horizontal: ${vertical ? '0' : theme.sizes.getSpacing(1)}px;
    border-radius: ${theme.roundness.regular}px;
    background-color: ${theme.colors.background};
    padding: ${theme.sizes.getSpacing(1)}px;
    border: 1px solid ${theme.colors.secondary};
    margin-bottom: ${theme.sizes.divider}px;
  `}
`;

const Image = styled.Image<{vertical?: boolean}>`
  ${({theme, vertical}) => css`
    height: ${vertical ? '70%' : '80px'};
    width: ${theme.sizes.fullDimension};
  `}
`;

const ProductTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  ${({theme}) => css`
    font-size: ${theme.font.size.md}px;
    font-weight: bold;
    margin-vertical: ${theme.sizes.getSpacing(1)}px;
  `}
`;

const Price = styled.Text``;
