import React from 'react';
import { withRouter } from 'react-router-dom';
import { Routes } from '@/interfaces/router/Router';
import NavBar from '@/components/NavBar/NavBar';
import AddToCartBar from '@/components/AddToCartBar/AddToCartBar';

import './GoodsPage.less';

const GoodsPage: React.FC<Routes> = (routes: Routes) => {
  return (
    <div className="GoodsPage">
      <NavBar />
      <img className="GoodsPage__pic" />
      <div className="GoodsPage__name">名称</div>
      <div className="GoodsPage__price">￥99.98</div>
      <div className="GoodsPage__stock">剩余库存：999</div>
      <AddToCartBar />
    </div>
  );
};

export default withRouter(GoodsPage);
