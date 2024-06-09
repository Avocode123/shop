import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styled, {css} from 'styled-components/native';
import {EdgeInsets} from 'react-native-safe-area-context';
import MainText from './MainText';
import {icons} from '../assets/images';
import {AppTabs} from '../typescript/enums/AppScreens';
import {TabStatus} from '../typescript/enums/TabStatus';

const CustomTabBar = ({state, insets, navigation}: BottomTabBarProps) => {
  const handleNavigation = (route: string) => navigation.navigate(route);

  //@ts-expect-error TODO add types
  const renderTab = (route, index) => {
    const status =
      index === state.index ? TabStatus.Active : TabStatus.InActive;

    const icon = icons.tabbar[route.name as AppTabs][status];

    const tabTitle = route.name.charAt(0).toUpperCase() + route.name.slice(1);

    return (
      <Tab key={route.key} onPress={() => handleNavigation(route)}>
        <Icon source={icon} />
        <Text active={!!status}>{tabTitle}</Text>
      </Tab>
    );
  };

  return <Container insets={insets}>{state.routes.map(renderTab)}</Container>;
};

export default CustomTabBar;

const Container = styled.View<{insets: EdgeInsets}>`
  ${({theme, insets}) => css`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: ${insets.bottom}px;
    padding-top: ${theme.sizes.getSpacing(2)}px;
    background-color: ${theme.colors.background};
    border-top-width: 1px;
    border-top-color: ${theme.colors.border};
  `}
`;

const Tab = styled.TouchableOpacity`
  ${({theme}) => css`
    justify-content: space-between;
    align-items: center;
    height: ${theme.sizes.tab}px;
  `}
`;

const Text = styled(MainText)<{active: boolean}>`
  ${({theme, active}) => css`
    color: ${active ? theme.colors.secondary : theme.colors.text};
  `}
`;

const Icon = styled.Image`
  ${({theme}) => css`
    height: ${theme.sizes.icon}px;
    width: ${theme.sizes.icon}px;
  `}
`;
