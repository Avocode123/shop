import {RootState} from '../store';

export const selectCartItems = (state: RootState) => state.cartReducer.items;
export const selectTotalAmount = (state: RootState) => state.cartReducer.total;
