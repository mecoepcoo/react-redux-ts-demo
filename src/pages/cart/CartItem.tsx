import React from 'react';
import { withRouter } from 'react-router-dom';

import Counter from '@/components/Counter/Counter';

import './CartItem.less';

const CartItem: React.FC = () => {
  return (
    <div className="CartItem">
      <img className="CartItem__pic" src="" />
      <h1 className="CartItem__title">
        测试名称<span className="CartItem__price">￥99.98</span>
        <Counter />
      </h1>
    </div>
  );
};

export default withRouter(CartItem);
