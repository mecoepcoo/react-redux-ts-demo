export interface GoodsItem {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface CartItem extends GoodsItem {
  num: number;
}

export interface InitState {
  goodsList: GoodsItem[];
  cartList: CartItem[];
}

const initState: InitState = {
  /* 商品列表 */
  goodsList: [
    // {
    //   id: 123,
    //   name: 'name',
    //   price: 100,
    //   stock: 996
    // }
  ],
  /* 购物车列表 */
  cartList: [
    // {
    //   id: 123,
    //   name: 'name',
    //   price: 100,
    //   stock: 996,
    //   num: 2
    // }
  ]
};

export default initState;
