import * as Mock from 'mockjs';
import { GoodsItem } from '@/redux/store/initState';

const goodsSrv = {
  getGoodsList() {
    let count = ~~(Math.random() * 20);
    let goodsList: GoodsItem[] = [];
    for (let i = 0; i < count; i++) {
      let goods: GoodsItem = {
        id: Mock.mock('@increment'),
        name: Mock.mock('@word'),
        price: Mock.mock('@float(0, 1000, 0, 2)'),
        stock: Mock.mock('@integer(0, 1000)')
      };
      goodsList.push(goods);
    }
    return goodsList;
  }
};

export default goodsSrv;
