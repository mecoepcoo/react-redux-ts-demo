import React from 'react';
import { withRouter } from 'react-router-dom';
import { basename } from '@/router';

import './NavBar.less';

interface Props {
  history?: any;
}

const NavBar: React.FC<Props> = (props: Props) => {
  const { history } = props;
  const goto = (pathName: string) => {
    history.push(basename + '/' + pathName);
  };

  return (
    <header className="NavBar">
      <div className="NavBar__goodsList btn" onClick={() => goto('')}>
        首页
      </div>
      <div className="NavBar__cart btn" onClick={() => goto('cart')}>
        购物车
      </div>
    </header>
  );
};

export default withRouter(NavBar);
