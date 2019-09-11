import React from 'react';
import { withRouter } from 'react-router-dom';

import './AddToCartBar.less';

const AddToCartBar: React.FC = () => {
  return (
    <div className="AddToCartBar">
      <div className="AddToCartBar__add btn">加入购物车</div>
    </div>
  );
};

export default withRouter(AddToCartBar);
