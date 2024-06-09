import React from 'react';
import styled, {css} from 'styled-components/native';
import {icons} from '../assets/images';
import {goBack} from '../services/NavService';

interface Props {
  headerTitle: string;
}

const CustomHeader = ({headerTitle}: Props) => {
  return (
    <Container>
      <Button onPress={() => goBack()}>
        <Image source={icons.header.arrow_back} />
      </Button>
      <Text>{headerTitle}</Text>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default CustomHeader;

const Container = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.sizes.divider}px;
  `}
`;

const Image = styled.Image``;

const Text = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  ${({theme}) => css`
    font-size: ${theme.font.size.lg};
    font-weight: ${theme.font.weight.semiBold};
    width: 50%;
    text-align: center;
  `}
`;

const Button = styled.TouchableOpacity``;

const Wrapper = styled.View``;
