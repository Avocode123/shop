import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppScreens} from '../typescript/enums/AppScreens';
import {HomeStackParamList} from '../navigation/HomeStack';
import CustomHeader from '../components/CustomHeader';
import AppLayout from '../components/AppLayout';
import styled, {css} from 'styled-components/native';
import MainButton from '../components/MainButton';
import locales from '../assets/locales';
import {useCart} from '../hooks/useCart';

interface Props
  extends NativeStackScreenProps<
    HomeStackParamList,
    AppScreens.PRODUCT_DETAIL_SCREEN
  > {}

const ProductDetailScreen = ({route}: Props) => {
  const {title, description, image, price} = route.params.product;
  const {addToCart} = useCart();

  return (
    <AppLayout withPadding>
      <Container>
        <CustomHeader headerTitle={title} />
        <Image source={{uri: image}} resizeMode="contain" />
        <Wrapper>
          <ProductTitle>{title}</ProductTitle>
          <Price>${price}</Price>
        </Wrapper>
        <Description>{description}</Description>
        <ButtonContainer>
          <MainButton
            title={locales.add_to_cart}
            onPress={() => addToCart(route.params.product)}
          />
        </ButtonContainer>
      </Container>
    </AppLayout>
  );
};

export default ProductDetailScreen;

const Container = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  ${({theme}) => css`
    height: ${theme.sizes.verticalImage}px;
    width: ${theme.sizes.fullDimension};
  `}
`;

const Wrapper = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-vertical: ${theme.sizes.getSpacing(3)}px;
  `}
`;

const ProductTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  ${() => css`
    font-size: 20px;
    font-weight: bold;
    width: 70%;
  `}
`;

const Price = styled.Text`
  font-size: 20px;
`;

const Description = styled.Text`
  font-size: 18px;
`;

const ButtonContainer = styled.View`
  ${({theme}) => css`
    position: absolute;
    bottom: 0;
    width: ${theme.sizes.fullDimension};
    margin-bottom: ${theme.sizes.getSpacing(3)}px;
  `}
`;
