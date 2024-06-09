import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const sizes = {
  windowWidth: width,
  windowHeight: height,
  spacing: 8,
  loader: 30,
  button: 50,
  header: 55,
  input: 50,
  icon: 26,
  tab: 45,
  horizontalProduct: 150,
  verticalProduct: 250,
  verticalImage: 250,
  fullDimension: '100%' as const,
};

export const defaultTheme = {
  colors: {
    text: '#000000',
    background: '#FFFFFF',
    primary: '#6C5BDC',
    secondary: '#E56B13',
    error: '#FF3B3D',
    disabled: '#909090',
    placeholder: '#909090',
    border: '#E4E7EC',
    product: '#F0F0F0',
  },
  font: {
    size: {
      h1: '34px' as const,
      h2: '32px' as const,
      h3: '28px' as const,
      h4: '26px' as const,
      h5: '24px' as const,
      xl: '22px' as const,
      lg: '20px' as const,
      md: '18px' as const,
      rg: '16px' as const,
      sm: '14px' as const,
      xs: '12px' as const,
    },

    weight: {
      bold: '700' as const,
      semiBold: '500' as const,
      regular: '400' as const,
      light: '300' as const,
    },
  },
  sizes: {
    ...sizes,
    getSpacing: (multiplier: number) => multiplier * sizes.spacing,
    appPadding: 2 * sizes.spacing,
    divider: 16,
  },

  roundness: {
    regular: 10,
    button: 15,
  },
};
