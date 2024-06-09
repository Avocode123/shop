import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import {productsReducer} from '../products/reducer';
import {cartReducer} from '../cart/reducer';

export const rootReducer = combineReducers({
  productsReducer: productsReducer,
  cartReducer: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
