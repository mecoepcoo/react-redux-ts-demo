import loadable from '@loadable/component';

export const basename = '';

export const routes = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/goods_list/GoodsListPage')),
    name: 'GoodsList',
    title: 'goods-list'
  },
  {
    path: '/goods/:id',
    exact: true,
    component: loadable(() => import('@/pages/goods/GoodsPage')),
    name: 'Goods',
    title: 'goods'
  },
  {
    path: '/cart',
    exact: true,
    component: loadable(() => import('@/pages/cart/CartPage')),
    name: 'Cart',
    title: 'cart'
  },
  // 404 Not Found
  {
    path: '*',
    exact: true,
    component: loadable(() => import('@/pages/goods_list/GoodsListPage')),
    name: 'GoodsList',
    title: 'goods-list'
  }
];

export function beforeRouter(route: any) {
  /* do something... */
}
