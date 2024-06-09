import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {Product} from '../typescript/products';

export type TParams = Record<string, string | number | Product | (() => void)>;

export const navigationRef = createNavigationContainerRef<any>();

export const navigate = (name: string, params: Partial<TParams> = {}): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const replaceStack = (
  name: string,
  params: Partial<TParams> = {},
): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
};

export const goBack = (): void => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};
