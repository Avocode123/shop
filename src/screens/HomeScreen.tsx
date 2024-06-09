import React from 'react';
import AppLayout from '../components/AppLayout';
import styled, {css} from 'styled-components/native';
import ClearanceContainer from '../components/ClearanceContainer';
import CategoriesFilter from '../components/CategoriesFilter';
import ProductsSection from '../components/ProductsSection';
import HomeHeader from '../components/Home/HomeHeader';

const HomeScreen = () => {
  return (
    <AppLayout withPadding scrollable>
      <Container>
        <HomeHeader />
        <CategoriesFilter />
        <ClearanceContainer />
        <ProductsSection />
      </Container>
    </AppLayout>
  );
};

export default HomeScreen;

const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: ${theme.sizes.getSpacing(4)}px;
  `}
`;
