import React, {useEffect} from 'react';
import styled, {css} from 'styled-components/native';
import {icons} from '../assets/images';
import MainText from '../components/MainText';
import locales from '../assets/locales';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigation';
import {AppScreens, NavigationType} from '../typescript/enums/AppScreens';
import {useProducts} from '../hooks/useProducts';
import {ActivityIndicator} from 'react-native';
import _ from 'lodash';
import {selectProducts} from '../state/products/selectors';
import {useSelector} from 'react-redux';

interface Props
  extends NativeStackScreenProps<
    RootStackParamList,
    AppScreens.SPLASH_SCREEN
  > {}

const SplashScreen = ({navigation}: Props) => {
  const {fetchProducts, loading} = useProducts();
  const products = useSelector(selectProducts);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading && !_.isEmpty(products)) {
      navigation.replace(NavigationType.TAB);
    }
  }, [loading, navigation, products]);

  return (
    <Container>
      <Logo source={icons.logo} />
      <Text>{locales.app_title}</Text>
      {loading && <ActivityIndicator size={24} color="black" />}
    </Container>
  );
};

export default SplashScreen;

const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
  `}
`;

const Logo = styled.Image``;

const Text = styled(MainText)`
  ${({theme}) => css`
    font-size: ${theme.font.size.lg};
    font-weight: ${theme.font.weight.semiBold};
    margin-vertical: ${theme.sizes.getSpacing(2)}px;
  `}
`;
