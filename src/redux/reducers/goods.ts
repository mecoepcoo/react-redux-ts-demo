import createReducer from '@/utils/createReducer';
import { types, GoodsListAction } from '../actions/goods';
import initState, { GoodsItem } from '../store/initState';

const ACTION_HANDLERS = {
  [types.GET_GOODS_LIST]: (state: GoodsItem[], { goodsList }: GoodsListAction): GoodsItem[] => goodsList
};

export default createReducer(initState.goodsList, ACTION_HANDLERS);
