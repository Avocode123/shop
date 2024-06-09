import React from 'react';
import styled from 'styled-components/native';
import {TextStyle} from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: TextStyle;
}

const MainText = ({children, style}: Props) => {
  return <Text style={style}>{children}</Text>;
};

export default MainText;

const Text = styled.Text``;
