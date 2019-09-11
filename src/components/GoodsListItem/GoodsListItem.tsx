import React from 'react';
import { withRouter } from 'react-router-dom';
import { basename } from '@/router';

import './GoodsListItem.less';

interface Props {
  history: any;
}

const GoodsListItem: React.FC<Props> = (props: Props) => {
  const { history } = props;
  const goto = (goodsId: string | number) => {
    history.push(basename + '/goods/' + goodsId);
  };

  return (
    <div className="GoodsListItem" onClick={() => goto('')}>
      <img className="GoodsListItem__pic" src="" />
      <h1 className="GoodsListItem__title">
        测试名称<span className="GoodsListItem__price">￥99.98</span>
      </h1>
    </div>
  );
};

export default withRouter(GoodsListItem);
