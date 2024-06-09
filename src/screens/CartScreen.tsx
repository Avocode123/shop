import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {selectCartItems, selectTotalAmount} from '../state/cart/selectors';
import AppLayout from '../components/AppLayout';
import styled from 'styled-components/native';
import _ from 'lodash';

import MainText from '../components/MainText';
import locales from '../assets/locales';
import HorizontalProduct from '../components/Products/HorizontalProduct';
import MainButton from '../components/MainButton';
import {Product} from '../typescript/products';

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotalAmount);

  const renderItem = useCallback(({item}: {item: Product}) => {
    return <HorizontalProduct product={item} />;
  }, []);

  return (
    <AppLayout>
      <Container>
        {_.isEmpty(cartItems) ? (
          <Text>{locales.empty_cart}</Text>
        ) : (
          <Wrapper>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cartItems}
              renderItem={renderItem}
            />
            <MainButton title={`Checkout $${total.toFixed(2)}`} />
          </Wrapper>
        )}
      </Container>
    </AppLayout>
  );
};

export default CartScreen;

const Container = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

const Text = styled(MainText)`
  text-align: center;
`;
