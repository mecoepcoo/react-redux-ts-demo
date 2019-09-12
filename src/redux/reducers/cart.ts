import createReducer from '@/utils/createReducer';
import { types, CartListAction } from '../actions/cart';
import initState, { CartItem } from '../store/initState';

const ACTION_HANDLERS = {
  [types.EDIT_GOODS_TO_CART]: (state: CartItem[], { cartList }: CartListAction): CartItem[] => cartList
};

export default createReducer(initState.cartList, ACTION_HANDLERS);
