import { CartItem } from '../store/initState';

export interface CartListAction {
  type: string;
  cartList: CartItem[];
}

export const types = {
  EDIT_GOODS_TO_CART: 'EDIT_GOODS_TO_CART'
};

const actions = {
  editGoodsToCart(cartList: CartItem[]) {
    return {
      type: types.EDIT_GOODS_TO_CART,
      cartList: cartList
    };
  }
};

export default actions;
