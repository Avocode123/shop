import React from 'react';
import styled, {css} from 'styled-components/native';
import {icons} from '../../assets/images';
import locales from '../../assets/locales';

const HomeHeader = () => {
  return (
    <Header>
      <Title>{locales.app_title}</Title>
      <Image source={icons.header.bell} />
    </Header>
  );
};

export default HomeHeader;

const Header = styled.View`
  ${({theme}) => css`
    margin-bottom: ${theme.sizes.getSpacing(2)}px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: ${theme.sizes.fullDimension};
  `}
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;

const Image = styled.Image``;
