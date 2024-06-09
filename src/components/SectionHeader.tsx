import React from 'react';
import styled, {css} from 'styled-components/native';
import MainText from './MainText';
import locales from '../assets/locales';
import {AppScreens} from '../typescript/enums/AppScreens';
import {navigate} from '../services/NavService';

interface Props {
  title: string;
}

const SectionHeader = ({title}: Props) => {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <SeeAllContainer onPress={() => navigate(AppScreens.PRODUCTS_SCREEN)}>
        <SeeAll>{locales.see_all}</SeeAll>
      </SeeAllContainer>
    </Container>
  );
};

export default SectionHeader;

const Container = styled.View`
  ${({theme}) => css`
    width: ${theme.sizes.fullDimension};
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: ${theme.sizes.divider}px;
  `}
`;
const SectionTitle = styled.Text`
  ${({theme}) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.md};
  `}
`;

const SeeAllContainer = styled.TouchableOpacity``;
const SeeAll = styled(MainText)`
  ${({theme}) => css`
    color: ${theme.colors.disabled};
    font-size: ${theme.font.size.rg};
  `}
`;
