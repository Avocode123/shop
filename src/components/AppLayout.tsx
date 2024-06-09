import React from 'react';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';
import {TDefaultTheme} from '../typescript';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  withPadding?: boolean;
  edges?: Edge[];
  scrollable?: boolean;
}

const AppLayout = ({children, withPadding, edges, scrollable}: Props) => {
  const safeAreaEdges = edges || ['top'];

  const Container = scrollable ? ScrollView : Wrapper;

  return (
    <SafeArea edges={safeAreaEdges}>
      <Container withPadding={withPadding}>{children}</Container>
    </SafeArea>
  );
};

export default AppLayout;

const commonStyles = ({
  theme,
  withPadding,
}: {
  theme: TDefaultTheme;
  withPadding?: boolean;
}) => css`
  padding: ${withPadding ? theme.sizes.appPadding : 0}px;
  flex: 1;
`;

const Wrapper = styled.View<{withPadding?: boolean}>`
  ${commonStyles}
`;
const ScrollView = styled.ScrollView<{withPadding?: boolean}>`
  ${commonStyles}
`;
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;
