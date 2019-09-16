import React from 'react';
import { withRouter } from 'react-router-dom';
import { Routes } from '@/interfaces/router/Router';
import NavBar from '@/components/NavBar/NavBar';
import GoodsListItem from '@/components/GoodsListItem/GoodsListItem';

import './GoodsListPage.less';

const GoodsListPage: React.FC<Routes> = (routes: Routes) => {
  return (
    <div className="GoodsListPage">
      <NavBar />
      <GoodsListItem />
    </div>
  );
};

export default withRouter(GoodsListPage);
