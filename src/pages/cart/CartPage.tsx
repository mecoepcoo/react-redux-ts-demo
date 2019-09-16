import React from 'react';
import { withRouter } from 'react-router-dom';
import { Routes } from '@/interfaces/router/Router';
import NavBar from '@/components/NavBar/NavBar';
import CartItem from './CartItem';
import Payment from './Payment';

import './CartPage.less';

const CartPage: React.FC<Routes> = (routes: Routes) => {
  return (
    <div className="CartPage">
      <NavBar />
      <CartItem />
      <Payment />
    </div>
  );
};

export default withRouter(CartPage);
