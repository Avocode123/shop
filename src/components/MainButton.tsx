import React from 'react';
import styled, {css} from 'styled-components/native';

interface Props {
  inverted?: boolean;
  title: string;
  onPress?: () => void;
}

const MainButton = ({inverted, title, onPress}: Props) => {
  return (
    <ButtonWrapper inverted={inverted} onPress={onPress}>
      <Button>
        <ButtonText inverted={inverted}>{title}</ButtonText>
      </Button>
    </ButtonWrapper>
  );
};

export default MainButton;

const ButtonWrapper = styled.TouchableOpacity<{inverted?: boolean}>`
  ${({theme, inverted}) => css`
    border: 2px solid ${theme.colors.secondary};
    width: ${theme.sizes.fullDimension};
    justify-content: center;
    align-items: center;
    padding: ${theme.sizes.getSpacing(1)}px;
    border-radius: 10px;
    background-color: ${inverted
      ? theme.colors.background
      : theme.colors.secondary};
  `}
`;

const Button = styled.View``;

const ButtonText = styled.Text<{inverted?: boolean}>`
  ${({theme, inverted}) => css`
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.semiBold};
    color: ${inverted ? '#36a1ff' : theme.colors.background};
  `}
`;
