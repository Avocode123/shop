import {AppTabs} from '../../typescript/enums/AppScreens';
import {TabStatus} from '../../typescript/enums/TabStatus';

export const icons = {
  logo: require('./splash/ecommerce.png'),
  header: {
    arrow_back: require('./header/arrow.png'),
    bell: require('./header/bell.png'),
  },
  cart: {
    delete: require('./cart/delete.png'),
  },
  tabbar: {
    [AppTabs.HOME]: {
      [TabStatus.Active]: require('./tabbar/home-active.png'),
      [TabStatus.InActive]: require('./tabbar/home-inactive.png'),
    },
    [AppTabs.CART]: {
      [TabStatus.Active]: require('./tabbar/cart-active.png'),
      [TabStatus.InActive]: require('./tabbar/cart-inactive.png'),
    },
  },
};
