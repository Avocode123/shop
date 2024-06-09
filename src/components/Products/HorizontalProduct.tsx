import React from 'react';
import styled, {css} from 'styled-components/native';
import {Product} from '../../typescript/products';
import {icons} from '../../assets/images';
import {useCart} from '../../hooks/useCart';

interface Props {
  product: Product;
}

const HorizontalProduct = ({product}: Props) => {
  const {removeFromCart} = useCart();

  return (
    <Container>
      <ImageWrapper>
        <Image source={{uri: product.image}} resizeMode="contain" />
      </ImageWrapper>
      <Wrapper>
        <ProductTitle>{product.title}</ProductTitle>
        <Price>${product.price}</Price>
      </Wrapper>
      <ButtonWrapper onPress={() => removeFromCart(product)}>
        <ButtonIcon source={icons.cart.delete} resizeMode="contain" />
      </ButtonWrapper>
    </Container>
  );
};

export default HorizontalProduct;

const Container = styled.View`
  ${({theme}) => css`
    height: ${theme.sizes.horizontalProduct}px;
    width: ${theme.sizes.horizontalProduct}px;
    margin-bottom: ${theme.sizes.divider}px;
    padding: ${theme.sizes.getSpacing(1)}px;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: ${theme.colors.product};
    border-radius: ${theme.roundness.regular}px;
  `}
`;

const Image = styled.Image`
  ${({theme}) => css`
    height: 80px;
    width: 80px;
    border-radius: ${theme.roundness.regular}px;
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

const Wrapper = styled.View`
  ${({theme}) => css`
    flex: 1;
    padding-horizontal: ${theme.sizes.getSpacing(1)}px;
  `}
`;
const ImageWrapper = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.background};
    height: ${theme.sizes.fullDimension};
    justify-content: center;
    align-items: center;
    border-radius: ${theme.roundness.regular}px;
    padding: ${theme.sizes.getSpacing(1)}px;
  `}
`;

const ButtonWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled.Image`
  height: 24px;
  width: 24px;
`;
