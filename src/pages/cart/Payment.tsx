import React from 'react';
import { withRouter } from 'react-router-dom';

import './Payment.less';

const Payment: React.FC = () => {
  return (
    <div className="Payment">
      <div className="Payment__price">结算：￥100.00</div>
    </div>
  );
};

export default withRouter(Payment);
