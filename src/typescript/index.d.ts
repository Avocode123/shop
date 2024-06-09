import {defaultTheme} from '../theme';

type TDefaultTheme = typeof defaultTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends TDefaultTheme {}
}

export interface Action<T, P> {
  type: T;
  payload: P;
}
