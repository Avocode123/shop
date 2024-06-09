import React from 'react';
import styled, {css} from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {gradientColors} from '../config/constants';
import MainText from './MainText';
import locales from '../assets/locales';
import MainButton from './MainButton';
import {navigate} from '../services/NavService';
import {AppScreens} from '../typescript/enums/AppScreens';

const ClearanceContainer = () => {
  return (
    <Container colors={gradientColors}>
      <TextWrapper>
        <Title>{locales.clearance_sale}</Title>
        <Subtitle>
          {locales.discount} <Discount>80%</Discount>
        </Subtitle>
        <MainButton
          title={locales.shop_now}
          onPress={() => navigate(AppScreens.PRODUCTS_SCREEN)}
        />
      </TextWrapper>
    </Container>
  );
};

export default ClearanceContainer;

const Container = styled(LinearGradient)`
  ${({theme}) => css`
    height: 200px;
    width: ${theme.sizes.fullDimension};
    border-radius: ${theme.roundness.regular}px;
    margin-bottom: ${theme.sizes.divider}px;
    padding: ${theme.sizes.getSpacing(2)}px;
  `}
`;

const TextWrapper = styled.View`
  ${() => css`
    width: 60%;
  `}
`;

const Title = styled(MainText)`
  ${({theme}) => css`
    font-size: ${theme.font.size.h1};
    color: ${theme.colors.background};
    font-weight: ${theme.font.weight.bold};
  `}
`;

const Subtitle = styled(MainText)`
  ${({theme}) => css`
    font-size: ${theme.font.size.lg};
    color: ${theme.colors.background};
    font-weight: ${theme.font.weight.semiBold};
    margin-bottom: ${theme.sizes.getSpacing(2)}px;
  `}
`;

const Discount = styled(MainText)`
  ${({theme}) => css`
    color: ${theme.colors.secondary};
  `}
`;
