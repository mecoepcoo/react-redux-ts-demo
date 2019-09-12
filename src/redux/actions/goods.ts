import goodsSrv from '@/services/goods';
import { GoodsItem } from '../store/initState';

export interface GoodsListAction {
  type: string;
  goodsList: GoodsItem[];
}

export const types = {
  GET_GOODS_LIST: 'GET_GOODS_LIST'
};

const actions = {
  getGoodsList(): GoodsListAction {
    let data = goodsSrv.getGoodsList();
    return {
      type: types.GET_GOODS_LIST,
      goodsList: data
    };
  }
};

export default actions;
